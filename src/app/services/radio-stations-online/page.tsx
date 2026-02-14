import React from "react";
import Hero from "./components/Hero";
import Body from "../components/Body";
import { LIVE_RADIO_STATIONS } from "./constants";
import WhatYouCanListenTo from "./components/WhatYouCanListenTo";
import SmarterWay from "./components/SmarterWay";
import BrowseYourWay from "./components/BrowseYourWay";
import HowTalesFmWork from "./components/HowTalesFmWork";
import PopularRadioCategories from "./components/PopularRadioCategories";
import FeedbackSection from "./components/FeedbackSection";
import FaqSection from "./components/FaqSection";
import SimpleRadioStation from "./components/SimpleRadioStation";
export default function page() {
  return (
    <main className="max-w-9/12 mx-auto">
      <Hero />
      <Body data={LIVE_RADIO_STATIONS} />
      <WhatYouCanListenTo />
      <SmarterWay />
      <BrowseYourWay />
      <HowTalesFmWork />
      <PopularRadioCategories />
      <FeedbackSection />
      <FaqSection />
      <SimpleRadioStation />
    </main>
  );
}
