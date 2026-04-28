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
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-sm text-brand-mist">
        שם מלא
        <input
          required
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
          className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-base text-white outline-none transition focus:border-brand-gold/70 focus:bg-white/10"
          placeholder="עו״ד נועה כהן"
        />
      </label>

      <label className="space-y-2 text-sm text-brand-mist">
        טלפון
        <input
          required
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-base text-white outline-none transition focus:border-brand-gold/70 focus:bg-white/10"
          placeholder="050-1234567"
          inputMode="tel"
        />
      </label>

      <label className="space-y-2 text-sm text-brand-mist sm:col-span-2">
        שם משרד
        <input
          value={values.officeName}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              officeName: event.target.value,
            }))
          }
          className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-base text-white outline-none transition focus:border-brand-gold/70 focus:bg-white/10"
          placeholder="כהן ושות׳ - דיני משפחה"
        />
      </label>

      <label className="space-y-2 text-sm text-brand-mist sm:col-span-2">
        הודעה
        <textarea
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          className="min-h-32 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-brand-gold/70 focus:bg-white/10"
          placeholder="אשמח לבדוק התאמה למשרד עם 2 שותפים וצוות קבלה."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="sm:col-span-2 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-night transition hover:-translate-y-0.5 hover:bg-[#e5c57b] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? "פותח וואטסאפ..." : "שליחת פרטים בוואטסאפ"}
      </button>
    </form>
  );
}
