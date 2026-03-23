"use client"

import { useFadeUp } from "@/hooks/use-fade-up"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import { Home, HelpCircle, Shield, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const { ref: mainRef, isVisible: mainVisible } = useFadeUp();
  const { ref: navRef, isVisible: navVisible } = useFadeUp();
  const { ref: bottomRef, isVisible: bottomVisible } = useFadeUp();

  return (
    <footer className="relative bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#eef2ff] text-slate-600 py-12 px-6 lg:px-12 overflow-hidden border-t border-slate-100">
      {/* ヒーローの雰囲気を継承した環境光 */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#68C0FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FFB868]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* メインコンテンツ：ロゴとナビを1行に整列 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          
          {/* 左側：ロゴエリア（クリックでホームへ） */}
          {/* 左側：ロゴエリア（Linkをdivで囲んでrefをこちらに持たせる） */}
<div
  ref={mainRef}
  className={`transition-all duration-1000 transform ${
    mainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`}
>
  <Link
    href="/"
    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
  >
    <Image
      src="/images/arupaka_icon.png"
      alt="Arupaka icon"
      width={44}
      height={44}
      className="h-11 w-11 rounded-full border border-slate-200 shadow-sm bg-white"
    />
    <div className="flex flex-col">
      <span 
        className="text-xl text-slate-900 leading-none" 
        style={{ fontFamily: "hanakaze" }}
      >
        はしるアルパカ
      </span>
      <span className="text-[9px] font-mono uppercase tracking-[0.1em] text-[#68C0FF] mt-1 font-bold">
        Learn Together. Build Apps.
      </span>
    </div>
  </Link>
</div>

       
          <div
            ref={navRef}
            className={`transition-all duration-1000 delay-150 transform ${
              navVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <nav className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-3">
              {[
                { label: "ホーム", icon: Home, href: "/", color: "#68C0FF" },
                { label: "FAQ", icon: HelpCircle, href: "/FAQ", color: "#68C0FF" },
                { label: "お問い合わせ", icon: Mail, href: "#contact", color: "#FFB868" },
              ].map((item) => (
                <Link 
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white hover:-translate-y-1 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(104,192,255,0.1)] border border-white/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <item.icon className="w-3.5 h-3.5 transition-colors" style={{ color: item.color }} />
                  <span className="font-bold text-sm text-slate-700">{item.label}</span>
                </Link>
              ))}

              <button 
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white hover:-translate-y-1 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-white/80 transition-all duration-300 backdrop-blur-sm"
              >
                <Shield className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-400 transition-colors" />
                <span className="font-bold text-sm text-slate-700">プライバシー</span>
              </button>
            </nav>
          </div>
        </div>

        
<div
  ref={bottomRef}
  className={`pt-6 border-t border-slate-200/40 flex flex-col-reverse md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-300 transform ${
    bottomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`}
>
  <p className="text-[10px] text-slate-400 font-mono tracking-[0.2em] uppercase">
    &copy; 2025 RUNNING ALPACA LAB.
  </p>

  <div className="flex items-center">
    <a 
      href="https://www.instagram.com/hashiru_arupaka" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center text-slate-300 transition-colors"
    >
      <Instagram 
        className="w-5 h-5 transition-all group-hover:scale-110" 
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FFB868")}
        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
      />
    </a>
  </div>
</div>
      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </footer>
  );
}