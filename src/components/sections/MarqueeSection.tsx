"use client";

import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  const logosGoingToLeft = [
    "/images/coca_cola.png",
    "/images/open_ai.png",
    "/images/pallet.png",
    "/images/causal.png",
    "/images/plain.png",
    "/images/passion_front.png",
  ];
  const logosGoingToRight = [
    "/images/dopt.png",
    "/images/hyperlane.png",
    "/images/on_deck.png",
    "/images/bravado.png",
    "/images/beacons.png",
  ];
  return (
    <section>
      {/* TOP SIDE */}
      <Marquee
        direction="left"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToLeft.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>

      {/* BOTTOM SIDE */}
      <Marquee
        direction="right"
        className="mt-8"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToRight.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default MarqueeSection;
