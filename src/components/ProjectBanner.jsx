import React from "react";

import bannerImg from "../assets/Rectangle 45089.png";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const ProjectBanner = () => {
  const ref = useRevealOnScroll();
  const imgRef = useRevealOnScroll();

  return (
    <section ref={ref} className="reveal reveal--scale bg-[#0f0f10] py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="relative">
          {/* Center banner */}
          <div 
            ref={imgRef}
            className="reveal reveal--zoom-in mx-auto w-full max-w-[760px]"
          >
            <div className="animate-float-pulse">
              <img
                src={bannerImg}
                alt=""
                className="img-premium w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Action (below image) */}
          <div className="mt-6 flex items-center justify-end gap-3 text-white/80">
            <button
              type="button"
              className="link-sweep text-sm text-white/80 hover:text-white transition-colors"
            >
              <span>View Project</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="link-sweep__arrow"
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7H17V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;

