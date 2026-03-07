"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      pathname === path
        ? "text-pink-600 border-b-2 border-pink-600 pb-1"
        : "text-slate-900 hover:text-pink-600"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#home" className={linkClass("/")}>
              ホーム
            </Link>

            <Link href="/achievements" className={linkClass("/achievements")}>
              実績
            </Link>

            <Link href="/members" className={linkClass("/members")}>
              メンバー紹介
            </Link>

            <Link href="/join" className={linkClass("/join")}>
              入部希望者向け
            </Link>

            <Link href="/corporate" className={linkClass("/corporate")}>
              企業向け
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}