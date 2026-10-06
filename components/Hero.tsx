import { BottleArt } from "@/components/BottleArt";
import { brand, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="glow-gold pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2" />
      <div className="glow-plum pointer-events-none absolute top-40 -right-32 h-[420px] w-[420px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-20 pb-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-28">
        <div>
          <p className="text-xs tracking-[0.35em] text-gold-500 uppercase">
            {brand.tagline}
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-gold-200 sm:text-6xl md:text-7xl">
            O cheiro que
            <br />
            <span className="text-gradient-gold">fica com você</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gold-200/70">
            Composições autorais em pequenos lotes, feito para durar o dia inteiro.
            Peça 3 amostras grátis e descubra a fragrância que vira sua assinatura.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#kits"
              className="rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Quero 3 amostras grátis
            </a>
            <a
              href="#fragrancias"
              className="rounded-full border border-gold-500/50 px-8 py-3.5 text-sm font-medium tracking-wide text-gold-300 transition-colors hover:border-gold-400 hover:text-gold-200"
            >
              Ver as 6 fragrâncias
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t hairline pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl text-gold-300">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-gold-200/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 glow-gold opacity-70 blur-2xl" />
          <BottleArt uid="hero" tone="ambar" className="w-full" />
          <div className="mt-4 flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase">
            <span className="h-px w-10 bg-gold-500/50" />
            Lote 47 · Eau de Parfum
            <span className="h-px w-10 bg-gold-500/50" />
          </div>
        </div>
      </div>
    </section>
  );
}