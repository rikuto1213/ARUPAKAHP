export default function AchievementsPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">実績</h1>
      <p className="text-slate-700 mb-6">ここに実績一覧を表示します。</p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">サンプル実績項目 1</div>
        <div className="p-6 border rounded-lg">サンプル実績項目 2</div>
      </section>
    </main>
  )
}
