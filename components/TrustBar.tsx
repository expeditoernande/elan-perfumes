import { guarantees } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="border-y hairline bg-ink-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        {guarantees.map((item, index) => (
          <div key={item.title} className="flex gap-4">
            <span className="font-display text-2xl text-gold-500/70">
              0{index + 1}
            </span>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-gold-200">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gold-200/55">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}