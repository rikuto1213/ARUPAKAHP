import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { z } from "zod"

import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionValue,
  isAdminAuthConfigured,
  validateAdminCredentials,
} from "@/lib/admin-auth"

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      { message: "管理者認証がまだ設定されていません。" },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const credentials = loginSchema.parse(body)
    const requestHeaders = await headers()

    const normalizedUsername = credentials.username.trim()
    const normalizedPassword = credentials.password.trim()
    const maskedUsername =
      normalizedUsername.length <= 2
        ? "*".repeat(normalizedUsername.length)
        : `${normalizedUsername.slice(0, 2)}${"*".repeat(normalizedUsername.length - 2)}`

    if (!validateAdminCredentials(normalizedUsername, normalizedPassword)) {
      console.warn("[ADMIN_LOGIN_401]", {
        timestamp: new Date().toISOString(),
        maskedUsername,
        usernameLength: normalizedUsername.length,
        passwordLength: normalizedPassword.length,
        ip: requestHeaders.get("x-forwarded-for") ?? "unknown",
        userAgent: requestHeaders.get("user-agent") ?? "unknown",
        hasAdminUsername: Boolean(process.env.ADMIN_USERNAME),
        hasAdminPassword: Boolean(process.env.ADMIN_PASSWORD),
        hasAdminSessionSecret: Boolean(process.env.ADMIN_SESSION_SECRET),
      })

      return NextResponse.json(
        { message: "ユーザーネームまたはパスワードが正しくありません。" },
        { status: 401 }
      )
    }

    const sessionValue = createAdminSessionValue()

    if (!sessionValue) {
      return NextResponse.json(
        { message: "管理者認証がまだ設定されていません。" },
        { status: 503 }
      )
    }

    const response = NextResponse.json({ ok: true })

    response.cookies.set({
      name: ADMIN_SESSION_COOKIE,
      value: sessionValue,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "入力内容が不足しています。" }, { status: 400 })
    }

    return NextResponse.json({ message: "ログイン処理に失敗しました。" }, { status: 500 })
  }
}