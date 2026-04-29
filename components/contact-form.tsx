"use client";

import { FormEvent, useState } from "react";

import { buildContactFormMessage, createWhatsAppLink } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  phone: string;
  officeName: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  phone: "",
  officeName: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const message = buildContactFormMessage(values);
    const link = createWhatsAppLink(message);

    window.open(link, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
      <label className="space-y-2 text-sm font-medium text-brand-mist">
        שם מלא
        <input
          required
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
          className="h-12 w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 text-base text-white outline-none transition focus:border-brand-accent/70 focus:bg-white/[0.12] sm:h-13"
          placeholder="עו״ד נועה כהן"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-brand-mist">
        טלפון
        <input
          required
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          className="h-12 w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 text-base text-white outline-none transition focus:border-brand-accent/70 focus:bg-white/[0.12] sm:h-13"
          placeholder="050-1234567"
          inputMode="tel"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-brand-mist sm:col-span-2">
        שם משרד
        <input
          value={values.officeName}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              officeName: event.target.value,
            }))
          }
          className="h-12 w-full rounded-xl border border-white/20 bg-white/[0.06] px-4 text-base text-white outline-none transition focus:border-brand-accent/70 focus:bg-white/[0.12] sm:h-13"
          placeholder="כהן ושות׳ - דיני משפחה"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-brand-mist sm:col-span-2">
        הודעה
        <textarea
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className="min-h-32 w-full resize-y rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-white outline-none transition focus:border-brand-accent/70 focus:bg-white/[0.12]"
          placeholder="אשמח לבדוק התאמה למשרד עם 2 שותפים וצוות קבלה."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="sm:col-span-2 cta-shine inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-b from-brand-gold-soft to-brand-gold px-6 py-3 text-sm font-bold text-brand-night shadow-[0_18px_34px_rgba(216,184,107,0.42)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(216,184,107,0.44)] disabled:cursor-not-allowed disabled:opacity-80 sm:min-h-14 sm:text-base"
      >
        {isSubmitting ? "פותח וואטסאפ..." : "שליחת פרטים בוואטסאפ"}
      </button>
    </form>
  );
}
