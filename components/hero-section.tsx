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

type Particle = {
  x: number;
  y: number;
  xv: number;
  yv: number;
  c: string;
  s: number;
  a: number;
};

const ITEMS: ItemDef[] = [
  { id: "c", src: "/images/c.svg", alt: "C", left: "8%", top: "16%", mobileLeft: "9%", mobileTop: "21%", exitX: -260, exitY: -220, rotate: -10, size: 94, mobileSize: 76 },
  { id: "figma", src: "/images/figma.svg", alt: "Figma", right: "6%", top: "16%", mobileRight: "8%", mobileTop: "21%", exitX: 280, exitY: -220, rotate: 11, size: 92, mobileSize: 70 },
  { id: "python", src: "/images/python.svg", alt: "Python", left: "8%", top: "66%", mobileLeft: "8%", mobileTop: "72%", exitX: -300, exitY: 190, rotate: -8, size: 116, mobileSize: 88 },
  { id: "next", src: "/images/next.svg", alt: "Next.js", right: "7%", top: "68%", mobileRight: "8%", mobileTop: "73%", exitX: 300, exitY: 220, rotate: 8, size: 98, mobileSize: 78 },
  { id: "typescript", src: "/images/typescript.svg", alt: "TypeScript", left: "12%", top: "40%", mobileLeft: "7%", mobileTop: "45%", exitX: -220, exitY: -60, rotate: 7, size: 108, mobileSize: 84 },
  { id: "javascript", src: "/images/javascript.svg", alt: "JavaScript", right: "10%", top: "40%", mobileRight: "8%", mobileTop: "45%", exitX: 200, exitY: -90, rotate: -9, size: 108, mobileSize: 84 },
  { id: "git", src: "/images/git.svg", alt: "Git", left: "47%", top: "87%", mobileLeft: "50%", mobileTop: "90%", exitX: 0, exitY: 260, rotate: 0, size: 120, mobileSize: 92 },
];

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
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
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: 0, y: 0, out: true };
    const particles: Particle[] = [];
    const gravityStrength = 10;
    const spawnInterval = 10;
    let spawnTimer = 0;
    let type = 0;
    let frameId = 0;
    let time = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (mouse.out) {
        mouse.x = rect.width / 2;
        mouse.y = rect.height / 2;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.out = false;
    };

    const onMouseLeave = () => {
      mouse.out = true;
    };

    const newParticle = () => {
      type = type ? 0 : 1;
      particles.push({
        x: mouse.x,
        y: mouse.y,
        xv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        yv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        c: type ? "rgba(110,223,243,0.45)" : "rgba(140,205,255,0.38)",
        s: type ? 4 + 8 * Math.random() : 3 + 6 * Math.random(),
        a: 1,
      });
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const calculate = (newTime: number) => {
      const dt = newTime - time;
      time = newTime;

      if (!mouse.out) {
        spawnTimer += dt < 100 ? dt : 100;
        for (; spawnTimer > 0; spawnTimer -= spawnInterval) {
          newParticle();
        }
      }

      const particleOverflow = particles.length - 700;
      if (particleOverflow > 0) {
        particles.splice(0, particleOverflow);
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!mouse.out) {
          const x = mouse.x - p.x;
          const y = mouse.y - p.y;
          const distance = x * x + y * y;
          const attract = distance > 100 ? gravityStrength / distance : gravityStrength / 100;
          p.xv = (p.xv + attract * x) * 0.99;
          p.yv = (p.yv + attract * y) * 0.99;
        }
        p.x += p.xv;
        p.y += p.yv;
        p.a *= 0.99;
      }
    };

    const loop = (newTime: number) => {
      draw();
      calculate(newTime);
      frameId = window.requestAnimationFrame(loop);
    };

    resize();
    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    frameId = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(frameId);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #ffffff 0%, #f7f7f7 40%, #f0f0f0 70%, #ebebeb 100%)",
      }}
    >
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />
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
          <h1 className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.9] tracking-tighter text-gray-900">はしるアルパカ</h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-gray-500 md:text-lg">
            つくりたいを、カタチに。
            <br />
            ここは、学生がアプリをつくる場所。
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-28">
        <motion.div style={{ y: logoY, scale: logoScale }} className="relative z-10 mx-auto -mt-72 w-full max-w-5xl">
          <div className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7">
              {ITEMS.map((item) => (
                <div
                  key={`grid-${item.id}`}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white p-3"
                >
                  <Image src={item.src} alt={item.alt} width={44} height={44} />
                  <span className="text-xs font-medium text-gray-600">{item.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
