import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-gold-400" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          fill="currentColor"
          role="presentation"
        >
          <path d="M10 1.6l2.5 5.1 5.6.8-4 4 .9 5.6L10 14.5 5 17.1l.9-5.6-4-4 5.6-.8L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24">
      <div className="glow-gold pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Quem já usa"
          title="312 avaliações e nenhuma decepção"
          description="Avaliações verificadas de clientes que receberam o pedido pelo nosso envio."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="card-hover flex flex-col rounded-3xl border hairline bg-ink-900/70 p-8"
            >
              <Stars rating={item.rating} />
              <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-gold-200/85">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t hairline pt-5">
                <p className="text-sm font-medium text-gold-200">{item.name}</p>
                <p className="mt-1 text-xs tracking-[0.2em] text-gold-500 uppercase">
                  {item.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}