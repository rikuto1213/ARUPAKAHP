"use client"

import { useState } from "react"
import { useFadeUp } from "@/hooks/use-fade-up"

export default function FAQPage() {

  const { ref, isVisible } = useFadeUp()

  const [search, setSearch] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [category, setCategory] = useState("all")

  const faqs = [
    {
    category: "サークル",
    question: "はしるアルパカとはどんなサークルですか？",
    answer: "アプリ開発やWeb制作を中心に、実践的なプログラミングスキルを学ぶサークルです。チームでプロジェクトを行いながら成長できます。"
  },

  {
    category: "サークル",
    question: "どんな学生が参加していますか？",
    answer: "プログラミング初心者から経験者まで幅広いメンバーが参加しています。学年や学部も様々です。"
  },

  {
    category: "サークル",
    question: "サークルの目的は何ですか？",
    answer: "アプリ開発やWeb開発を通して実践的なスキルを身につけ、メンバー同士で学び合うことを目的としています。"
  },

  {
    category: "サークル",
    question: "メンバーは何人くらいいますか？",
    answer: "年度によって変わりますが、複数のプロジェクトチームに分かれて活動しています。"
  },

  {
    category: "サークル",
    question: "どんなプロジェクトがありますか？",
    answer: "Webサイト制作、アプリ開発、ゲーム制作など様々なプロジェクトがあります。"

  },



  {
    category: "参加",
    question: "プログラミング初心者でも参加できますか？",
    answer: "もちろん可能です。初心者向けのサポートや勉強会も行っています。"
  },

  {
    category: "参加",
    question: "途中からでも参加できますか？",
    answer: "はい、途中からでも参加できます。いつでもメンバーを歓迎しています。"
  },

  {
    category: "参加",
    question: "見学や体験参加はできますか？",
    answer: "可能です。お問い合わせフォームからご連絡ください。"
  },

  {
    category: "参加",
    question: "入部費はありますか？",
    answer: "基本的に入部費はありません。"
  },

  {
    category: "参加",
    question: "他のサークルと兼部できますか？",
    answer: "可能です。メンバーの中には複数のサークルに所属している人もいます。"
  },



  {
    category: "技術",
    question: "どんなプログラミング言語を使いますか？",
    answer: "主にTypeScriptを使っています。"
  },

  {
    category: "技術",
    question: "どんなフレームワークを使っていますか？",
    answer: "ReactやNext.jsなどのモダンなフレームワークを使っています。"
  },

  {
    category: "技術",
    question: "デザインも学べますか？",
    answer: "UI/UXデザインにも取り組むことができます。"
  },

  {
    category: "技術",
    question: "Gitは使いますか？",
    answer: "チーム開発ではGitとGitHubを使ってコード管理を行います。"
  },

  {
    category: "技術",
    question: "アプリ開発はできますか？",
    answer: "Webアプリを中心に様々なアプリ開発に挑戦できます。"
  },



  {
    category: "活動",
    question: "活動頻度はどれくらいですか？",
    answer: "週1回のミーティングと、週2回の作業会と、各プロジェクトごとの開発活動があります。"
  },

  {
    category: "活動",
    question: "活動場所はどこですか？",
    answer: "主に大学のサークルルームやオンラインで活動しています。"
  },

  {
    category: "活動",
    question: "どんな活動をしていますか？",
    answer: "アプリ開発、Web制作、勉強会、チームプロジェクトなどを行っています。"
  },

  {
    category: "活動",
    question: "個人開発もできますか？",
    answer: ""
  },

  {
    category: "活動",
    question: "就活に役立ちますか？",
    answer: "チーム開発経験やポートフォリオ制作ができるため、就活にも役立ちます。"
  },

     {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
   {
    category: "",
    question: "",
    answer: ""
  },
  

  ]

  const filteredFaqs = faqs.filter((faq) => {

    const matchSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())

    const matchCategory =
      category === "all" || faq.category === category

    return matchSearch && matchCategory
  })

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">

      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            よくある質問
          </h1>
          <p className="text-slate-600">
            はしるアルパカについてよくいただく質問をまとめました。
          </p>
        </div>

        {/* 検索 */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 質問を検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* カテゴリ */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center">

          {["all", "サークル", "参加", "技術", "活動"].map((cat) => (

            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition
              ${
                category === cat
                  ? "bg-purple-500 text-white"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {cat === "all" ? "すべて" : cat}
            </button>

          ))}

        </div>

        {/* FAQ */}
        <div
          ref={ref}
          className={`space-y-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {filteredFaqs.length === 0 && (
            <p className="text-center text-slate-500">
              該当する質問が見つかりませんでした
            </p>
          )}

          {filteredFaqs.map((faq, index) => {

            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left"
                >

                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </main>
  )
}