import React from "react";

import bgStats from "../assets/Mask group (6).png";

const STATS = [
  { value: "17+", label: "years of trust" },
  { value: "4", label: "states covered" },
  { value: "₹ 1.77 Cr*", label: "starting price" },
  { value: "6", label: "G+30 skyline-\ndefining towers" },
];

const Stats = () => {
  const cardRefs = React.useRef([]);

  React.useEffect(() => {
    const els = cardRefs.current.filter(Boolean);
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("reveal--visible"));
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
      { threshold: 0.2 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f6efe7]">
      {/* Background image */}
      <div className="absolute inset-0 flex items-center justify-center pt-20">
        <img
          src={bgStats}
          alt=""
          className="max-w-full max-h-full object-contain opacity-80 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-[#f6efe7]/78" />
      </div>

      {/* Cards row */}
      <div className="relative mx-auto max-w-6xl px-6 md:px-16 py-14 md:py-20 -mt-10 md:-mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {STATS.map((s, idx) => (
            <div
              key={s.value}
              className={[
                "reveal bg-white opacity-100",
                "w-full max-w-[301px] h-[302px] rounded-[26px]",
                "p-8",
                "shadow-[0_4px_16px_rgba(0,0,0,0.102)]",
                "flex flex-col items-center justify-center text-center",
                "transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]",
                // Stagger like the design: 1st & 3rd up, 2nd & 4th down (desktop)
                idx % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: `${idx * 90}ms` }}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
            >
              <div className="text-3xl md:text-4xl font-semibold text-black">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-black/55 leading-5 whitespace-pre-line">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
