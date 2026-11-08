"use client";

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type TextRevealProps = {
  as?: "div" | "span" | "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  enabled?: boolean;
  style?: CSSProperties;
};

/** CSS owns the initial state; this observer commits a permanent reveal. */
export default function TextReveal({
  as = "div", children, className, id, delay = 0, enabled = true, style,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const revealed = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;

    function reveal() {
      if (!element) return;
      revealed.current = true;
      element.dataset.revealState = "visible";
      observer?.disconnect();
    }

    if (revealed.current || preference.matches || !("IntersectionObserver" in window)) {
      reveal();
    } else {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) reveal();
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
      observer.observe(element);
    }

    // Keyboard focus must never land on an invisible interactive descendant.
    element.addEventListener("focusin", reveal);
    const onPreferenceChange = () => { if (preference.matches) reveal(); };
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer?.disconnect();
      element.removeEventListener("focusin", reveal);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [enabled]);

  return createElement(as, {
    ref, className, id,
    "data-reveal": enabled ? "" : undefined,
    style: { ...style, "--reveal-delay": Math.min(300, Math.max(0, delay)) + "ms" } as CSSProperties,
  }, children);
}
