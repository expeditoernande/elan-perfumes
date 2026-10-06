import { brand, nav } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-[0.2em] text-gold-200">
            {brand.name}
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase">
            {brand.suffix}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gold-200/70 transition-colors hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.whatsapp}
          className="rounded-full border border-gold-500/60 px-5 py-2 text-xs font-medium tracking-[0.2em] text-gold-300 uppercase transition-colors hover:bg-gold-500 hover:text-ink-950"
        >
          Pedir amostras
        </a>
      </div>
    </header>
  );
}