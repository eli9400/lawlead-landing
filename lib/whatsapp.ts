export const DEFAULT_WHATSAPP_MESSAGE =
  "שלום, אשמח לראות הדגמה של מערכת לידים חכמה למשרד דיני משפחה.";

type ContactFormPayload = {
  name: string;
  phone: string;
  officeName: string;
  message: string;
};

const FALLBACK_WHATSAPP_NUMBER = "972501234567";

function sanitizePhoneNumber(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function getWhatsAppNumber() {
  const envNumber = sanitizePhoneNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""
  );

  return envNumber || FALLBACK_WHATSAPP_NUMBER;
}

export function createWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  const encodedMessage = encodeURIComponent(
    message.trim() || DEFAULT_WHATSAPP_MESSAGE
  );

  return `https://wa.me/${getWhatsAppNumber()}?text=${encodedMessage}`;
}

export function buildContactFormMessage({
  name,
  phone,
  officeName,
  message,
}: ContactFormPayload) {
  const lines = [
    "שלום, אשמח לקבל פרטים על מערכת לידים חכמה למשרד דיני משפחה.",
    "",
    `שם: ${name || "-"}`,
    `טלפון: ${phone || "-"}`,
    `שם משרד: ${officeName || "-"}`,
    `הודעה: ${message || "-"}`,
  ];

  return lines.join("\n");
}
