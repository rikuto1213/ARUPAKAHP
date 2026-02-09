"use client"

import { useState } from "react"
import { useFadeUp } from "@/hooks/use-fade-up"

type Category = "すべて" | "イベント" | "プロジェクト" | "お知らせ"

interface NewsItem {
  id: number
  date: string
  category: Category
  title: string
  description: string
  image?: string
}

export default function NewsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp()
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp()

  const [selectedCategory, setSelectedCategory] = useState<Category>("すべて")

  // ニュースのダミーデータ
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "2025.03.14",
      category: "イベント",
      title: "Tech Conference 2025に参加しました",
      description: "最新のアプリ開発トレンドについて学び、業界トップの開発者と交流しました。",
    },
    {
      id: 2,
      date: "2025.03.10",
      category: "プロジェクト",
      title: "新しい学習管理アプリをリリース",
      description: "メンバーと共同開発した学習管理アプリがApp Storeで公開されました。",
    },
    {
      id: 3,
      date: "2025.03.05",
      category: "イベント",
      title: "春の新入生歓迎会を開催します",
      description: "4月5日に新入生歓迎会を開催します。プログラミング未経験者も大歓迎！",
    },
    {
      id: 4,
      date: "2025.02.28",
      category: "お知らせ",
      title: "オンライン勉強会の日程が決まりました",
      description: "毎週水曜日20:00からReactの勉強会を開催します。",
    },
    {
      id: 5,
      date: "2025.02.20",
      category: "プロジェクト",
      title: "ハッカソンで優勝しました",
      description: "地域課題解決ハッカソンで、私たちのチームが最優秀賞を受賞しました。",
    },
    {
      id: 6,
      date: "2025.02.15",
      category: "イベント",
      title: "企業見学ツアーを実施",
      description: "IT企業を訪問し、実際の開発現場を見学させていただきました。",
    },
  ]

  const categories: Category[] = ["すべて", "イベント", "プロジェクト", "お知らせ"]

  const filteredNews =
    selectedCategory === "すべて" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case "イベント":
        return "from-pink-500 to-pink-600"
      case "プロジェクト":
        return "from-purple-500 to-purple-600"
      case "お知らせ":
        return "from-cyan-500 to-blue-500"
      default:
        return "from-slate-500 to-slate-600"
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-1000 transform ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">最新情報</h2>
          <p className="text-slate-400 text-lg">イベントやプロジェクトの最新情報をお届け</p>
        </div>

        {/* Category filter */}
        <div
          ref={contentRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 transform ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:shadow-2xl hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
            >
              {/* Image placeholder */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center border border-slate-500">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-slate-400 text-xs">画像を配置してください</p>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="mb-3">
                <span
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-bold`}
                >
                  {item.category}
                </span>
              </div>

              {/* Date */}
              <p className="text-slate-400 text-sm mb-2">{item.date}</p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Show all button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
            すべて見る
          </button>
        </div>
      </div>
    </section>
  )
}
