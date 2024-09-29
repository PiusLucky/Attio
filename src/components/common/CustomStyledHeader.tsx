import { gilroyBold } from "@/lib/utils";
import { cn } from "@/lib/utils";
import React from "react";

function CustomStyledHeader({
  titleColored,
  titleUnColored,
  description,
}: {
  titleColored: string;
  titleUnColored: string;
  description: string;
}) {
  return (
    <div>
      <p
        className={cn(
          gilroyBold.className,
          "text-3xl md:text-[52px] text-[#9098A0]"
        )}
      >
        {titleColored} <span className="text-white">{titleUnColored}</span>
      </p>
      <p className="text-white text-[22px] mt-4">{description}</p>
    </div>
  );
}

export default CustomStyledHeader;
