import React from "react";
import FAQ from "../../components/FAQSection";
import { faqData } from "../constants";
export default function FaqSection() {
  return (
    <section>
      <FAQ faqData={faqData} />
    </section>
  );
}
