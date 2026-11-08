"use client";

import TextReveal from "@/components/text-reveal";
import { ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { contact } from "@/data/content";
import "./prisma-hero.css";

const VIDEO_URL = "/hero-background.mp4";

interface Segment { text: string; className?: string }
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

/** Each word shares the CSS-first, once-only reveal used throughout the page. */
function AnimatedWords({ words, className = "", style, showAsterisk = false }: {
  words: { word: string; className?: string }[];
  className?: string;
  style?: CSSProperties;
  showAsterisk?: boolean;
}) {
  return (
    <span className={`prisma-words ${className}`} style={style}>
      {words.map(({ word, className: wordClass }, i) => (
        <TextReveal as="span" key={i} delay={80 + i * 90}
          className={`prisma-word ${wordClass ?? ""}`}>
          {word}{i < words.length - 1 ? "\u00a0" : ""}
          {showAsterisk && i === words.length - 1 && <span className="prisma-asterisk" aria-hidden="true">*</span>}
        </TextReveal>
      ))}
    </span>
  );
}

export function WordsPullUp({ text, ...props }: WordsPullUpProps) {
  return <AnimatedWords words={text.trim().split(/\s+/).map(word => ({ word }))} {...props} />;
}

export function WordsPullUpMultiStyle({ segments, ...props }: {
  segments: Segment[]; className?: string; style?: CSSProperties;
}) {
  return <AnimatedWords words={segments.flatMap(segment => segment.text.trim().split(/\s+/)
    .filter(Boolean).map(word => ({ word, className: segment.className })))} {...props} />;
}

function FadeUp({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return <TextReveal className={className} delay={delay * 1000}>{children}</TextReveal>;
}

export function PrismaHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    // Avoid downloading an autoplay video when the visitor requests less motion/data.
    const applyPreference = () => {
      if (preference.matches || connection?.saveData) element.pause();
      else {
        if (!element.getAttribute("src")) element.src = VIDEO_URL;
        void element.play().catch(() => setPlaying(false));
      }
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => { preference.removeEventListener("change", applyPreference); element.pause(); };
  }, []);

  async function toggleVideo() {
    const element = video.current;
    if (!element) return;
    if (!element.paused) { element.pause(); return; }
    if (!element.getAttribute("src")) element.src = VIDEO_URL;
    try { await element.play(); } catch { setFailed(true); }
  }

  return (
    <section id="inicio" className="prisma-hero" aria-labelledby="prisma-title">
      <div className="prisma-frame">
        <video ref={video} className="prisma-video" loop muted playsInline preload="none"
          poster="/hero-poster.jpg" aria-hidden="true" tabIndex={-1}
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setFailed(true); }} />
        <div className="prisma-noise" aria-hidden="true" />
        <div className="prisma-shade" aria-hidden="true" />


        {!failed && <button type="button" className="prisma-video-toggle" onClick={toggleVideo}
          aria-label={playing ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}>
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        </button>}

        <div className="prisma-content">
          <h1 id="prisma-title"><WordsPullUp text="MSX CODE" showAsterisk /></h1>
          <div className="prisma-intro">
            <FadeUp delay={0.18}><p>Design com propósito. Código com precisão. Criamos sites e experiências digitais que traduzem a essência do seu negócio — da primeira ideia ao último detalhe.</p></FadeUp>
            <FadeUp delay={0.28}>
              <a className="prisma-cta" href={contact.url} target="_blank" rel="noopener noreferrer">
                Vamos criar juntos<span><ArrowRight size={19} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="sr-only"> (WhatsApp, nova aba)</span>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
