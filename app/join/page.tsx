export default function JoinPage() {
  return (
    <main className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
      {/* タイトル */}
      <section className="mb-16">
        <h1 className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-3xl mb-6">
          入部希望者の方へ
        </h1>

        <p className="text-lg text-slate-700 mb-6">
          はしるアルパカでは、
          <span className="font-semibold text-slate-900">
            プログラミング未経験の方から経験者の方まで
          </span>
          、幅広くメンバーを募集しています。
        </p>

        <p className="text-slate-700">
          「プログラミングを始めてみたい」「アプリやWebサイトを作れるようになりたい」
          「仲間と一緒に成長したい」そんな想いを持った方を、私たちは歓迎します。
        </p>
      </section>

      {/* 活動内容 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">活動内容</h2>
        <ul className="space-y-4 text-slate-700">
          <li>・ JavaScript / React などの基礎学習</li>
          <li>・チームでのアプリ・Webサイト制作</li>
          <li>・勉強会や技術共有</li>
          <li>・ハッカソンやイベントへの参加</li>
        </ul>
      </section>

      {/* 活動場所 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">活動場所</h2>
        <p className="text-slate-700">BKC バイオリンク1階 サークルルーム3</p>
      </section>

      {/* 学べること */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-6">このサークルで身につくこと</h2>
        <p className="text-slate-700 mb-4">
          プログラミングの基礎から応用までを、実際に手を動かしながら学ぶことができます。
        </p>
        <p className="text-slate-700">
          最終的には、
          <span className="font-semibold text-slate-900">
            自分でアプリやWebサイトを企画・開発できる力
          </span>
          を身につけることができます。
        </p>
      </section>

      {/* CTA（Instagram） */}
      <section className="mb-24 text-center">
        <p className="text-lg text-slate-700 mb-6">
          入部したい方は、こちらのボタンからインスタに飛んで
          <span className="font-semibold text-slate-900">
            DMでご連絡ください!
          </span>
        </p>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hashiru_arupaka/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
        >
          Instagramはこちらから
        </a>
      </section>
    </main>
  );
}
