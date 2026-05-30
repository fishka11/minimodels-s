"use client";

import { PortableText } from "@portabletext/react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ item, locale, isOpen, onToggle }) {
  const question = item.question?.[locale];
  const answer = item.answer?.[locale];

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <div className="text-gray-700 leading-relaxed">
          <PortableText value={answer} />
        </div>
      </div>
    </div>
  );
}
