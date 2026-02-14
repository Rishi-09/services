import React from 'react'
import { radioStationsData } from "../constants";

export default function RadioStationsInIndia() {
  return (
    <div className=" mx-auto py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-amber-50 mb-4">
          {radioStationsData.title}
        </h1>

        {/* Description */}
        <p className="text-amber-50 text-lg mb-8 leading-relaxed">
          {radioStationsData.description}
        </p>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-amber-50 mb-6">
          {radioStationsData.subheading}
        </h2>

        {/* Stations List - All Open by Default */}
        <div className="space-y-6">
          {radioStationsData.content.map((station) => (
            <div
              key={station.name}
              className="border border-amber-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Station Name */}
              <h3 className="text-xl font-bold text-amber-50 pb-4 border-b border-amber-200 mb-6">
                {station.name}
              </h3>

              {/* Content Details - Always Visible */}
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-amber-50">Country:</span>{" "}
                  <span className="text-amber-900">
                    {station.content.Country}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-amber-700">Genre:</span>{" "}
                  <span className="text-amber-50">
                    {station.content.Genre.join(", ")}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-amber-50">
                    Frequency:
                  </span>{" "}
                  <span className="text-amber-50 font-mono">
                    {station.content.Frequency}
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-amber-50">
                    Languages:
                  </span>{" "}
                  <span className="text-amber-50">
                    {station.content.Languages.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
