import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function DataModellingSection() {
  const cardData = {
    avatarUrl: "/images/filip.png",
    review:
      "“Attio is an incredibly flexible product, you can build anything on it. It gives you the tools you need to build a CRM that's exactly right to your business, your data, and your processes.",
    name: "Filip Mark",
    position: "Chief of Staff, PassionFoot",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Modeled around your data and workflows."
          description="A CRM should go beyond deals. Attio is built for any business process."
        />
      </div>

      <div className="w-full flex flex-col gap-[28px] items-center justify-center my-[64px] bg-white">
        <img
          src="/images/m_1.png"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
        <img
          src="/images/m_2.png"
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

export default DataModellingSection;
