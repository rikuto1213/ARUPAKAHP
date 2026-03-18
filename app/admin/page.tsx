import Link from "next/link"
import { cookies } from "next/headers"

import AdminLoginForm from "@/components/admin-login-form"
import AdminLogoutButton from "@/components/admin-logout-button"
import { ADMIN_SESSION_COOKIE, isAdminAuthConfigured, isValidAdminSession } from "@/lib/admin-auth"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

const quickLinks = [
  {
    title: "ホームへ戻る",
    description: "公開サイトの見え方をそのまま確認できます。",
    href: "/",
    label: "トップページへ",
  },
  {
    title: "メンバー募集ページ",
    description: "入部希望者向け情報の更新確認に使えます。",
    href: "/join",
    label: "募集ページへ",
  },
  {
    title: "企業向けページ",
    description: "協賛や制作相談向けの案内内容を確認できます。",
    href: "/corporate",
    label: "企業向けページへ",
  },
]

const notices = [
  "問い合わせデータは Neon PostgreSQL から最新順で表示しています。",
  "本番では Vercel 側にも ADMIN_USERNAME / ADMIN_PASSWORD / ADMIN_SESSION_SECRET の設定が必要です。",
  "運用タスクが増える場合は、このページ配下に管理画面用ルートを追加してください。",
]

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value)
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  const isConfigured = isAdminAuthConfigured()
  const isAuthenticated = isValidAdminSession(sessionValue)

  if (!isConfigured || !isAuthenticated) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.25),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_45%,_#f8fafc_100%)] px-6 py-16 text-slate-900 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
              Admin Console
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              管理者ページ
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              ユーザーネームとパスワードで認証した管理者だけが、お問い合わせ一覧を確認できるページです。
            </p>

            {!isConfigured ? (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
                ADMIN_USERNAME、ADMIN_PASSWORD、ADMIN_SESSION_SECRET が未設定です。
                .env と本番環境の両方に設定してください。
              </div>
            ) : null}
          </div>

          {isConfigured ? <AdminLoginForm /> : null}
        </div>
      </section>
    )
  }

  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.25),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#eef6ff_45%,_#f8fafc_100%)] px-6 py-12 text-slate-900 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-sky-100 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
                Admin Console
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                管理者ページ
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                認証済みの管理者向けに、お問い合わせ一覧と運用導線をまとめています。
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900 shadow-sm md:items-end">
              <p className="font-semibold">認証済み</p>
              <p className="leading-6">このブラウザでは管理セッションが有効です。</p>
              <AdminLogoutButton />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
                    Contact Messages
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    お問い合わせ一覧
                  </h2>
                </div>
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {messages.length} 件
                </div>
              </div>

              {messages.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center text-slate-500">
                  まだお問い合わせはありません。
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <article
                      key={message.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {message.subject}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {message.name} / {message.email}
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">
                          {formatDate(message.createdAt)}
                        </p>
                      </div>

                      <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                        {message.message}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="grid gap-5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
                      Quick Link
                    </p>
                    <h2 className="mt-4 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-slate-900 transition group-hover:text-sky-700">
                      {item.label}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-slate-50 shadow-[0_18px_60px_rgba(15,23,42,0.22)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                  Notice
                </p>
                <h2 className="mt-4 text-2xl font-semibold">
                  管理上の注意
                </h2>

                <div className="mt-6 space-y-4">
                  {notices.map((notice) => (
                    <div
                      key={notice}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200"
                    >
                      {notice}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}