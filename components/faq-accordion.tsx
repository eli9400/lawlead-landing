"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="rounded-2xl border border-white/15 bg-black/20 p-5 transition duration-300 hover:border-brand-accent/45"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-right"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="text-base font-semibold text-white sm:text-lg">
                {item.question}
              </span>

              <span
                className={cn(
                  "relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-gold/50 text-brand-gold transition",
                  isOpen && "bg-brand-gold/15"
                )}
              >
                <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                <span
                  className={cn(
                    "absolute h-3 w-0.5 rounded-full bg-current transition duration-300",
                    isOpen && "scale-y-0 opacity-0"
                  )}
                />
              </span>
            </button>

            <div
              id={`faq-panel-${index}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-sm leading-7 text-brand-mist sm:text-base">
                {item.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
