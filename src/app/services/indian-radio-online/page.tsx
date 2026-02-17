import "react/jsx-runtime";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import IndianRadioByLanguage from "./components/IndianRadioByLanguage";

import FAQSection from "../components/FAQSection";
import MultiSection from "./components/MultiSection";

import { faqData } from "./constants";
import IndianRadioByCity from "./components/IndianRadioByCity";

function page() {
  return (
    <div>
      <Hero />

      <Explore />

      <IndianRadioByLanguage />

      <IndianRadioByCity />

      <MultiSection />
      <FAQSection faqData={faqData} />
    </div>
  );
}

export default page;
