"use client"

import { useFadeUp } from "@/hooks/use-fade-up"

export default function InstagramSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp()
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp()

  // Instagram投稿のダミーデータ
  const instagramPosts = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
    }))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-slate-600 text-lg">日々の活動をチェック</p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1000 transform ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                {/* Image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-slate-500 text-xs">Instagram画像</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">投稿 #{post.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram link button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Instagramで見る
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
