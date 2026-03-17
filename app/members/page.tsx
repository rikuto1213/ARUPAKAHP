
"use client";

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

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
       {/* タイトル */}
<header className="text-center mb-16">
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-bold tracking-tight text-slate-900"
  >
    メンバー紹介
  </motion.h1>

  <p className="mt-2 text-lg text-gray-600">
    Members
  </p>

  <p className="mt-6 text-gray-500">
    はしるアルパカのメンバーを紹介します。
  </p>
</header>
        
        {/* 代表 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 bg-pink-50 border-l-4 border-pink-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-pink-600">
            三役
          </h2>

          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">代表：</span>
            林 泰聖（理工学部 電子情報工学科）
          </p>

          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">副代表：</span>
            小林 海空斗（理工学部 電気電子工学科）
          </p>
          
          <p className="mb-2 text-slate-800 text-lg">
            <span className="font-bold">会計：</span>
            西田朱里（理工学部 数理学科データサイエンス専攻）
          </p>
        </motion.section>

        {/* 学年構成 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 bg-blue-50 border-l-4 border-blue-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            学年構成
          </h2>

          <ul className="space-y-1 text-slate-800">
            <li>1回生：18名</li>
            <li>2回生：8名</li>
            <li>3回生：12名</li>
            <li>4回生：4名</li>
          </ul>
        </motion.section>

        {/* 学部学科構成 */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded shadow"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-600">
            学部学科構成
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 理工学部 */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">
                理工学部
              </h3>

              <ul className="space-y-1 text-slate-800">
                <li>電子情報工学科：21名</li>
                <li>電気電子工学科：7名</li>
                <li>ロボティクス学科：6名</li>
                <li>機械工学科：2名</li>
                <li>物理学科：2名</li>
                <li>数理学科：1名</li>
              </ul>
            </div>

            {/* その他 */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-700">
                その他の学部
              </h3>

              <ul className="space-y-1 text-slate-800">
                <li>薬学部 薬学科：2名</li>
                <li>食マネジメント学部：1名</li>
                <li>経済学部：1名</li>
              </ul>
            </div>

          </div>
        </motion.section>

      </div>
    </main>
  );
}

