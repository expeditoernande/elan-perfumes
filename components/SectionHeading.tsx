type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-medium tracking-[0.35em] text-gold-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-gold-200 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-gold-200/60">{description}</p>
      ) : null}
    </div>
  );
}