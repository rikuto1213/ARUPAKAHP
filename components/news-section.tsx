"use client";
import Script from "next/script";
import { useFadeUp } from "@/hooks/use-fade-up";
const INSTAGRAM_POST_URL = "https://www.instagram.com/p/DVlN6MKj0eB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
function toInstagramPermalink(postUrl: string) {
  try {
    const url = new URL(postUrl);
    const normalizedPath = url.pathname.endsWith("/")
      ? url.pathname
      : `${url.pathname}/`;
    return `${url.origin}${normalizedPath}`;
  } catch {
    return postUrl;
  }
}

export default function NewsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeUp();
  const { ref: contentRef, isVisible: contentVisible } = useFadeUp();
  const { ref: imageRef, isVisible: imageVisible } = useFadeUp();
  const instagramPermalink = toInstagramPermalink(INSTAGRAM_POST_URL);
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
          {/* Right side - Instagram embed */}
          <div
            ref={imageRef}
            className={`relative min-h-[560px] rounded-3xl overflow-hidden transition-all duration-1000 transform ${
              imageVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full h-full bg-slate-800 border border-slate-600 rounded-3xl overflow-hidden p-3">
              <blockquote
                className="instagram-media !m-0 !max-w-none"
                data-instgrm-captioned
                data-instgrm-permalink={instagramPermalink}
                data-instgrm-version="14"
              >
                <a
                  href={instagramPermalink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline"
                >
                  Instagramで投稿を見る
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const instagram = (window as Window & {
            instgrm?: { Embeds?: { process?: () => void } };
          }).instgrm;
          instagram?.Embeds?.process?.();
        }}
      />
    </section>
  );

}