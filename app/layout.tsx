import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "アプリ開発サークル|はしるアルパカ",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: "/images/arupaka_icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {/* ヘッダー */}
        <Navigation />

        {/* ページ本体（固定ヘッダー対策） */}
        <main className="pt-20">{children}</main>

        {/* フッター */}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
