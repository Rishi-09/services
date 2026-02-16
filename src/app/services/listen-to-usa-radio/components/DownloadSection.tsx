"use client";

import Button from "../../ui/Button";
export default function StartExploring() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Start Exploring American Radio
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          Discover the varied world of American radio, which offers stations
          for every interest and mood, including talk shows, sports, news,
          chart-topping music, classic rock, and cultural programming.
          Listen to American music anywhere, at any time, by streaming
          live stations right now.
        </p>

        {/* Button */}
        <div className="pt-4">
          <Button>Download Now</Button>
        </div>

      </div>
    </section>
  );
}
