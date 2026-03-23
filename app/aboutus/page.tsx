"use client"

import { useFadeUp } from "@/hooks/use-fade-up"
import Image from "next/image"

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useFadeUp()
  const { ref: activityRef, isVisible: activityVisible } = useFadeUp()
  const { ref: techRef, isVisible: techVisible } = useFadeUp()
  const { ref: eventRef, isVisible: eventVisible } = useFadeUp()
  const { ref: atmosphereRef, isVisible: atmosphereVisible } = useFadeUp()

  return (
    <main className="relative bg-[#f8fafc] min-h-screen overflow-hidden py-32 px-6">
      {/* ヒーローと共通の環境光エフェクト */}
      <div className="absolute top-0 -left-24 w-96 h-96 bg-[#68C0FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-[#FFB868]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-40 z-10">

        {/* ================= 私たちについて (変更なし) ================= */}
        <section 
          ref={heroRef}
          className={`text-center transition-all duration-1000 transform ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12" style={{ fontFamily: "HanakazeTechno" }}>
            about us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-20">
            「はしるアルパカ」は、技術を楽しみながら学び、<br className="hidden md:block" />
            共に成長できるクリエイティブな場所を目指しています。
          </p>

          {/* 活動内容カード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" ref={activityRef}>
            <ActivityCard title="エンジニア" img="/images/e85198212a035e4210b06b11219db2ea_w.jpeg" text="技術を追求し、プロダクトを形にします。" delay="0" />
            <ActivityCard title="デザイン" img="/images/OIP (2).webp" text="ユーザー体験を彩る美学を追求します。" delay="150" />
            <ActivityCard title="イベント" img="/images/OIP (1).webp" text="仲間と繋がる、最高の場を企画します。" delay="300" />
            <ActivityCard title="広報・運営" img="/images/illustrative-set-depicting-marketing-campaign-activities-including-brainstorming-social-media_9147-1331.avif" text="魅力を伝え、ファンを増やします。" delay="450" />
          </div>
        </section>

        {/* ================= 使用技術 (変更なし) ================= */}
        <section ref={techRef} className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
            <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "HanakazeTechno" }}>使用技術・ツール</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
          
          <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white p-8 md:p-12 shadow-xl shadow-blue-500/5">
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-8 md:gap-6">
              <TechItem src="/images/c.svg" alt="C" />
              <TechItem src="/images/python.svg" alt="Python" />
              <TechItem src="/images/react.svg" alt="React" />
              <TechItem src="/images/next.svg" alt="Next.js" />
              <TechItem src="/images/typescript.svg" alt="TypeScript" />
              <TechItem src="/images/javascript.svg" alt="JavaScript" />
              <TechItem src="/images/figma.svg" alt="Figma" />
              <TechItem src="/images/git.svg" alt="Git" />
            </div>
          </div>
        </section>

        {/* ================= 年間行事 (変更なし) ================= */}
        <section ref={eventRef}>
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center" style={{ fontFamily: "HanakazeTechno" }}>年間行事</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <EventCard title="春休み・新歓" text="新歓イベント / 新入生歓迎会" img="/images/event1.png" accent="#68C0FF" />
            <EventCard title="夏休み" text="夏休み合宿 / LT大会" img="/images/event2.png" accent="#FFB868" />
            <EventCard title="秋・学祭" text="学祭出展 / 忘年会" img="/images/event3.png" accent="#FFB868" />
            <EventCard title="冬休み" text="春休み合宿 / ハッカソン" img="/images/event4.png" accent="#68C0FF" />
          </div>
        </section>

        {/* ================= 雰囲気 ================= */}
       
        <section 
          ref={atmosphereRef}
          className={`relative transition-all duration-1000 delay-150 transform ${
            atmosphereVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* 背景の環境光（セクション全体を包む） */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#68C0FF]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFB868]/20 rounded-full blur-[100px]" />
          </div>

          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold text-slate-900 relative z-10" style={{ fontFamily: "HanakazeTechno" }}>
              サークルの雰囲気
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
            
            {/* メインメッセージカード：水色のグラデーションガラス */}
            <div className="md:col-span-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-white/60 hover:shadow-xl hover:shadow-[#68C0FF]/10 transition-all duration-500 relative overflow-hidden group flex flex-col justify-center">
              {/* カード内の光の反射 */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#68C0FF]/10 rounded-full blur-3xl group-hover:bg-[#68C0FF]/20 transition-all duration-700" />
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#FFB868]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <span className="text-[#68C0FF] font-bold tracking-wider text-sm mb-4 block uppercase">Our Philosophy</span>
                <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                  ほぼ全員が<br className="md:hidden" />
                  <span className="text-[#68C0FF]">未経験</span>からのスタート！
                </p>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  「はしるアルパカ」には、最初から知識があった人はほとんどいません。<br />
                  趣味で何かを始めるように、まずは「作ってみたい」という<br className="hidden md:block" />
                  気持ちがあれば大丈夫。焦らず、自分のペースで成長できる環境です。
                </p>
              </div>
            </div>

            {/* 写真カード：オレンジのアクセント */}
            <div className="md:col-span-1 bg-white/40 backdrop-blur-md rounded-[2.5rem] p-3 shadow-sm border border-white/60 relative aspect-square md:aspect-auto hover:shadow-xl hover:shadow-[#FFB868]/10 transition-all duration-500 group">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100">
                <Image
                  src="/images/atmosphere_placeholder.jpg" 
                  alt="サークルの楽しい雰囲気"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* ガラスの反射レイヤー */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#68C0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* アルパカアイコン */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-20 bg-white">
                <Image
                  src="/images/arupaka_icon.png" 
                  alt="アルパカ"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>

            {/* 小さなポイントカード：それぞれ色を微妙に変えたガラス質感 */}
            <BentoCard 
              title="優しいサポート" 
              text="わからないところでつまずいても、先輩に気軽に質問できる近い距離感です。"
              dotColor="bg-[#68C0FF]" 
            />
            <BentoCard 
              title="自分のペースで" 
              text="周りと比べる必要はありません。焦らず、一歩ずつ技術を学んでいきましょう。" 
              dotColor="bg-[#FFB868]"
            />
            <BentoCard 
              title="温かいコミュニティ" 
              text="開発だけでなく、日常の会話やイベントを通して交流できる空間です。" 
              dotColor="bg-[#68C0FF]"
            />

          </div>
        </section>
      </div>
    </main>
  )
}
  

/* ================= コンポーネント ================= */
function BentoCard({ title, text, dotColor }: { title: string; text: string; dotColor: string }) {
  return (
    <div className="bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-sm border border-white/60 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-start group">
      <div className="flex items-center gap-3 mb-4">
        {/* 指定された色のドット */}
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor} shadow-[0_0_10px_rgba(0,0,0,0.1)] group-hover:scale-125 transition-transform`} />
        <h4 className="text-xl font-bold text-slate-800" style={{ fontFamily: "HanakazeTechno" }}>
          {title}
        </h4>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">
        {text}
      </p>
    </div>
  )
}


// ... (ActivityCard, TechItem, EventCard コンポーネントは変更なし)
function ActivityCard({ title, img, text, delay }: { title: string; img: string; text: string; delay: string }) {
  return (
    <div 
      style={{ transitionDelay: `${delay}ms` }}
      className="group bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-4 transition-all duration-500 text-center"
    >
      <div className="w-full h-40 mx-auto mb-10 relative">
        <Image 
          src={img} 
          alt={title} 
          fill 
          className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" 
        />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-4" style={{ fontFamily: "HanakazeTechno" }}>{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
    </div>
  )
}

function TechItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 md:p-5 shadow-sm border border-slate-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
        <Image src={src} alt={alt} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-blue-500 tracking-wider uppercase transition-colors text-center">{alt}</span>
    </div>
  )
}

function EventCard({ title, text, img, accent }: { title: string; text: string; img: string; accent: string }) {
  return (
    <div className="group bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 flex gap-6 md:gap-8 items-center hover:shadow-xl transition-all duration-500">
      <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 overflow-hidden rounded-2xl">
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="space-y-2">
        <p className="text-[10px] md:text-xs font-black uppercase tracking-widest" style={{ color: accent }}>{title}</p>
        <p className="text-lg md:text-xl font-bold text-slate-800">{text}</p>
      </div>
    </div>
  )
}