import React from "react";
import Hero from "./components/Hero";
import WhyAmericanRadio from "./components/WhyAmericanRadio";
import ExploreByGenre from "./components/ExploreByGenre";
import MostListenedRadioStations from "./components/MostListenedRadioStations";
import BrowseRadioStations from "./components/BrowseRadioStations";
import HowToStream from "./components/HowToStream";
import { faqData } from "./constants";
import FAQ from "../components/FAQSection";
import DownloadSection from './components/DownloadSection'

export default function Page() {
  return (
    <>
      <Hero />
      <WhyAmericanRadio />
      <ExploreByGenre />
      <MostListenedRadioStations />
      <BrowseRadioStations />
      <HowToStream />
      <FAQ faqData={faqData} />
      <DownloadSection />
    </>
  );
}
