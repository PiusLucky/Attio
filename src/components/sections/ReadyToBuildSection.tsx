import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";

function ReadyToBuildSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-16 items-center !bg-[#266DF0]  px-4 md:px-[94px]">
      <div>
        <p
          className={cn(
            gilroyBold.className,
            "text-[40px] leading-tight md:leading-normal text-[#A0BFF8]"
          )}
        >
          Ready to build your team&apos;s{" "}
          <span className="text-white">dream CRM?</span>
        </p>
        <div className="flex gap-[12px] justify-start mt-[32px]">
          <MainButton
            text="Start for free"
            size="small"
            className="border-none rounded-[12px] bg-[#538BF3]/40 hover:bg-[#538BF3]/40"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </div>
      </div>
      <div>
        <img src="/images/ready_to_build.png" alt="security" />
      </div>
    </section>
  );
}

export default ReadyToBuildSection;
