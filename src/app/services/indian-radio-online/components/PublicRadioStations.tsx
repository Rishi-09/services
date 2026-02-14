import React from "react";
import { publicRadioData } from "../constants";

export default function PublicRadioStations() {
  return (
    <div className="max-w-9/12 mx-auto py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-amber-50 mb-4">
        {publicRadioData.title}
      </h1>

      {/* Description */}
      <p className="text-amber-50/70 text-lg mb-8 leading-relaxed">
        {publicRadioData.description}
      </p>
      {/* subheading */}
      <h2 className="text-2xl font-semibold text-amber-50 mb-6">
        {publicRadioData.subheading}
      </h2>

      {/* Stations List */}
      <ul className="space-y-2">
        {publicRadioData.stations.map((station) => (
          <li
            key={station.name}
            className="flex items-start text-amber-50 text-lg"
          >
            <span className="font-bold text-red-800 mr-3 shrink-0">•</span>
            <span>{station.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
