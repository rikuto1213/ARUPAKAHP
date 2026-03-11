
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center text-slate-900 mb-6">
            中学生向けプログラミング授業
          </h1>

          <p className="text-center text-slate-600 mb-16">
            地元中学校でアルゴリズムをテーマにしたプログラミング授業を実施しました
          </p>
        </motion.div>

        {/* 活動概要 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            活動概要
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            はしるアルパカでは、地域の中学生に向けて
            プログラミングの考え方である「アルゴリズム」を学ぶ授業を行いました。
          </p>

          <p className="text-slate-700 leading-relaxed">
            授業は<strong>5日間</strong>に分けて実施し、
            地元の<strong>5校の中学校</strong>から参加した
            <strong>合計約250名</strong>の中学生に向けて授業を行いました。
            各回では約<strong>35名</strong>の生徒に対して、
            大学生メンバーがサポートしながら学習を進めました。
          </p>
        </motion.section>

        {/* 授業内容 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 bg-white p-8 rounded-xl shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-600">
            授業内容
          </h2>

          <p className="text-slate-700 leading-relaxed mb-4">
            授業では、アルゴリズムを楽しく学べる教材として
            「アルゴロジック」というゲーム型の教材を使用しました。
          </p>

          <p className="text-slate-700 leading-relaxed">
            生徒たちはキャラクターをゴールまで動かすために、
            「どの順番で動かすか」「どんな手順で進むか」を考えながら
            アルゴリズムを作成します。
            試行錯誤しながら問題を解くことで、
            プログラミングの基本的な思考力を身につけることを目的としました。
          </p>

          {/* アルゴロジックリンク */}
          <div className="mt-6 flex items-center gap-9">
            <a
              href="https://algo.jkskeiro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition hover:bg-green-700 hover:scale-105"
            >
              アルゴジックの公式ページへ →
            </a>

            <Image
              src="/images/ダウンロード.webp"
              alt="アルゴロジック"
              width={100}
              height={100}
              className="transition hover:scale-110"
            />
          </div>
        </motion.section>

        {/* 授業の様子 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-purple-600">
            授業の様子
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="/images/S__301293594.jpg"
              alt="授業の様子"
              className="rounded-xl shadow transition hover:scale-105"
            />

            <img
              src="/images/S__301293595.jpg"
              alt="授業の様子"
              className="rounded-xl shadow transition hover:scale-105"
            />
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-blue-50 border-l-4 border-blue-400 p-8 rounded"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            まとめ
          </h2>

          <p className="text-slate-700 leading-relaxed">
            本授業を通して、多くの中学生が
            「プログラミングは難しいものではなく、
            考えることを楽しむ学びである」ということを体験しました。
            今後も地域と連携しながら、
            プログラミング教育の機会を広げていきたいと考えています。
          </p>
        </motion.section>

      </div>
    </main>
  );
}

