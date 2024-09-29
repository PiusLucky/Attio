import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";
import { HeroYoutubeModal } from "../modals/HeroYoutubeModal";

function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
        >
          Customer <br /> relationship magic.
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          Powerful, flexible and data-driven, Attio makes it easy to build the
          exact CRM your business needs.
        </p>

        <div className="flex gap-[12px] justify-center">
          <MainButton
            text="Start for free"
            size="small"
            className="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </div>

        <div className="flex w-full justify-center">
          <HeroYoutubeModal />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
