import { SectionHeading } from "@/components/SectionHeading";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative border-y hairline bg-ink-900/60 py-24"
    >
      <div className="glow-plum pointer-events-none absolute -left-40 top-1/3 h-[380px] w-[380px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Como funciona"
          title="Você não escolhe no escuro"
          description="Amostrar antes de decidir muda tudo — e leva menos tempo do que passar numa loja."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.index}
              className="relative rounded-3xl border hairline bg-ink-950/60 p-8"
            >
              <span className="font-display text-5xl text-gold-500/40">
                {step.index}
              </span>
              <h3 className="mt-5 font-display text-2xl text-gold-200">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gold-200/60">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-gold-200/50">
          Cada frasco leva um QR code com a ficha completa da composição, o lote e a
          assinatura de quem montou a fragrância.
        </p>
      </div>
    </section>
  );
}