import React from "react";
import StationList from "../../components/Stationlist";
import { musicFocusedSectionData } from "../constants";

export default function WhatYouCanListenTo() {
  return (
    <section className="mb-10" >
      <StationList data={musicFocusedSectionData} />
      <p className="text-lg text-gray-400" >
        No cables. No traditional radios. Just instant access to the world of
        sound.
      </p>
    </section>
  );
}
