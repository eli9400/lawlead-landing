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
    "cta-shine inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent sm:min-h-14 sm:px-8 sm:text-base";

  const variantStyle =
    variant === "primary"
      ? "bg-gradient-to-b from-brand-gold-soft to-brand-gold text-brand-night shadow-[0_18px_36px_rgba(216,184,107,0.44)] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_44px_rgba(216,184,107,0.46)] active:translate-y-0"
      : "border border-brand-accent/40 bg-white/[0.08] text-white shadow-[0_12px_26px_rgba(8,20,46,0.35)] hover:-translate-y-1 hover:border-brand-accent/70 hover:bg-white/[0.16]";

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
