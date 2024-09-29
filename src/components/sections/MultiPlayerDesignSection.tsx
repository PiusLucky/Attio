import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function MultiPlayerDesignSection() {
  const cardData = {
    avatarUrl: "/images/alon.png",
    review:
      "“Attio has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything.”",
    name: "Alon Bartur",
    position: "Co-foundr & CRO, Dopt",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Designed for multiplayer."
          description="The first trully multiplayer CRM. After all, the best work doesn’t come from silos."
        />
      </div>

      <div className="w-full flex flex-col gap-[28px] items-center justify-center my-[64px] bg-white">
        <img
          src="/images/d_1.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
        <img
          src="/images/d_2.png"
          alt="design image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
      </div>

      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default MultiPlayerDesignSection;
