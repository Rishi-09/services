"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface City {
  name: string;
  stations: string[];
}

export default function BrowseByCity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cities: City[] = [
    {
      name: "Dallas",
      stations: [
        "KDGE (102.1): Adult Contemporary.",
        "KPLX (99.5 The Wolf): Country.",
        "KSCS (96.3): Country.",
        "KHKS (106.1 Kiss FM): Top 40 & Pop.",
        "KTCK (1310 AM/96.7 FM): Sports Radio (The Ticket).",
      ],
    },
    {
      name: "Miami",
      stations: [
        "WLYF (101.5 Lite FM): Adult Contemporary.",
        "WMXJ (102.7 The Beach): Classic Hits.",
        "WEDR (99.1 Jamz): Urban/Hip Hop & R&B.",
        "WHYI (Y100): Top 40 & Pop.",
        "WPOW (Power 96): Rhythmic Top 40/Throwbacks.",
      ],
    },
    {
      name: "Chicago",
      stations: [
        "WVZ (V103): R&B and Soul.",
        "WLIT (106.7 Lite FM): Adult Contemporary.",
        "WSCK (103.5 Kiss FM): Top 40 & Pop.",
        "WGCI (107.5): Hip Hop & R&B.",
        "WDRV (97.1 The Drive): Classic Rock.",
      ],
    },
    {
      name: "Los Angeles",
      stations: [
        "KIIS-FM (102.7): Top 40 & Pop.",
        "KOST (103.5): Adult Contemporary.",
        "KBIG (104.3 MyFM): Hot Adult Contemporary.",
        "KFI (640 AM): News/Talk.",
        "KRRL (Real 92.3): Hip Hop & R&B.",
      ],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.querySelector("div")?.clientWidth || 0;

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-4xl space-y-6 mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Browse Radio Stations by Major US Cities
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            If you are specifically looking for radio stations in your favourite
            city, based on recent ratings and listener trends, here are the
            popular ones.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Button (Desktop Only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-white/20 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Button (Desktop Only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-white/20 transition"
          >
            <ChevronRight />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="
            flex gap-4 sm:gap-6
            overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
            md:overflow-hidden
          "
          >
            {cities.map((city, index) => (
              <div
                key={index}
                className="
                min-w-[88%] sm:min-w-[75%] md:min-w-[48%]
                snap-start
                rounded-2xl md:rounded-3xl
                border border-white/10
                bg-linear-to-br from-white/10 via-white/5 to-transparent
                backdrop-blur-xl
                shadow-md md:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                p-6 sm:p-8
                transition-all duration-300
              "
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                  {city.name}
                </h3>

                <ol className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                  {city.stations.map((station, i) => (
                    <li key={i}>
                      {i + 1}. {station}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
