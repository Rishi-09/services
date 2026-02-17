"use client";

import { Radio } from "lucide-react";

import { stations } from "../constants";

export default function ExploreIndianRadioByCategory() {
  return (
    <section className="bg-black text-white py-20 sm:py-24 md:py-28">
      <div className=" lg:max-w-9/12 md:max-w-10/12 sm:max-w-10/12  mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-6 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Explore Indian Radio Stations Online by Category
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Some of the popular radio stations online by category are:
          </p>

          <p className="text-white font-semibold text-lg">
            1. FM Radio Stations in India
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            India has numerous popular FM radio stations, including commercial
            networks like Radio Mirchi, Red FM, Radio City, Big FM, and Fever
            FM, alongside public broadcaster All India Radio (AIR) channels such
            as Vividh Bharati, FM Gold, and FM Rainbow.
          </p>

          <p className="text-white font-semibold">
            Some popular radio stations across India are:
          </p>
        </div>

        {/* Grid */}
        {/* Cards Wrapper */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4">
          {stations.map((station, index) => (
            <div
              key={index}
              className="group relative min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-start rounded-3xl border border-white/10"
            >
              {/* Soft inner light */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-30 pointer-events-none" />

              {/* Card Content */}
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold">{station.name}</h3>
                </div>

                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Frequency
                    </p>
                    <p className="text-white/90">{station.frequency}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Genre
                    </p>
                    <p>{station.genre}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Languages
                    </p>
                    <p>{station.languages}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Country
                    </p>
                    <p>{station.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
