"use client";

import { createElement, useEffect, useRef, type ReactNode } from "react";

type TextRevealProps = {
  as?: "div" | "h1" | "h2" | "p";
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  enabled?: boolean;
};

/** One quiet fade, on entry. Content stays visible if animation is unavailable. */
export default function TextReveal({
  as = "div", children, className, id, delay = 0, enabled = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || !enabled || preference.matches || !element.animate || !window.IntersectionObserver) return;

    let inView = false;
    let played = false;
    let animation: Animation | undefined;
    const portalContent = element.closest<HTMLElement>("[data-gp-content]");
    const portal = portalContent?.closest<HTMLElement>(".msx-portal");

    const reveal = () => {
      // The gallery must finish emerging from the glyph before its text fades in.
      if (!inView || played || preference.matches) return;
      if (portal && portal.dataset.gpMotion === "on" && portal.dataset.gpEntered !== "true") return;
      played = true;
      observer.disconnect();
      portalObserver?.disconnect();
      animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1800,
        delay,
        easing: "cubic-bezier(0.45, 0, 0.55, 1)",
        fill: "backwards",
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      reveal();
    }, { threshold: 0.18 });
    const portalObserver = portal ? new MutationObserver(reveal) : null;
    portalObserver?.observe(portal!, { attributes: true, attributeFilter: ["data-gp-entered", "data-gp-motion"] });
    observer.observe(element);

    const stop = () => {
      if (!preference.matches) return;
      animation?.cancel();
      observer.disconnect();
      portalObserver?.disconnect();
    };
    preference.addEventListener("change", stop);
    return () => {
      animation?.cancel();
      observer.disconnect();
      portalObserver?.disconnect();
      preference.removeEventListener("change", stop);
    };
  }, [delay, enabled]);

  return createElement(as, { ref, className, id, "data-text-reveal": enabled ? "" : undefined }, children);
}
