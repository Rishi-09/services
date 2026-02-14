"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItem } from "../interfaces";

interface FAQProps {
  faqData: FAQItem[];
}

export default function FAQ({ faqData }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-8/12 bg-black text-white  px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl overflow-hidden bg-amber-50/10 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all duration-200"
              >
                <span className="text-lg md:text-xl font-medium pr-8">
                  {item.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6  text-zinc-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-zinc-400 transition-transform duration-300" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-zinc-300/90 leading-relaxed">
                  <hr className="text-amber-50/20 mb-2 " />
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
