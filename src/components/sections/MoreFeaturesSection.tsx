import React from "react";
import FeatureCard from "../cards/FeatureCard";
import CustomStyledHeader from "../common/CustomStyledHeader";

function MoreFeaturesSection() {
  const features = [
    {
      iconUrl: "/images/f_1.png",
      title: "Quick actions",
      description: "Streamline your workflow with customizable shortcuts.",
    },
    {
      iconUrl: "/images/f_2.png",
      title: "Automatic enrichment",
      description:
        "Update your contacts with the latest information on autopilot.",
    },
    {
      iconUrl: "/images/f_3.png",
      title: "Chrome extension",
      description: "Stay lean with Attio's lightweight browser extension.",
    },
    {
      iconUrl: "/images/f_4.png",
      title: "Contact analysis",
      description: "Get deeper insights into your contacts at a single glance.",
    },
    {
      iconUrl: "/images/f_5.png",
      title: "Filters",
      description: "Streamline your workflow with customizable shortcuts.",
    },
    {
      iconUrl: "/images/f_6.png",
      title: "Tiered sorting",
      description: "Update your contacts with the latest information on.",
    },
  ];
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored="And so"
          titleUnColored="much more..."
          description="Your customers are always connected. Why should your CRM be any different?"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {features.map((item, index) => (
          <FeatureCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default MoreFeaturesSection;
