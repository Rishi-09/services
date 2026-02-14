import "react/jsx-runtime";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import PublicRaidoStation from "./components/PublicRadioStations";
import StationList from "../components/Stationlist";
import CityRadioData from "./components/CityRadioData";
import Body from "../components/Body";
import Genre from "./components/Genre";
import FAQSection from "../components/FAQSection";

import {
  musicFocusedData,
  talkNewsCommunity,
  cityRadioStations,
  STEPS_TO_LISTEN,
  BENEFITS_OF_LISTEN,
  popularIndianRadioGenres,
  globalListeners,
  faqData,
} from "./constants";

function page() {
  return (
    <div>
      <Hero />
      <Explore />
      <PublicRaidoStation />
      <section className="max-w-9/12 mx-auto mt-6">
        {[musicFocusedData, talkNewsCommunity].map((data, i) => (
          <StationList key={i} data={data} />
        ))}
      </section>
      <CityRadioData cityRadioStations={cityRadioStations} />
      <section className="max-w-9/12 mx-auto mt-6">
        {[STEPS_TO_LISTEN, BENEFITS_OF_LISTEN].map((data, i) => (
          <StationList key={i} data={data} />
        ))}
      </section>

      <section className="max-w-9/12 mx-auto mt-6">
        {[popularIndianRadioGenres, globalListeners].map((data, i) => (
          <Body key={i} data={data} />
        ))}
      </section>

      <Genre />
      <FAQSection faqData={faqData} />
    </div>
  );
}

export default page;
