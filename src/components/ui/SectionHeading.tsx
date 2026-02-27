interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${alignClass} mb-12`}>
      {tag && (
        <span className="inline-block mb-3 text-sm font-medium text-primary-600 tracking-wide uppercase">
          {tag}
        </span>
      )}
      <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl whitespace-pre-line">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-neutral-500 md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
