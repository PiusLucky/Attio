import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/degrasse.png",
    review:
      "“My team loves Attio's reporting system because it's so dynamic. We can splice our data in so many different ways and combinations.”",
    name: "DeGresse Schrader",
    position: "Chief of Staff, Pallet",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="A CRM created to be your own."
          description="Tweak anything and everything to ensure Attio fits your business, not the other way around."
        />
      </div>

      <div className="w-full flex justify-center my-[64px]">
        <img
          src="/images/crm.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
      </div>

      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default CRMSection;
