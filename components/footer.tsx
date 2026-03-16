"use client"

import { useFadeUp } from "@/hooks/use-fade-up"

export default function Footer() {
  const { ref: brandRef, isVisible: brandVisible } = useFadeUp()
  const { ref: linksRef, isVisible: linksVisible } = useFadeUp()
  const { ref: supportRef, isVisible: supportVisible } = useFadeUp()
  const { ref: socialRef, isVisible: socialVisible } = useFadeUp()
  const { ref: bottomRef, isVisible: bottomVisible } = useFadeUp()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div
            ref={brandRef}
            className={`space-y-4 transition-all duration-1000 transform ${
              brandVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                🦙
              </div>
              <span className="font-bold text-white">はしるアルパカ</span>
            </div>
            <p className="text-sm text-slate-400">
              未来のアプリ開発者を育成する
              <br />
              アプリ開発サークル
            </p>
          </div>

          {/* Links */}
          <div
            ref={linksRef}
            className={`space-y-3 transition-all duration-1000 transform ${
              linksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold text-white">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white">
                  メッセージ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white">
                  プロジェクト
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            ref={supportRef}
            className={`space-y-3 transition-all duration-1000 transform ${
              supportVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold text-white">サポート</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="/FAQ" className="text-slate-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white">
                  プライバシー
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div
            ref={socialRef}
            className={`space-y-3 transition-all duration-1000 transform ${
              socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold text-white">フォロー</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-pink-600 transition"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-pink-500 transition"
              >
                ⚫
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={bottomRef}
          className={`border-t border-slate-800 pt-8 transition-all duration-1000 transform ${
            bottomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 はしるアルパカ. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                利用規約
              </a>
              <a href="#" className="hover:text-white">
                プライバシーポリシー
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
