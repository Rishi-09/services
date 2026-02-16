"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <div className="min-h-8/12 bg-black text-white px-4 ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-700 rounded-xl overflow-hidden bg-amber-50/10 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-medium pr-8">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-6 h-6 text-zinc-400 transition-transform duration-500 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-zinc-300/90 leading-relaxed">
                      <hr className="text-amber-50/20 mb-4" />
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
