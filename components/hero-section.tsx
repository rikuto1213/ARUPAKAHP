"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ItemDef = {
  id: string;
  src: string;
  alt: string;
  left?: string;
  right?: string;
  top: string;
  mobileLeft?: string;
  mobileRight?: string;
  mobileTop?: string;
  exitX: number;
  exitY: number;
  rotate: number;
  size: number;
  mobileSize?: number;
};

const ITEMS: ItemDef[] = [
  { id: "c", src: "/images/c.svg", alt: "C", left: "8%", top: "16%", mobileLeft: "16%", mobileTop: "10%", exitX: -260, exitY: -220, rotate: -10, size: 94, mobileSize: 76 },
  { id: "figma", src: "/images/figma.svg", alt: "Figma", right: "6%", top: "16%", mobileRight: "12%", mobileTop: "13%", exitX: 280, exitY: -220, rotate: 11, size: 92, mobileSize: 70 },
  { id: "react", src: "/images/react.svg", alt: "React", left: "62%", top: "18%", mobileLeft: "49%", mobileTop: "25%", exitX: 240, exitY: -200, rotate: 6, size: 92, mobileSize: 68 },
  { id: "python", src: "/images/python.svg", alt: "Python", left: "8%", top: "66%", mobileLeft: "8%", mobileTop: "72%", exitX: -300, exitY: 190, rotate: -8, size: 116, mobileSize: 88 },
  { id: "next", src: "/images/next.svg", alt: "Next.js", right: "7%", top: "68%", mobileRight: "8%", mobileTop: "73%", exitX: 300, exitY: 220, rotate: 8, size: 98, mobileSize: 78 },
  { id: "typescript", src: "/images/typescript.svg", alt: "TypeScript", left: "12%", top: "40%", mobileLeft: "13%", mobileTop: "48%", exitX: -220, exitY: -60, rotate: 7, size: 108, mobileSize: 84 },
  { id: "javascript", src: "/images/javascript.svg", alt: "JavaScript", right: "10%", top: "40%", mobileRight: "13%", mobileTop: "43%", exitX: 200, exitY: -90, rotate: -9, size: 108, mobileSize: 84 },
  { id: "git", src: "/images/git.svg", alt: "Git", left: "40%", top: "87%", mobileLeft: "50%", mobileTop: "90%", exitX: -200, exitY: 320, rotate: -6, size: 120, mobileSize: 92 },
];

const TAB_ORDER: Record<string, number> = {
  c: 0,
  python: 1,
  react: 2,
  next: 3,
  typescript: 4,
  javascript: 5,
  figma: 6,
  git: 7,
};

const TAB_ITEMS = [...ITEMS].sort(
  (a, b) => (TAB_ORDER[a.id] ?? Number.MAX_SAFE_INTEGER) - (TAB_ORDER[b.id] ?? Number.MAX_SAFE_INTEGER),
);

const TYPE_WORDS = ["はしるアルパカ", "Learn Together.", "Build Apps."];
const TYPE_COLORS = ["#777777", "#FFB868", "#68C0FF"];

function FloatingItem({
  item,
  scrollYProgress,
}: {
  item: ItemDef;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const x = useTransform(scrollYProgress, [0, 0.5], [0, item.exitX]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, item.exitY]);
  const opacity = useTransform(scrollYProgress, [0, 0.32, 0.5], [1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [item.rotate, item.rotate + (item.exitX >= 0 ? 16 : -16)]);
  const isRightAnchored = typeof item.right === "string";

  return (
    <div
      className="pointer-events-none absolute z-0"
      style={
        isRightAnchored
          ? { right: item.right, top: item.top, transform: "translate(50%, -50%)" }
          : { left: item.left, top: item.top, transform: "translate(-50%, -50%)" }
      }
    >
      <motion.div style={{ x, y, opacity, rotate }}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.size}
          height={item.size}
          priority
          className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typedColorIndex, setTypedColorIndex] = useState(0);
  const [showUnderscore, setShowUnderscore] = useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    let visible = true;
    let letterCount = 1;
    let direction = 1;
    let waiting = false;
    let wordIndex = 0;
    let colorIndex = 0;
    const timeoutIds: number[] = [];

    setTypedText(TYPE_WORDS[0].substring(0, 1));
    setTypedColorIndex(0);

    const typingId = window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        setTypedText("");
        const timeoutId = window.setTimeout(() => {
          colorIndex = (colorIndex + 1) % TYPE_COLORS.length;
          wordIndex = (wordIndex + 1) % TYPE_WORDS.length;
          direction = 1;
          setTypedColorIndex(colorIndex);
          letterCount += direction;
          waiting = false;
        }, 1000);
        timeoutIds.push(timeoutId);
      } else if (letterCount === TYPE_WORDS[wordIndex].length + 1 && waiting === false) {
        waiting = true;
        const timeoutId = window.setTimeout(() => {
          direction = -1;
          letterCount += direction;
          waiting = false;
        }, 1000);
        timeoutIds.push(timeoutId);
      } else if (waiting === false) {
        setTypedText(TYPE_WORDS[wordIndex].substring(0, letterCount));
        letterCount += direction;
      }
    }, 120);

    const blinkId = window.setInterval(() => {
      visible = !visible;
      setShowUnderscore(visible);
    }, 400);

    return () => {
      window.clearInterval(typingId);
      window.clearInterval(blinkId);
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div className="area absolute inset-0 z-0">
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          {ITEMS.map((item) => {
            const responsiveItem: ItemDef = isMobile
              ? {
                  ...item,
                  left: item.mobileLeft ?? item.left,
                  right: item.mobileRight ?? item.right,
                  top: item.mobileTop ?? item.top,
                  size: item.mobileSize ?? item.size,
                }
              : item;

            return <FloatingItem key={item.id} item={responsiveItem} scrollYProgress={scrollYProgress} />;
          })}
        </div>

        <div className="relative z-10 -mt-[5vh] flex flex-col items-center text-center">
          <h1 className="translate-x-[0.18em] whitespace-nowrap font-black leading-[0.9] tracking-tight">
            <span
              className="whitespace-nowrap font-mono text-[clamp(1.9rem,6.95vw,6.45rem)]"
              style={{
                color: TYPE_COLORS[typedColorIndex],
                textShadow:
                  typedColorIndex === 0
                    ? "0 2px 10px rgba(119,119,119,0.38), 0 0 20px rgba(119,119,119,0.24)"
                    : typedColorIndex === 1
                      ? "0 2px 10px rgba(255,184,104,0.52), 0 0 20px rgba(255,184,104,0.3)"
                      : "0 2px 10px rgba(104,192,255,0.55), 0 0 22px rgba(104,192,255,0.34)",
              }}
            >
              {typedText}
            </span>
            <span
              className={`ml-1 inline-block whitespace-nowrap font-mono text-[clamp(1.9rem,6.95vw,6.45rem)] text-slate-700 ${
                showUnderscore ? "opacity-100" : "opacity-0"
              }`}
            >
              _
            </span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-gray-400 md:text-lg">
            つくりたいを、カタチに。
            <br />
            ここは、学生がアプリをつくる場所。
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <motion.div style={{ y: logoY, scale: logoScale }} className="relative z-10 mx-auto -mt-72 w-full max-w-5xl">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_22px_55px_rgba(15,23,42,0.12)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 lg:gap-5">
              {TAB_ITEMS.map((item) => (
                <div
                  key={`grid-${item.id}`}
                  className="group flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_8px_22px_rgba(15,23,42,0.07)] transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={44}
                    height={44}
                    className="transition-transform duration-200 group-hover:scale-125"
                  />
                  <span className="text-xs font-medium text-slate-700 transition-colors duration-200 group-hover:text-slate-900">
                    {item.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <style jsx>{`
        .area {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #eef2ff 100%);
        }

        .circles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(148, 163, 184, 0.18);
          animation: float-square 25s linear infinite;
          bottom: -150px;
        }

        .circles li:nth-child(1) {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .circles li:nth-child(2) {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .circles li:nth-child(3) {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
        }

        .circles li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .circles li:nth-child(5) {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }

        .circles li:nth-child(6) {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
        }

        .circles li:nth-child(7) {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
        }

        .circles li:nth-child(8) {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
        }

        .circles li:nth-child(9) {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
        }

        .circles li:nth-child(10) {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
        }

        @keyframes float-square {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }

          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
