import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center overflow-x-auto">
          {/* Menu Items */}
          <div className="flex min-w-max items-center gap-5 pl-2 sm:pl-4 lg:pl-6 md:gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              <Image
                src="/images/arupaka_icon.png"
                alt="Arupaka icon"
                width={40}
                height={40}
                className="-ml-1 h-10 w-10 rounded-full border border-slate-300"
              />
              <span>ホーム</span>
            </Link>

            <a
              href="/aboutus"
              className="text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              About us
            </a>

            {/* ★ 追加：実績 */}
            <Link
              href="/achievements"
              className="text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              実績
            </Link>

            <Link
              href="/members"
              className="text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              メンバー紹介
            </Link>

            <Link
              href="/join"
              className="text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              入部希望者向け
            </Link>

            <Link
              href="/corporate"
              className="text-xs font-medium whitespace-nowrap text-slate-900 hover:text-pink-600 sm:text-sm"
            >
              企業向け
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
