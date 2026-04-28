import { ContactForm } from "@/components/contact-form";
import { SectionTitle } from "@/components/section-title";
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
  ["האם יש הליך פתוח", "כן, בית משפט לענייני משפחה"],
  ["טלפון", "050-1234567"],
] as const;

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-brand-night/80 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <p className="font-display text-xl text-brand-sand sm:text-2xl">
            LawLead
          </p>

          <WhatsAppCta
            label="קבלו הדגמה עכשיו"
            message="שלום, אשמח לקבל הדגמה של מערכת לידים חכמה למשרד דיני משפחה."
            className="hidden sm:inline-flex"
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <section className="grid gap-10 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7 animate-fade-up">
            <p className="inline-flex rounded-full border border-brand-gold/35 bg-brand-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
              מערכת לידים ייעודית לעורכי דין
            </p>

            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              מערכת לידים חכמה למשרדי דיני משפחה
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-brand-mist sm:text-xl">
              יותר פניות איכותיות.
              <br />
              פחות בזבוז זמן על שיחות לא רלוונטיות.
              <br />
              קליטת לקוחות מסודרת ישירות לוואטסאפ.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta label="שלחו לי הדגמה בוואטסאפ" className="sm:min-w-56" />
              <WhatsAppCta
                label="איך זה עובד"
                variant="secondary"
                message="שלום, אשמח להבין איך מערכת הלידים עובדת למשרדי דיני משפחה."
                className="sm:min-w-44"
              />
            </div>
          </div>

          <div className="glass-card animate-fade-up rounded-3xl p-6 [animation-delay:120ms] sm:p-8">
            <p className="text-sm text-brand-gold">דיוק לפני הכול</p>
            <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
              פחות רעש. יותר תיקים רלוונטיים.
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-mist">
              המערכת מוודאת שכל פנייה נכנסת עם נתונים מלאים ורלוונטיים,
              ומאפשרת למשרד להגיב מהר ללידים החזקים באמת.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-sand">
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                סינון ראשוני אוטומטי של לידים לא מתאימים
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                קבלת פרטים מסודרים לפני השיחה הראשונה
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                תהליך קליטה עקבי שמעלה אמון ויחס סגירה
              </li>
            </ul>
          </div>
        </section>

        <section className="glass-card mt-8 rounded-3xl p-6 animate-fade-up sm:p-8">
          <SectionTitle
            eyebrow="הבעיה"
            title="מה קורה כשאין תהליך קליטה ברור לפניות נכנסות?"
            description="במשרדי דיני משפחה, כל דקה של תגובה משפיעה על החלטת הלקוח אם להישאר איתכם או להמשיך הלאה."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {painPoints.map((point) => (
              <p
                key={point}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-brand-sand sm:text-base"
              >
                {point}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-6 animate-fade-up sm:p-8">
            <SectionTitle
              eyebrow="הפתרון"
              title="מערכת קליטה חכמה שמכינה את הקרקע לשיחת מכירה טובה"
            />
            <ul className="mt-8 space-y-3">
              {solutionPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-brand-gold/25 bg-brand-gold/10 px-4 py-3 text-sm leading-7 text-brand-sand sm:text-base"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div id="how-it-works" className="glass-card rounded-3xl p-6 animate-fade-up [animation-delay:90ms] sm:p-8">
            <SectionTitle
              eyebrow="איך זה עובד"
              title="3 שלבים שמכניסים סדר ללידים שלכם"
            />
            <div className="mt-8 space-y-4">
              {flowSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/15 p-4"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold font-semibold text-brand-night">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-brand-sand sm:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass-card mt-8 rounded-3xl p-6 animate-fade-up sm:p-8">
          <SectionTitle
            eyebrow="תצוגת מערכת"
            title="כך נראית פנייה כשהיא מגיעה אליכם מסודרת"
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-night/70">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="font-semibold text-white">כרטיס ליד חדש</p>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                ליד רלוונטי
              </span>
            </div>

            <dl className="grid gap-0 sm:grid-cols-2">
              {intakePreview.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-l border-white/10 px-5 py-4 even:border-l-0 sm:[&:nth-child(2n)]:border-l-0"
                >
                  <dt className="text-xs text-brand-mist">{label}</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-sand sm:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-3xl p-6 animate-fade-up sm:p-8">
            <SectionTitle
              eyebrow="מה מקבלים"
              title="חבילת בסיס מלאה להתחלת עבודה מהירה"
            />
            <div className="mt-8 grid gap-3">
              {packageItems.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-brand-sand sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 animate-fade-up [animation-delay:90ms] sm:p-8">
            <SectionTitle
              eyebrow="מחיר"
              title="מודל השקה ברור וממוקד תוצאה"
            />

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-brand-gold/35 bg-brand-gold/10 p-5">
                <p className="text-sm text-brand-mist">מחיר השקה</p>
                <p className="mt-2 font-display text-3xl text-white">
                  החל מ-₪4,900
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/20 p-5">
                <p className="text-sm text-brand-mist">תחזוקה חודשית</p>
                <p className="mt-2 font-display text-3xl text-white">
                  החל מ-₪690
                </p>
              </div>
            </div>

            <WhatsAppCta
              label="בדיקת התאמה למשרד שלי"
              className="mt-8 w-full"
              message="שלום, אשמח לבדוק התאמה ולקבל הצעת מחיר למערכת לידים חכמה למשרד דיני משפחה."
            />
          </div>
        </section>

        <section className="glass-card mt-8 rounded-3xl p-6 animate-fade-up sm:p-8">
          <SectionTitle
            eyebrow="טופס יצירת קשר"
            title="השאירו פרטים והכל נשלח אליי ישירות לוואטסאפ"
            description="ללא מערכות מורכבות וללא זמן המתנה. הפרטים שתמלאו כאן ייפתחו מיד כהודעה מסודרת בוואטסאפ."
          />

          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <section className="glass-card mt-8 rounded-3xl p-6 animate-fade-up sm:p-8">
          <SectionTitle eyebrow="FAQ" title="שאלות נפוצות" />
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/15 bg-black/20 p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-brand-mist sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-brand-gold/40 bg-brand-gold/10 px-6 py-10 text-center animate-fade-up sm:px-8">
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
            מוכן לראות איך זה יעבוד אצלך במשרד?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-mist sm:text-lg">
            בוואטסאפ אחד מקבלים הדגמה ממוקדת, מבינים את התהליך, ומתחילים לייצר
            תשתית לידים מסודרת שמשרתת את המשרד לאורך זמן.
          </p>

          <WhatsAppCta
            label="שלחו לי הדגמה בוואטסאפ"
            className="mx-auto mt-7 w-full max-w-sm"
          />

          <p className="mt-6 text-xs leading-6 text-brand-mist/90 sm:text-sm">
            המערכת אינה מספקת ייעוץ משפטי, אלא מיועדת לקליטת פניות, סינון ראשוני
            וניהול לידים בלבד.
          </p>
        </section>
      </main>
    </div>
  );
}
