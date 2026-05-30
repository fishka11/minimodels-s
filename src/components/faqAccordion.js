"use client";

import { useState } from "react";
import FAQItem from "./faqItem";

export default function FAQAccordion({ faq, locale }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faq.map((item, index) => (
        <FAQItem
          key={item._key}
          item={item}
          locale={locale}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
