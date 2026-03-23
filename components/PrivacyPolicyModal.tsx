"use client";

import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PrivacyPolicyModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* 背景 */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* モーダル */}
      <div className="relative max-h-[80vh] w-[90%] max-w-3xl overflow-y-auto rounded-xl bg-slate-900 p-8 text-slate-200 shadow-2xl">

        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="mb-6 text-2xl font-bold text-white">
          プライバシーポリシー（個人情報保護方針）
        </h2>

        <div className="space-y-6 text-sm leading-relaxed">

          <p>
            立命館大学 アプリ開発サークル「はしるアルパカ」（以下、「当サークル」といいます。）
            は、当サークルの公式ホームページ（以下、「本サイト」といいます。）において取得する
            個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </p>

          <div>
            <h3 className="font-semibold text-white mb-2">第1条（個人情報の取得）</h3>
            <p>
              当サークルは、本サイトのお問い合わせフォーム等を通じて、
              ユーザー（新入生、学生、企業担当者等）から以下の個人情報を取得する場合があります。
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>氏名（担当者名）</li>
              <li>所属機関名（企業名、大学・学部名等）</li>
              <li>メールアドレス</li>
              <li>お問い合わせ内容に含まれる個人情報</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">第2条（個人情報の利用目的）</h3>
            <ol className="list-decimal ml-6 space-y-1">
              <li>サークルへの入部・見学等に関するお問い合わせへの回答および連絡のため</li>
              <li>企業・外部団体様からの開発依頼、協業等のご相談に関する対応および連絡のため</li>
              <li>当サークルが開発するアプリケーションおよびプロジェクトに関する情報提供のため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">第3条（個人情報の第三者提供）</h3>
            <p>
              当サークルは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、
              第三者に個人情報を提供することはありません。
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または学生の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関または地方公共団体が法令の定める事務を遂行することに協力する必要がある場合</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">第4条（個人情報の安全管理）</h3>
            <p>
              当サークルは、取得した個人情報の漏洩、滅失または毀損の防止、
              その他個人情報の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">第5条（プライバシーポリシーの変更）</h3>
            <ol className="list-decimal ml-6 space-y-1">
              <li>本ポリシーの内容はユーザーに通知することなく変更できるものとします。</li>
              <li>変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じます。</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">第6条（お問い合わせ窓口）</h3>
            <p>
              団体名：立命館大学 アプリ開発サークル はしるアルパカ<br/>
              代表者：林泰聖<br/>
              連絡先：hashiruarupaka2025@gmail.com
            </p>
          </div>

          <p className="text-slate-400">
            制定日：2026年3月11日
          </p>

        </div>
      </div>
    </div>
  );
}