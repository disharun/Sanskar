import React from "react";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

import iconLandmark from "../assets/Mask group (5).png";
import iconCorridor from "../assets/Mask group (2).png";
import iconAddress from "../assets/Mask group (3).png";
import iconNeighbourhood from "../assets/Mask group (4).png";

const FEATURES = [
  {
    icon: iconLandmark,
    title: "Prominent Landmark",
    desc: "A Defining Landmark That Stands Tall, Symbolizing Prestige And Recognition.",
  },
  {
    icon: iconCorridor,
    title: "Well-Connected Corridor",
    desc: "Seamlessly Connected, Where Every Journey Begins With Convenience.",
  },
  {
    icon: iconAddress,
    title: "Exclusive Address",
    desc: "An Address That Speaks Of Exclusivity, Offering A Lifestyle Of Unmatched Prestige.",
  },
  {
    icon: iconNeighbourhood,
    title: "Elite Neighbourhood",
    desc: "Live Among The City's Most Distinguished, Where Luxury Meets Community",
  },
];

const FeatureItem = ({ icon, title, desc }) => {
  const ref = useRevealOnScroll();
  return (
    <div ref={ref} className="reveal reveal--fade-up max-w-sm">
      <img src={icon} alt="" className="h-10 w-10 object-contain mb-3" />
      <h3 className="font-['Lato'] font-medium text-[20px] leading-[24px] text-black w-[320px] max-w-full mb-2">
        {title}
      </h3>
      <p className="font-['Lato'] font-normal text-[16px] leading-[29px] capitalize text-black/60 w-[320px] max-w-full min-h-[58px]">
        {desc}
      </p>
    </div>
  );
};

const Features = () => {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className="reveal reveal--left relative bg-[#f6efe7] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left copy */}
          <div className="max-w-xl">
            <p className="font-['Lato'] font-normal text-[16px] leading-[100%] tracking-[2px] uppercase text-black w-[407px] max-w-full h-[19px] mb-4">
              Great Features
            </p>
            <h2 className="font-['Quattrocento'] font-bold text-[36px] leading-[100%] capitalize text-black mb-6">
              Elegant Spaces With
              <br />
              Enduring Style
            </h2>
            <p className="text-sm md:text-base leading-7 text-black/55 mb-8">
              A Perfect Harmony Of Elegant Interiors And Distinguished Exteriors,
              Crafted To Reflect Timeless Sophistication.
            </p>

            <button className="btn-premium inline-flex items-center justify-center rounded-sm bg-black px-6 py-3 text-xs font-semibold tracking-wide uppercase text-white shadow-sm hover:bg-black/90 transition-colors">
              Enquire Now
            </button>
          </div>

          {/* Right features */}
          <div className="relative">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 lg:pl-10">
              {FEATURES.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
