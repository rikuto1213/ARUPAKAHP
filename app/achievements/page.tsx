"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Achievement = {
  tag: "APP" | "EVENT" | "EDUCATION";
  tagColor: string;
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  image: string;
  link: string;
};

const achievements: Achievement[] = [
  {
    tag: "APP",
    tagColor: "bg-pink-500",
    title: "歩くアルパカ+R",
    highlight: "ダウンロード数 700以上",
    description:
      "サークルで企画・開発したアプリで、累計700ダウンロードを達成しました。ユーザーの声を元にアップデートを重ね、より使いやすいアプリへ改善を行いました。",
    buttonText: "詳細を見る",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    image: "/images/arupaka.png",
    link: "#",
  },
  {
    tag: "APP",
    tagColor: "bg-sky-500",
    title: "リツフレ",
    highlight: "ダウンロード数 100以上",
    description:
      "学生生活を支援することを目的に制作したアプリで、累計100ダウンロードを突破しました。企画から開発、公開までを一貫して行いました。",
    buttonText: "詳細を見る",
    buttonColor: "bg-sky-500 hover:bg-sky-600",
    image: "/images/ritsufure.png",
    link: "#",
  },
  {
    tag: "EVENT",
    tagColor: "bg-yellow-500",
    title: "大阪・関西万博アプリ開発",
    highlight: "SDGs宣言プロジェクト",
    description:
      "大阪府のSDGs宣言プロジェクトの一環として、来場者の宣言を「花」として可視化するシステムを制作しました。",
    buttonText: "公式ページを見る",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    image: "/images/ogp.jpg",
    link: "https://www.pref.osaka.lg.jp/o020050/kikaku_keikaku/sdgs/sdgs_sengen.html",
  },
  {
    tag: "EDUCATION",
    tagColor: "bg-purple-500",
    title: "中学生向けプログラミング授業",
    highlight: "地方の中学生に向けて実施",
    description:
      "地方の中学生を対象に、ゲームを通してプログラミングを学ぶ授業を実施しました。「アルゴロジック」を活用し、段階的に理解できる構成を工夫しました。",
    buttonText: "活動を見る",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    image: "/images/education.png",
    link: "#",
  },
];

export default function AchievementsPage(): React.ReactElement {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900">
      {/* 背景ぼかし */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-pink-200 opacity-30 blur-3xl" />
        <div className="absolute top-40 right-[-200px] h-[600px] w-[600px] rounded-full bg-sky-200 opacity-30 blur-3xl" />
        <div className="absolute bottom-[-200px] left-40 h-[600px] w-[600px] rounded-full bg-purple-200 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* タイトル */}
        <header className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">実績</h1>
          <p className="mt-2 text-lg text-gray-600">Achievements</p>
          <p className="mt-6 text-gray-500">
            これまでに制作したアプリや活動を紹介します。
          </p>
        </header>

        {/* 実績カード */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {achievements.map((item: Achievement, index: number) => (
            <article
              key={index}
              className="rounded-3xl border border-white/50 bg-white/60 p-8 shadow-lg backdrop-blur-md transition hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`inline-block rounded-full px-4 py-1 text-sm font-semibold text-white ${item.tagColor}`}
                >
                  {item.tag}
                </span>

                {/* アイコン画像 */}
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white shadow">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-bold">{item.title}</h2>
              <p className="mt-2 text-lg font-semibold text-gray-800">
                {item.highlight}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 flex justify-end">
                <Link
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition ${item.buttonColor}`}
                >
                  {item.buttonText}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Upcoming */}
        <section className="mt-20">
          <div className="rounded-3xl border border-white/50 bg-white/60 p-10 shadow-lg backdrop-blur-md">
            <span className="inline-block rounded-full bg-sky-500 px-4 py-1 text-sm font-semibold text-white">
              UPCOMING
            </span>

            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  2026年3月末にハッカソンに参加予定
                </h2>
                <p className="mt-3 text-gray-600">
                  チーム開発を通して、短期間での企画・実装・発表までを経験し、
                  開発力をさらに高めることを目指しています。
                </p>
              </div>

              {/* ハッカソン画像 */}
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white shadow">
                <Image
                  src="/images/21b883_1302e21b4829405b8bc661821efdcb01~mv2.png"
                  alt="Hackathon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold">一緒に開発しよう</h2>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="rounded-full bg-blue-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-600"
            >
              JOIN US
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-pink-600"
            >
              CONTACT
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
