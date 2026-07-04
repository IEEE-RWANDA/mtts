"use client";

import { useEffect, useRef } from "react";

// Layered drifting sine waves in MTT-S blue: the microwave motif that
// replaces the ComSoc site's particle network. Pure canvas, no deps.
export default function WaveCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const WAVES = [
      { amp: 0.22, freq: 1.6, speed: 0.012, alpha: 0.16, lw: 1.5 },
      { amp: 0.3, freq: 1.1, speed: 0.008, alpha: 0.11, lw: 1.5 },
      { amp: 0.16, freq: 2.3, speed: 0.017, alpha: 0.08, lw: 1 },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mid = height / 2;
      for (const w of WAVES) {
        ctx.strokeStyle = `rgba(0, 96, 156, ${w.alpha})`;
        ctx.lineWidth = w.lw;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const y =
            mid +
            Math.sin((x / width) * Math.PI * 2 * w.freq + t * w.speed * 60) *
              mid *
              w.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const tick = () => {
      t += 1 / 60;
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    if (reduced) {
      draw();
    } else {
      tick();
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none ${className}`}
    />
  );
}
