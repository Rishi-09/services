import React from "react";
import Body from "../../components/Body";
import { SectionContent } from "../../interfaces";

export default function SmarterWay() {
  const header: SectionContent = {
    title: {
      text: "Why Tales FM Is the Smarter Way to Listen to Radio",
      size: "3xl",
      weight: "600",
    },
    paragraphs: ["Traditional radio limits your choice. Tales FM expands it."],
  };

  const providedValues: SectionContent[] = [
    {
      title: {
        text: "1. 100% Free & Ad-Free Listening",
        size: "2xl",
        weight: "300",
      },
      paragraphs: [
        "Stream high-quality radio instantly. No ads, no subscriptions, and no hidden fees, just press play and enjoy.",
      ],
    },
    {
      title: {
        text: "2. Truly Global Radio Access",
        size: "2xl",
        weight: "300",
      },
      paragraphs: [
        "Explore radio stations from 100+ countries including the UK, Europe, and Asia, all in a single platform.",
      ],
    },
    {
      title: {
        text: "3. High-quality live streaming",
        size: "2xl",
        weight: "300",
      },
      paragraphs: [
        "Experience optimal audio quality with seamless, buffer-free streaming, ideal for both mobile and web platforms",
      ],
    },

    {
      title: {
        text: "4. One Platform, All Devices",
        size: "2xl",
        weight: "300",
      },
      paragraphs: [
        "Mobile apps (Android & iOS) and web browsers.",
        "Your favorite stations follow you everywhere.",
      ],
    },
  ];

  return (
    <>
      <Body data={header} />

      <div>
        <h3 className="text-2xl sm:text-3xl font-light mb-10">
          Here is what we provide:
        </h3>
      </div>

      {providedValues.map((data, i) => (
        <Body key={i} data={data} />
      ))}
    </>
  );
}
