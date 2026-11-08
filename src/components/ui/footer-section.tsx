"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import TextReveal from "@/components/text-reveal";
import { ArrowUpRight, Plus } from "lucide-react";
import { Brand, Year } from "@/components/interface";
import { contact } from "@/data/content";
import "./footer-section.css";

const groups = [
  { label: "Portfólio", links: [
    { title: "Projetos selecionados", href: "#projetos" },
    { title: "Por trás do código", href: "#sobre" },
  ] },
  { label: "Soluções", links: [
    { title: "Sites e landing pages", href: "#servicos" },
    { title: "Cardápios e lojas digitais", href: "#servicos" },
  ] },
  { label: "Vamos conversar", links: [
    { title: "Iniciar um projeto", href: "#contato" },
    { title: "WhatsApp", href: contact.url },
  ] },
];

/** Share the same once-only CSS reveal; keep wrappers mounted when closed. */
function AnimatedContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return <TextReveal delay={delay * 1000}>{children}</TextReveal>;
}

/** Footer reference adapted into a compact fixed header and nonmodal disclosure. */
export function FixedSiteNavigation() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    }
    function onPointer(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    }
    // Accessibility skill: close on Escape/outside click; release all listeners.
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return <header className="site-top" ref={header}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <div className="site-top-bar">
      <a href="#inicio" aria-label="MSX CODE — início" onClick={() => setOpen(false)}><Brand /></a>
      <nav className="site-top-shortcuts" aria-label="Navegação principal">
        <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
        <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>
      <button ref={trigger} type="button" className="site-top-trigger"
        aria-expanded={open} aria-controls="site-top-panel" onClick={() => setOpen(!open)}>
        {open ? "Fechar" : "Explorar"}<Plus size={18} aria-hidden="true" />
      </button>
    </div>

    {/* Responsive skill: panel scrolls within short viewports; page remains usable. */}
    <div id="site-top-panel" className="site-top-panel" hidden={!open}>
      <div className="site-top-grid">
        <AnimatedContainer>
          <div className="site-top-signature"><span>Design que faz sentido.<br />Código que faz acontecer.</span>
            <p>© <Year /> MSX CODE.</p></div>
        </AnimatedContainer>
        {groups.map((group, index) => <AnimatedContainer key={group.label} delay={0.06 + index * 0.06}>
          <nav aria-label={group.label}>
            <h2>{group.label}</h2>
            <ul>{group.links.map(link => {
              const external = link.href.startsWith("https:");
              return <li key={link.title}><a href={link.href} onClick={() => setOpen(false)}
                target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                {link.title}{external && <><ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (nova aba)</span></>}
              </a></li>;
            })}</ul>
          </nav>
        </AnimatedContainer>)}
      </div>
    </div>
  </header>;
}
