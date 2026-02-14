import React from "react";
import Hero from "./components/Hero";
import StartListening from "./components/StartListening";
import WhyTalesFM from "./components/WhyTalesRM";
import RadioComparison from "./components/RadioComparison";
import Reviews from "./components/Reviews";
import FAQSection from "../components/FAQSection";
import FreeRadio from "./components/FreeRadio";
import { faqData } from "./constants";

export default function page() {
  return (
    <main className="mt-15 ">
      
      <Hero />
      <StartListening />
      <WhyTalesFM />
      <RadioComparison />
      <Reviews />
      <FAQSection faqData={faqData} />
      <FreeRadio />
    </main>
  );
}
