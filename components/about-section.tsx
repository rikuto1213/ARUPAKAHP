"use client"

import { useFadeUp } from "@/hooks/use-fade-up"

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp()
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp()

  const activities = [
    {
      icon: "💻",
      title: "アプリ開発",
      description: "モバイルアプリやWebアプリの企画・開発を行います。初心者も経験者も一緒に学びながら成長できます。",
    },
    {
      icon: "🎯",
      title: "プロジェクト実践",
      description: "実際の課題を解決するアプリを開発。企画から公開まで一連の流れを体験できます。",
    },
    {
      icon: "🤝",
      title: "勉強会・ワークショップ",
      description: "最新技術の勉強会や、実践的なワークショップを定期的に開催しています。",
    },
    {
      icon: "🏆",
      title: "コンテスト参加",
      description: "ハッカソンやアプリコンテストに参加し、チームで協力して成果を競います。",
    },
  ]

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
              どんなことをするか
            </span>
          </h2>
          <p className="text-slate-600 text-lg">はしるアルパカの活動内容</p>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{activity.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
