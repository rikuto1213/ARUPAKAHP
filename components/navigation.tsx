import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              ホーム
            </Link>

            <a
              href="/aboutus"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              About us
            </a>

            {/* ★ 追加：実績 */}
            <Link
              href="/achievements"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              実績
            </Link>

            <Link
              href="/members"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              メンバー紹介
            </Link>

            <Link
              href="/join"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              入部希望者向け
            </Link>

            <Link
              href="/corporate"
              className="text-sm font-medium text-slate-900 hover:text-pink-600"
            >
              企業向け
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
