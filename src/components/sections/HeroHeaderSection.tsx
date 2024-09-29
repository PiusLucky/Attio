import { ChevronRight } from "lucide-react";
import React from "react";

function HeroHeaderSection() {
  return (
    <div className="flex justify-center">
      <div className="inline-flex  items-center gap-1 bg-[#F4F5F6] p-1 rounded-[100px] pr-[10px]">
        <div className="text-white inline-block bg-primary p-2 rounded-[100px] text-[10px] font-semibold">
          New
        </div>
        <p className="text-[#31373D]">
          How Pallet uses Attio to power their GTM
        </p>
        <div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default HeroHeaderSection;
