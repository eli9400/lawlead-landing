import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { TrustPoints } from "@/components/trust-points";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  faqItems,
  flowSteps,
  packageItems,
  painPoints,
  solutionPoints,
} from "@/lib/landing-data";

const intakePreview = [
  ["נושא הפנייה", "הסדרי ראייה ומשמורת"],
  ["רמת דחיפות", "גבוהה - דיון בעוד 5 ימים"],
  ["עיר", "תל אביב"],
  ["האם יש הליך פתוח", "כן, בבית משפט לענייני משפחה"],
  ["טלפון", "050-1234567"],
] as const;

const quickAnswers = [
  ["מה זה?", "מערכת שמסדרת ומסננת פניות חדשות למשרד"],
  ["למה זה טוב?", "פחות שיחות סרק, יותר פניות שבאמת שווה לחזור אליהן"],
  ["כמה עולה?", "מחיר השקה: החל מ־₪4,900"],
  ["איך מתחילים?", "משאירים הודעה בוואטסאפ ומקבלים הדגמה מסודרת"],
] as const;

export default function Home() {
  return (
    <div className="relative overflow-x-clip pb-20">
      <div className="hero-halo pointer-events-none absolute inset-0 -z-20" />
      <div className="lux-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-night/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <p className="font-display text-xl font-extrabold text-white sm:text-2xl">
            LawLead
          </p>

          <WhatsAppCta
            label="קבלו הדגמה עכשיו"
            message="שלום, אשמח לראות הדגמה של מערכת לידים חכמה למשרד דיני משפחה."
            className="hidden sm:inline-flex"
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="pt-14 sm:pt-20 lg:pt-24">
          <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10">
            <Reveal className="space-y-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-gold/45 bg-brand-gold/15 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-brand-gold-soft uppercase">
                מערכת לידים ייעודית לעורכי דין
              </p>

              <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                מערכת לידים חכמה למשרדי דיני משפחה
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-brand-mist sm:text-xl">
                יותר פניות שמתאימות למשרד שלך.
                <br />
                פחות בזבוז זמן על שיחות סרק.
                <br />
                הכול מגיע מסודר ישירות לוואטסאפ.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppCta
                  label="שלחו לי הדגמה בוואטסאפ"
                  className="sm:min-w-60"
                />
                <WhatsAppCta
                  label="איך זה עובד"
                  variant="secondary"
                  className="sm:min-w-44"
                  message="שלום, אשמח להבין איך מערכת הלידים עובדת למשרד דיני משפחה."
                />
              </div>
            </Reveal>

            <Reveal className="premium-card rounded-3xl p-5 sm:p-7" delay={110}>
              <p className="text-sm text-brand-gold-soft">ב־5 שניות מבינים אם זה רלוונטי</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                במקום עומס של פניות אקראיות, מקבלים תמונה ברורה לפני שחוזרים ללקוח.
              </h2>

              <div className="mt-6 space-y-3">
                {quickAnswers.map(([label, value], index) => (
                  <Reveal
                    key={label}
                    delay={170 + index * 90}
                    className="rounded-2xl border border-white/15 bg-white/[0.055] px-4 py-3"
                  >
                    <p className="text-xs font-semibold text-brand-accent">{label}</p>
                    <p className="mt-1 text-sm text-brand-ink sm:text-base">{value}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal className="premium-card mt-8 rounded-3xl p-6 sm:p-8" delay={100}>
          <SectionTitle
            eyebrow="הבעיה"
            title="כשכל פנייה מגיעה אחרת, קשה לנהל קליטה בצורה יעילה"
            description="ברוב המשרדים הפניות נכנסות בלי סדר, בלי פרטים, ועם הרבה שיחות שלא מתקדמות. זה שוחק זמן ופוגע בסגירה."
          />

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <Reveal
                key={point}
                delay={140 + index * 80}
                className="rounded-2xl border border-white/14 bg-white/[0.04] px-4 py-3 text-sm text-brand-ink sm:text-base"
              >
                {point}
              </Reveal>
            ))}
          </div>
        </Reveal>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="premium-card rounded-3xl p-6 sm:p-8" delay={80}>
            <SectionTitle
              eyebrow="הפתרון"
              title="תהליך קליטה פשוט שעוזר לך לחזור רק למי שבאמת מתאים"
            />
            <ul className="mt-7 space-y-3">
              {solutionPoints.map((point, index) => (
                <Reveal
                  key={point}
                  delay={130 + index * 75}
                  className="rounded-2xl border border-brand-accent/28 bg-brand-accent/10 px-4 py-3 text-sm leading-7 text-brand-ink sm:text-base"
                >
                  {point}
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal
            id="how-it-works"
            className="premium-card rounded-3xl p-6 sm:p-8"
            delay={120}
          >
            <SectionTitle eyebrow="איך זה עובד" title="שלושה צעדים ברורים" />

            <div className="mt-7 space-y-4">
              {flowSteps.map((step, index) => (
                <Reveal
                  key={step}
                  delay={170 + index * 90}
                  className="flex items-start gap-4 rounded-2xl border border-white/14 bg-white/[0.04] p-4"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-night">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-brand-ink sm:text-base">{step}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="premium-card mt-8 rounded-3xl p-6 sm:p-8" delay={100}>
          <SectionTitle
            eyebrow="אמון וביטחון"
            title="נבנה במיוחד למשרדי עורכי דין שרוצים לעבוד מסודר"
          />
          <div className="mt-7">
            <TrustPoints />
          </div>
        </Reveal>

        <Reveal className="premium-card mt-8 rounded-3xl p-6 sm:p-8" delay={100}>
          <SectionTitle
            eyebrow="תצוגת מערכת"
            title="כך נראית פנייה כשהיא מגיעה אליכם - מסודרת וברורה"
          />

          <div className="mt-7 overflow-hidden rounded-3xl border border-brand-gold/35 bg-brand-night/60">
            <div className="flex items-center justify-between border-b border-white/12 px-5 py-4">
              <p className="font-semibold text-white">כרטיס ליד חדש</p>
              <span className="rounded-full border border-emerald-200/30 bg-emerald-300/15 px-3 py-1 text-xs text-emerald-100">
                ליד רלוונטי
              </span>
            </div>

            <dl className="grid gap-0 sm:grid-cols-2">
              {intakePreview.map(([label, value], index) => (
                <Reveal
                  key={label}
                  delay={120 + index * 70}
                  className="border-b border-l border-white/10 px-5 py-4 even:border-l-0 sm:[&:nth-child(2n)]:border-l-0"
                >
                  <dt className="text-xs text-brand-mist">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-ink sm:text-base">
                    {value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </Reveal>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="premium-card rounded-3xl p-6 sm:p-8" delay={80}>
            <SectionTitle
              eyebrow="מה מקבלים"
              title="כל מה שצריך כדי להתחיל לקבל פניות איכותיות"
            />
            <div className="mt-7 grid gap-3">
              {packageItems.map((item, index) => (
                <Reveal
                  key={item}
                  delay={130 + index * 70}
                  className="rounded-2xl border border-white/14 bg-white/[0.04] px-4 py-3 text-sm text-brand-ink sm:text-base"
                >
                  {item}
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="premium-card rounded-3xl p-6 sm:p-8" delay={110}>
            <SectionTitle eyebrow="מחיר" title="מחיר השקה לתקופה מוגבלת" />

            <div className="mt-7 space-y-4">
              <div className="rounded-2xl border border-white/14 bg-white/[0.05] p-5">
                <p className="text-sm text-brand-mist">מחיר קודם</p>
                <p className="mt-1 text-2xl font-semibold text-brand-mist/80 line-through">
                  ₪7,900
                </p>
              </div>

              <div className="rounded-2xl border border-brand-gold/55 bg-brand-gold/14 p-5">
                <p className="text-sm font-medium text-brand-gold-soft">מחיר השקה</p>
                <p className="mt-1 font-display text-4xl font-extrabold text-white">
                  ₪4,900
                </p>
                <p className="mt-2 text-sm text-brand-gold-soft">
                  מחיר זמני לתקופת ההשקה - עד 2 משרדים ראשונים
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-white/[0.05] p-5">
                <p className="text-sm text-brand-mist">תחזוקה חודשית</p>
                <p className="mt-1 text-3xl font-semibold text-white">החל מ־₪690</p>
              </div>
            </div>

            <WhatsAppCta
              label="בדיקת התאמה למשרד שלי"
              className="mt-7 w-full"
              message="שלום, אשמח לבדוק התאמה ולקבל הצעת מחיר למערכת לידים חכמה למשרד דיני משפחה."
            />
          </Reveal>
        </section>

        <Reveal className="premium-card mt-8 rounded-3xl p-6 sm:p-8" delay={90}>
          <SectionTitle
            eyebrow="טופס יצירת קשר"
            title="השאירו פרטים - והכול נשלח אליי ישירות לוואטסאפ"
            description="ממלאים פרטים קצרים, ונפתחת הודעה מסודרת עם כל המידע שצריך להתחלת שיחה."
          />
          <div className="mt-7">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal className="premium-card mt-8 rounded-3xl p-6 sm:p-8" delay={90}>
          <SectionTitle eyebrow="FAQ" title="שאלות נפוצות" />
          <div className="mt-7">
            <FaqAccordion items={faqItems} />
          </div>
        </Reveal>

        <Reveal
          className="mt-10 rounded-3xl border border-brand-gold/55 bg-gradient-to-br from-brand-gold/22 to-brand-gold/10 px-6 py-10 text-center sm:px-8 sm:py-12"
          delay={60}
        >
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            רוצה לראות איך זה יעבוד אצלך במשרד?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-mist sm:text-lg">
            שולחים הודעה, מקבלים הדגמה ברורה, ומבינים מהר אם זה מתאים לכם.
          </p>

          <WhatsAppCta
            label="שלחו לי הדגמה בוואטסאפ"
            className="mx-auto mt-7 w-full max-w-sm"
          />

          <p className="mt-6 text-xs leading-6 text-brand-mist/95 sm:text-sm">
            המערכת אינה מספקת ייעוץ משפטי, אלא מיועדת לקליטת פניות, סינון ראשוני
            וניהול לידים בלבד.
          </p>
        </Reveal>
      </main>
    </div>
  );
}
