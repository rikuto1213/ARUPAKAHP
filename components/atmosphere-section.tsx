"use client"

import { useFadeUp } from "@/hooks/use-fade-up"

export default function AtmosphereSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp()
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 opacity-15 animate-float-slow">
        <img
          src="/images/e8-83-8c-e6-99-af-e9-80-8f-e9-81-8e-e3-83-ab-e3-83-91-e3-81-8f-e3-82-93.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-40 right-20 w-28 h-28 opacity-15 animate-float-medium">
        <img
          src="/images/e8-83-8c-e6-99-af-e9-80-8f-e9-81-8e-e3-83-ab-e3-83-91-e3-81-8f-e3-82-93.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              サークルの雰囲気
            </span>
          </h2>
          <p className="text-stone-600 text-lg">アットホームで刺激的な環境</p>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Message */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-orange-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-2xl flex-shrink-0">
                  🦙
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">みんなで成長する</h3>
                  <p className="text-stone-600 leading-relaxed">
                    はしるアルパカは、初心者から上級者まで、すべてのレベルの開発者が集まるサークルです。
                    経験豊富なメンバーが優しくサポートするので、プログラミング未経験でも安心して始められます。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-orange-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-2xl flex-shrink-0">
                  ✨
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">自由な雰囲気</h3>
                  <p className="text-stone-600 leading-relaxed">
                    週に1〜2回の活動日には、自由に集まって開発や勉強会を行います。
                    オンラインでの参加も可能で、自分のペースで活動できます。
                    アイデアを自由に出し合い、やりたいことに挑戦できる環境です。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-orange-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-2xl flex-shrink-0">
                  🎉
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">楽しい仲間たち</h3>
                  <p className="text-stone-600 leading-relaxed">
                    開発だけでなく、食事会やオンラインゲーム会なども定期的に開催しています。
                    技術的な話から趣味の話まで、気軽に話せる仲間がたくさんいます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center border-2 border-dashed border-orange-300">
              <div className="text-center">
                <div className="text-6xl mb-4">🖼️</div>
                <p className="text-stone-500">サークルの様子の画像を配置してください</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
