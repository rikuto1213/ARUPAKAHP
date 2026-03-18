"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="flex h-20 items-center justify-between">

            {/* ロゴ */}
            <Link
              href="/"
              className="flex items-center gap-3 whitespace-nowrap pl-1 text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              onClick={closeMenu}
              aria-label="ホーム"
            >
              <Image
                src="/images/arupaka_icon.png"
                alt="Arupaka icon"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-slate-300"
              />

              
              <span
  className="text-lg"
  style={{ fontFamily: "hanakaze" }}
>
  はしるアルパカ
</span>
            </Link>

            {/* PCメニュー */}
            <div className="hidden min-w-max items-center gap-5 pl-2 md:flex md:gap-8 lg:pl-6">

              <Link
                href="/"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                ホーム
              </Link>

              <a
                href="/aboutus"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                About us
              </a>

              <Link
                href="/achievements"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                実績
              </Link>

              <Link
                href="/members"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                メンバー
              </Link>

              <Link
                href="/join"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                入部希望者向け
              </Link>

              <Link
                href="/corporate"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                企業の方へ
              </Link>

              <Link
                href="/admin"
                className="whitespace-nowrap text-xs font-medium text-slate-900 hover:text-indigo-500 sm:text-sm"
              >
                管理者
              </Link>

            </div>

            {/* ハンバーガー */}
            <button
              type="button"
              aria-label="メニューを開く"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 md:hidden"
            >
              <span className="sr-only">メニュー</span>
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 bg-slate-700" />
                <span className="h-0.5 w-5 bg-slate-700" />
                <span className="h-0.5 w-5 bg-slate-700" />
              </span>
            </button>

          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="メニューを閉じる"
            className="absolute inset-0 bg-black/30"
            onClick={closeMenu}
          />
          <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Menu</span>
              <button
                type="button"
                aria-label="閉じる"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-slate-700"
                onClick={closeMenu}
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col gap-4">

              <Link href="/" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                ホーム
              </Link>

              <a href="/aboutus" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                About us
              </a>

              <Link href="/achievements" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                実績
              </Link>

              <Link href="/members" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                メンバー
              </Link>

              <Link href="/join" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                参加する
              </Link>

              <Link href="/corporate" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                企業の方へ
              </Link>

              <Link href="/admin" onClick={closeMenu} className="text-sm font-medium text-slate-900 hover:text-indigo-500">
                管理者
              </Link>

            </nav>
          </aside>
        </div>
      )}
    </>
  );
}