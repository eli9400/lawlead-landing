import { cn } from "@/lib/utils";
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

type WhatsAppCtaProps = {
  label: string;
  message?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function WhatsAppCta({
  label,
  message = DEFAULT_WHATSAPP_MESSAGE,
  variant = "primary",
  className,
}: WhatsAppCtaProps) {
  const baseStyle =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold";

  const variantStyle =
    variant === "primary"
      ? "bg-brand-gold text-brand-night shadow-[0_14px_36px_rgba(212,173,94,0.34)] hover:-translate-y-0.5 hover:bg-[#e5c57b]"
      : "border border-brand-gold/50 bg-white/5 text-brand-sand hover:-translate-y-0.5 hover:bg-white/10";

  return (
    <a
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyle, variantStyle, className)}
    >
      {label}
    </a>
  );
}
