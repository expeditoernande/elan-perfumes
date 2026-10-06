import { BottleArt } from "@/components/BottleArt";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, fragrances } from "@/lib/site";

export function Fragrances() {
  return (
    <section id="fragrancias" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="A coleção"
        title="Seis fragrâncias, seis pontos de partida"
        description="Cada composição foi construída em torno de um acorde principal e envelhece diferente em cada tipo de pele."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fragrances.map((item) => (
          <article
            key={item.id}
            id={`fragrancia-${item.id}`}
            className="card-hover flex scroll-mt-28 flex-col rounded-3xl border hairline bg-ink-900/70 p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="w-28 shrink-0">
                <BottleArt uid={item.id} tone={item.tone} className="w-full" />
              </div>
              <div className="flex-1">
                {item.badge ? (
                  <span className="inline-block rounded-full border border-gold-500/50 px-3 py-1 text-[0.6rem] tracking-[0.25em] text-gold-400 uppercase">
                    {item.badge}
                  </span>
                ) : null}
                <h3 className="mt-3 font-display text-xl text-gold-200">{item.name}</h3>
                <p className="mt-1 text-xs tracking-[0.2em] text-gold-500 uppercase">
                  {item.family}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gold-200/60">
              {item.description}
            </p>

            <dl className="mt-6 space-y-2 border-t hairline pt-5 text-xs">
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 text-gold-500 uppercase">Topo</dt>
                <dd className="text-gold-200/65">{item.notes.top}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 text-gold-500 uppercase">Coração</dt>
                <dd className="text-gold-200/65">{item.notes.heart}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 text-gold-500 uppercase">Base</dt>
                <dd className="text-gold-200/65">{item.notes.base}</dd>
              </div>
            </dl>

            <div className="mt-auto flex items-end justify-between pt-7">
              <div>
                <p className="text-xs text-gold-200/45">{item.volume}</p>
                <p className="mt-1 font-display text-2xl text-gold-300">
                  {formatPrice(item.price)}
                </p>
                {item.compareAt ? (
                  <p className="text-xs text-gold-200/35 line-through">
                    {formatPrice(item.compareAt)}
                  </p>
                ) : null}
              </div>
              <a
                href="#kits"
                className="rounded-full border border-gold-500/50 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-gold-300 uppercase transition-colors hover:bg-gold-500 hover:text-ink-950"
              >
                Experimentar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}