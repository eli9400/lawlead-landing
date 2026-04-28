import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.25em] text-brand-gold/90 uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-8 text-brand-mist sm:text-lg",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
