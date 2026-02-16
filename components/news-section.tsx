"use client";

import Image from "next/image";
import { useFadeUp } from "@/hooks/use-fade-up";

export default function NewsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp();
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp();
  const { ref: imageRef, isVisible: imageVisible } = useFadeUp();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* News card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Left side - empty space for layout balance */}
          <div className="hidden lg:block"></div>

          {/* Center - News content */}
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 transform ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              ref={titleRef}
              className={`text-4xl font-bold text-white transition-all duration-1000 transform ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              最新情報
            </h2>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold">
                  NEWS
                </span>
              </div>
              <p className="text-white text-sm font-medium">2025.03.14</p>
              <h3 className="text-xl font-bold text-white">
                Tech Conference 2025に参加しました
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                最新のアプリ開発トレンドについて学び、業界トップの開発者と交流しました。
              </p>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div
            ref={imageRef}
            className={`relative h-[300px] rounded-3xl overflow-hidden transition-all duration-1000 transform ${
              imageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center border border-slate-600">
              <div className="text-center">
                <div className="text-5xl mb-3">📷</div>
                <p className="text-slate-400 text-sm">画像を配置してください</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
