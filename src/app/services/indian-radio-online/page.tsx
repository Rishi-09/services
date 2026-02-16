import "react/jsx-runtime";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import IndianRadioByLanguage from "./components/IndianRadioByLanguage";

import FAQSection from "../components/FAQSection";
import MultiSection from "./components/MultiSection";

import { faqData } from "./constants";
import { SectionContainer } from "../components/SectionContainer";
import IndianRadioByCity from "./components/IndianRadioByCity";

function page() {
  return (
    <div>
      <SectionContainer>
        <Hero />
      </SectionContainer>
      <SectionContainer>
        <Explore />
      </SectionContainer>
      <SectionContainer>
        <IndianRadioByLanguage />
      </SectionContainer>
      <SectionContainer>
        <IndianRadioByCity />
      </SectionContainer>
      <MultiSection />
      <FAQSection faqData={faqData} />
    </div>
  );
}

export default page;
