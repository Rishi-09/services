import React from "react";
import Body from "../../components/Body";
import { heroSectionContent } from "../constants";

export default function Hero() {
  return (
    <div className=" bg-black text-white selection:bg-white/20">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 lg:py-20">
        {/* Main Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-20 leading-tight">
          Listen to the World. Ad-Free. Anytime.
        </h1>

        {/* Content Section */}
        <div className="space-y-12 max-w-full">
          {/* Subheading & Description */}
          <Body data={heroSectionContent} />

          {/* Features List Section */}
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-wide">
              Why Tales FM Works
            </h3>

            <ul className="space-y-3">
              {[
                "Global FM & Online Radio Stations",
                "Completely Ad-Free Listening",
                "Clear, Reliable Audio Streaming",
                "Available on Mobile and Web",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 text-lg font-light"
                >
                  <span className="mr-3 text-white leading-none">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
