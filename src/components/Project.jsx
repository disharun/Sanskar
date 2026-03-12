import React from "react";

import projectBg from "../assets/Group 1337.png";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const Project = () => {
  const ref = useRevealOnScroll();
  const imgRef = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className="reveal reveal--right bg-[#0f0f10] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1269px] px-6 md:px-0">
        <div className="mb-6">
          <span
            className="inline-block text-[42px] md:text-[56px] font-semibold tracking-wide leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.45)",
              textTransform: "uppercase",
            }}
          >
            Project
          </span>
        </div>

        <div
          ref={imgRef}
          className="reveal reveal--zoom-in relative overflow-hidden rounded-sm w-full md:w-[1269px] md:h-[577px]"
        >
          <div className="animate-float-pulse w-full h-full">
            <img
              src={projectBg}
              alt=""
              className="img-premium w-full h-[280px] md:h-[577px] object-cover object-center"
            />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="font-serif text-4xl md:text-5xl mb-2">Eternia</h3>
              <p className="text-sm md:text-base text-white/80 mb-5">
                Rooted In Grace. Defined By Design
              </p>

              <button
                type="button"
                aria-label="Open project"
                className="mx-auto grid place-items-center h-14 w-14 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7H17V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
