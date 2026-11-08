"use client";

import { useEffect, useState, type ReactNode } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { Arrow } from "@/components/interface";
import { contact } from "@/data/content";
import TextReveal from "@/components/text-reveal";
import "./hero-portal.css";

function HeroFront({ animate = true }: { animate?: boolean }) {
  return (
    <>
      <div className="portal-intro">
        <span>Design & desenvolvimento web</span>
        <span>Independente por natureza.<br />Personalizado por princípio.</span>
      </div>
      <div className="portal-message">
        <TextReveal as="h1" enabled={animate}>Experiências digitais.<br />Desenvolvidas para impressionar.</TextReveal>
        <TextReveal enabled={animate} delay={260}>
          <p>Sites modernos, personalizados e pensados para transformar ideias em experiências digitais únicas.</p>
          <a className="text-link" href={contact.url} target="_blank" rel="noopener noreferrer">
            Iniciar um projeto <Arrow diagonal />
          </a>
        </TextReveal>
      </div>
    </>
  );
}

/** Integration of the supplied Glyph Portal demo, using the site's local typeface. */
export default function HeroPortal({ children }: { children: ReactNode }) {
  const [face, setFace] = useState<string | null>(null);
  const [staticView, setStaticView] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce), (max-height: 600px)');
    const update = () => setStaticView(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let disposed = false;
    const finish = (family: string) => { if (!disposed) setFace(family); };
    // The portal freezes its font metrics at mount. Resolve our local font first.
    const timeout = window.setTimeout(() => finish('"Arial Black", Arial, sans-serif'), 1600);
    void document.fonts.load('700 100px Space', 'MSX CODE').then(
      () => { clearTimeout(timeout); finish('Space, Arial, sans-serif'); },
      () => { clearTimeout(timeout); finish('"Arial Black", Arial, sans-serif'); },
    );
    return () => { disposed = true; clearTimeout(timeout); };
  }, []);

  if (!face || staticView) {
    return <div className="msx-portal-poster">
      <section className="portal-poster">
        <HeroFront animate={false} />
        <span className="portal-poster-word" aria-hidden="true">MSX CODE</span>
        <a className="poster-explore" href="#projetos">Explorar projetos <Arrow /></a>
      </section>
      {children}
    </div>;
  }

  return (
    <GlyphPortal
      className="msx-portal"
      word="MSX CODE"
      focusChar="M"
      fontFamily={face}
      fontWeight={700}
      scrollLength={1.35}
      interactive
      annotations={false}
      enterLabel="Explorar projetos"
      style={{
        fontFamily: 'Manrope, Arial, sans-serif',
        '--gp-paper': '#080808',
        '--gp-ink': '#f5f5f3',
        '--gp-field': '#f5f5f3',
        '--gp-foreground': '#080808',
      }}
      background={<div className="portal-scene" />}
      front={<HeroFront />}
    >
      {children}
    </GlyphPortal>
  );
}
