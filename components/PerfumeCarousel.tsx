"use client";

import { useEffect, useState } from "react";
import { BottleArt } from "@/components/BottleArt";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, fragrances } from "@/lib/site";

const highlights = fragrances.filter((item) => item.badge);
const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 40;

export function PerfumeCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pointerStart, setPointerStart] = useState<number | null>(null);
  const total = highlights.length;

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total);
  };

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  const active = highlights[index];

  return (
    <section id="destaques" className="relative overflow-hidden py-24">
      <div className="glow-gold pointer-events-none absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Destaques"
          title="As três que mais saem"
          description="O mesmo cuidado de formulação, em concentrações e tamanhos que fazem sentido para o dia a dia."
        />

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fragrâncias em destaque"
          tabIndex={0}
          className="mt-14 rounded-3xl border hairline bg-ink-900/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              goTo(index + 1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(index - 1);
            }
          }}
          onPointerDown={(event) => setPointerStart(event.clientX)}
          onPointerUp={(event) => {
            if (pointerStart === null) return;
            const delta = event.clientX - pointerStart;
            if (Math.abs(delta) > SWIPE_THRESHOLD) {
              goTo(index + (delta < 0 ? 1 : -1));
            }
            setPointerStart(null);
          }}
        >
          <div className="overflow-hidden rounded-3xl">
            <ul
              className="flex touch-pan-y transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {highlights.map((item, slideIndex) => (
                <li
                  key={item.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${slideIndex + 1} de ${total}: ${item.name}`}
                  aria-hidden={slideIndex !== index}
                  className="w-full shrink-0"
                >
                  <article className="grid gap-10 p-8 sm:p-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                    <div className="mx-auto w-full max-w-[220px] md:max-w-[260px]">
                      <div className="glow-gold opacity-60 blur-2xl" aria-hidden="true" />
                      <BottleArt uid={`destaque-${item.id}`} tone={item.tone} className="relative w-full" />
                    </div>

                    <div>
                      <span className="inline-block rounded-full border border-gold-500/50 px-3 py-1 text-[0.6rem] tracking-[0.25em] text-gold-400 uppercase">
                        {item.badge}
                      </span>

                      <h3 className="mt-5 font-display text-3xl text-gold-200 sm:text-4xl">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs tracking-[0.25em] text-gold-500 uppercase">
                        {item.family} · {item.volume}
                      </p>

                      <p className="mt-6 max-w-xl text-base leading-relaxed text-gold-200/65">
                        {item.description}
                      </p>

                      <dl className="mt-8 grid gap-3 border-t hairline pt-6 text-xs sm:grid-cols-3">
                        <div>
                          <dt className="text-gold-500 uppercase">Topo</dt>
                          <dd className="mt-1 text-gold-200/70">{item.notes.top}</dd>
                        </div>
                        <div>
                          <dt className="text-gold-500 uppercase">Coração</dt>
                          <dd className="mt-1 text-gold-200/70">{item.notes.heart}</dd>
                        </div>
                        <div>
                          <dt className="text-gold-500 uppercase">Base</dt>
                          <dd className="mt-1 text-gold-200/70">{item.notes.base}</dd>
                        </div>
                      </dl>

                      <div className="mt-8 flex flex-wrap items-center gap-5">
                        <p className="font-display text-3xl text-gold-300">
                          {formatPrice(item.price)}
                          {item.compareAt ? (
                            <span className="ml-3 text-sm text-gold-200/35 line-through">
                              {formatPrice(item.compareAt)}
                            </span>
                          ) : null}
                        </p>
                        <a
                          href="#kits"
                          className="rounded-full bg-gold-400 px-6 py-3 text-xs font-semibold tracking-[0.2em] text-ink-950 uppercase transition-transform hover:scale-[1.03]"
                        >
                          Experimentar
                        </a>
                        <a
                          href={`#fragrancia-${item.id}`}
                          className="text-xs tracking-[0.2em] text-gold-300 uppercase underline decoration-gold-500/50 underline-offset-4 transition-colors hover:text-gold-200"
                        >
                          Ver na lista
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-6 border-t hairline px-8 py-5">
            <p className="text-xs text-gold-200/45" aria-live="polite">
              {active.name} — {index + 1} de {total}
            </p>

            <div className="flex items-center gap-4">
              <ul className="flex items-center gap-2">
                {highlights.map((item, dotIndex) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => goTo(dotIndex)}
                      aria-label={`Ir para ${item.name}`}
                      aria-current={dotIndex === index}
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        dotIndex === index
                          ? "w-7 bg-gold-400"
                          : "w-1.5 bg-gold-500/40 hover:bg-gold-500/70"
                      }`}
                    />
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-500/10"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 4l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Próxima"
                  className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-500/10"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}