import { brand } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="glow-gold pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[720px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs tracking-[0.35em] text-gold-500 uppercase">Comece hoje</p>
        <h2 className="mt-5 font-display text-4xl leading-tight text-gold-200 sm:text-5xl">
          Três amostras grátis.
          <br />
          Uma assinatura.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gold-200/60">
          Responda o questionário de 2 minutos e nós montamos a remessa com três
          fragrâncias — da mais leve à mais intensa — para você escolher sem risco.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={brand.whatsapp}
            className="rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Quero receber as amostras
          </a>
          <a
            href={brand.instagram}
            className="rounded-full border border-gold-500/50 px-8 py-3.5 text-sm font-medium tracking-wide text-gold-300 transition-colors hover:border-gold-400 hover:text-gold-200"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}