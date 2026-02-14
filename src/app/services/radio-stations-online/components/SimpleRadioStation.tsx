import React from "react";

const RadioHero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#171717] rounded-[40px] border border-[#262626] p-10 md:p-20 text-center shadow-2xl">
        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Online Radio Stations Made Simple
        </h1>

        {/* Sub-heading */}
        <h2 className="text-[#d1d5db] text-xl md:text-2xl font-medium mb-8">
          Start Listening to Free Radio Today
        </h2>

        {/* Description Paragraph */}
        <p className="text-[#9ca3af] text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Tales FM revolutionizes the radio listening experience. This
          complimentary, web-based platform delivers global, live access to
          radio broadcasts, effectively removing the geographical and technical
          barriers associated with traditional radio.
        </p>

        {/* Action Button */}
        <button
          className="inline-block px-8 py-3.5 border-2 border-[#e5e7eb] text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#171717]"
          aria-label="Get the Radio App"
        >
          Get Your App
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <RadioHero />
    </div>
  );
}
