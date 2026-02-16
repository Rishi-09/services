import React from "react";
import { browseRadioStations } from "../constants";
import StationList from "../../components/Stationlist";
export default function BrowseYourWay() {
  return (
    <section className="max-w-9/12 mx-auto" >
      <StationList data={browseRadioStations} />
      <p className="text-lg text-gray-400">
        Whether you’re relaxing, working, commuting, or exploring new cultures,
        there’s always a station for your mood.
      </p>
    </section>
  );
}
