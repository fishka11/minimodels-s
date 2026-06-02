"use client";

import RichTextRenderer from "@/components/richTextRenderer";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ item, locale, isOpen, onToggle }) {
  const question = item.question?.[locale];
  const answer = item.answer?.[locale];

  return (
    <div className="border-b border-gray-300 py-8">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left cursor-pointer focus:outline-none"
      >
        <span className="text-sky-500 text-xl lg:text-2xl font-light leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-8 h-8 min-w-8 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "mt-6" : "max-h-0"
        }`}
      >
        <div>
          <RichTextRenderer value={answer} />
        </div>
      </div>
    </div>
  );
}
