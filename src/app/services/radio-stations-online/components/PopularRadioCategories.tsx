import React from "react";
import StationList from "../../components/Stationlist";
import { popularRadioCategories } from "../constants";

export default function PopularRadioCategories() {
  return (
    <section>
      <StationList data={popularRadioCategories} />
      <p className="text-lg text-gray-400">
        Something for every listener — from global hits to local voices.
      </p>
    </section>
  );
}
