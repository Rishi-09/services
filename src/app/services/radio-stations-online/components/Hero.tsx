import React from "react";
import Button from "../../ui/Button";

export default function RadioStationsHero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl sm:text-4xl  font-bold leading-tight">
          Radio Stations Online — Stream Live Radio with Tales FM
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100">
          Discover Thousands of Live Radio Stations from anywhere around the
          globe
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          Free. Ad-Free. Anytime. Anywhere.
        </p>

        {/* Description */}
        <p className="text-xl md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Tales FM is your free, ad-free, and global hub for live online radio.
          Discover and instantly tune into thousands of stations covering music,
          news, talk shows, and cultural broadcasts, all accessible on your
          device with a single tap.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button>Download Now</Button>
          <Button>Listen Live</Button>
        </div>
      </div>
    </section>
  );
}
