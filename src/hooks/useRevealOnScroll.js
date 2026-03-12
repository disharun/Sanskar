import React from "react";

export default function useRevealOnScroll(options) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      el.classList.add("reveal--visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            io.unobserve(entry.target);
          }
        });
      },
      options ?? { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}

