import { SectionHeading } from "@/components/SectionHeading";
import { brand, formatPrice, kits } from "@/lib/site";

export function Kits() {
  return (
    <section id="kits" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Kits"
        title="Escolha por onde começar"
        description="Dois cliques e nós cuidamos do resto: embalagem presenteável, postagem em 48h e troca em 30 dias."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {kits.map((kit) => (
          <article
            key={kit.id}
            className={`card-hover relative flex flex-col rounded-3xl border p-8 ${
              kit.highlight
                ? "border-gold-500/70 bg-gradient-to-b from-gold-500/15 to-ink-900/70"
                : "hairline bg-ink-900/60"
            }`}
          >
            {kit.highlight ? (
              <span className="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.25em] text-ink-950 uppercase">
                {kit.tagline}
              </span>
            ) : null}

            <h3 className="font-display text-2xl text-gold-200">{kit.name}</h3>
            {!kit.highlight ? (
              <p className="mt-1 text-xs tracking-[0.2em] text-gold-500 uppercase">
                {kit.tagline}
              </p>
            ) : null}

            <p className="mt-6 text-sm leading-relaxed text-gold-200/60">
              {kit.items}
            </p>

            <div className="mt-8">
              <p className="font-display text-4xl text-gold-300">
                {formatPrice(kit.price)}
              </p>
              {kit.period ? (
                <p className="mt-1 text-xs text-gold-200/45">{kit.period}</p>
              ) : null}
            </div>

            <a
              href={brand.whatsapp}
              className={`mt-8 rounded-full px-6 py-3 text-center text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                kit.highlight
                  ? "bg-gold-400 text-ink-950 hover:bg-gold-300"
                  : "border border-gold-500/50 text-gold-300 hover:bg-gold-500 hover:text-ink-950"
              }`}
            >
              Quero este
            </a>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-gold-200/40">
        Frete grátis acima de R$ 199 · 3x sem juros no cartão · Pix com 5% de desconto
      </p>
    </section>
  );
}