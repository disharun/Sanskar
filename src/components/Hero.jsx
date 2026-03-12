import React from "react";
import heroBg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 animate-ken-burns"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 text-white">
        {/* Main Text */}
        <div className="max-w-5xl ml-12 md:ml-24">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 flex items-baseline">
            <span
              className="mr-1"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "151px",
                lineHeight: "100%",
                letterSpacing: "0px",
                textTransform: "capitalize",
              }}
            >
              S
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "64px",
                lineHeight: "100%",
                letterSpacing: "0px",
                fontVariant: "small-caps",
              }}
            >
              anskar Realty
            </span>
          </h1>
          <p
            className="ml-2 md:ml-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "46px",
              lineHeight: "100%",
              letterSpacing: "0px",
              fontVariant: "small-caps",
              color: "#FFFFFF",
            }}
          >
            A venture by Yatharth Group
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute left-8 bottom-4 flex flex-col items-center gap-4 text-white/80">
          <span
            className="text-xs tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll down
          </span>
          <div className="w-[1px] h-24 bg-white/50"></div>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
