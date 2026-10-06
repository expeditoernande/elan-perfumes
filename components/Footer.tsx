import { brand, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t hairline bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl tracking-[0.2em] text-gold-200">
              {brand.name}{" "}
              <span className="text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase">
                {brand.suffix}
              </span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gold-200/55">
              {brand.tagline}. Composição autoral, produção em lotes pequenos e envio
              para todo o Brasil.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase">
              Navegar
            </p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gold-200/65 transition-colors hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[0.65rem] tracking-[0.3em] text-gold-500 uppercase">
              Contato
            </p>
            <a
              href={brand.whatsapp}
              className="text-sm text-gold-200/65 transition-colors hover:text-gold-300"
            >
              WhatsApp
            </a>
            <a
              href={brand.instagram}
              className="text-sm text-gold-200/65 transition-colors hover:text-gold-300"
            >
              Instagram
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="text-sm text-gold-200/65 transition-colors hover:text-gold-300"
            >
              {brand.email}
            </a>
            <p className="mt-2 text-xs text-gold-200/40">
              {brand.city} · desde {brand.founded}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t hairline pt-8 text-xs text-gold-200/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name} {brand.suffix}. Todos os direitos
            reservados.
          </p>
          <p>CNPJ 00.000.000/0001-00 · ANVISA registrada</p>
        </div>
      </div>
    </footer>
  );
}