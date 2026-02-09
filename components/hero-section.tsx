"use client"

import { useFadeUp } from "@/hooks/use-fade-up"

export default function HeroSection() {
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp()
  const { ref: imageRef, isVisible: imageVisible } = useFadeUp()

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 transform ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-40 -left-20 w-32 h-32 bg-gradient-to-br from-orange-200 to-peach-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-64 left-10 w-20 h-20 bg-amber-300 rounded-full blur-2xl opacity-30"></div>

            <div className="absolute top-20 left-32 w-20 h-20 opacity-20 animate-float-slow">
              <img
                src="/images/e8-83-8c-e6-99-af-e9-80-8f-e9-81-8e-e3-83-ab-e3-83-91-e3-81-8f-e3-82-93.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main heading */}
            <div className="relative space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  創造する喜びを
                </span>
                <br />
                <span className="text-stone-900">一緒に</span>
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
                アプリ開発を通じて、新しい技術を学び、仲間と共に成長する。
                <br />
                はしるアルパカは、情熱を持った開発者たちの集まりです。
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                はじめる
              </button>
            </div>

            {/* Description text */}
            <div className="space-y-2 text-sm text-stone-600 pt-4">
              <p>未経験から経験者まで、すべての開発者を歓迎します。</p>
              <p>一緒に最高のアプリを作りましょう。</p>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div
            ref={imageRef}
            className={`relative h-[500px] lg:h-[600px] flex items-center justify-center transition-all duration-1000 transform ${
              imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute top-20 right-0 w-48 h-48 bg-gradient-to-bl from-orange-300 to-amber-200 rounded-3xl blur-2xl opacity-30"></div>
            <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-gradient-to-tr from-peach-200 to-yellow-200 rounded-full blur-3xl opacity-40"></div>

            <div className="absolute top-10 right-20 w-24 h-24 opacity-25 animate-float-medium">
              <img
                src="/images/e8-83-8c-e6-99-af-e9-80-8f-e9-81-8e-e3-83-ab-e3-83-91-e3-81-8f-e3-82-93.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image placeholder - User will provide their own */}
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center border-2 border-dashed border-orange-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-stone-500">画像を配置してください</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-3 mt-16">
        <p className="text-sm text-stone-500">SCROLL</p>
        <div className="w-6 h-10 rounded-full border-2 border-stone-400 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gradient-to-b from-orange-500 to-transparent rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
