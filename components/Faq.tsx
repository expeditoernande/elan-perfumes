"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { faq } from "@/lib/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t hairline bg-ink-900/50 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          description="Se ficar qualquer dúvida, a gente responde no WhatsApp em até 2 horas."
        />

        <div className="mt-12 space-y-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border bg-ink-950/60 transition-colors duration-500 ${
                  isOpen ? "border-gold-500/40" : "hairline"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-sm font-medium text-gold-200 transition-colors duration-300 hover:text-gold-300"
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl leading-none text-gold-500 transition-transform duration-500 ease-out motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pt-1 pb-5 text-sm leading-relaxed text-gold-200/60">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}