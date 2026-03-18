import { NextResponse } from "next/server"
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

    if (!validateAdminCredentials(credentials.username, credentials.password)) {
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