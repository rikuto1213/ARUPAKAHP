import { cookies } from "next/headers"

import AdminLoginForm from "@/components/admin-login-form"
import AdminLogoutButton from "@/components/admin-logout-button"
import { ADMIN_SESSION_COOKIE, isAdminAuthConfigured, isValidAdminSession } from "@/lib/admin-auth"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

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
            {/* <div>
              <p className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
                Admin Console
              </p>
              
            </div> */}

            <div>
              <AdminLogoutButton />
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </section>
  )
}