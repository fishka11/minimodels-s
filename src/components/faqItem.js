"use client";

import RichTextRenderer from "@/components/richTextRenderer";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ item, locale, isOpen, onToggle }) {
  const question = item.question?.[locale];
  const answer = item.answer?.[locale];

  return (
    <div className="border-b border-gray-300 ">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left cursor-pointer focus:outline-none hover:bg-pink-500 group"
      >
        <span className="text-sky-500 group-hover:text-black text-xl lg:text-2xl font-light leading-snug  transition-colors duration-200 px-6 py-3 block w-full">
          {question}
        </span>
        <ChevronDown
          className={`w-8 h-8 min-w-8 transition-transform duration-200 mr-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "mt-6" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4">
          <RichTextRenderer value={answer} />
        </div>
      </div>
    </div>
  );
}
