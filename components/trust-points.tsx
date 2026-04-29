const trustPoints = [
  {
    title: "דיסקרטיות מלאה",
    description: "כל פנייה נקלטת באופן פרטי ומכבד, כפי שמצופה ממשרד משפטי מוביל.",
  },
  {
    title: "התאמה אישית למשרד",
    description: "השאלון והמסרים נבנים לפי סוג הלקוחות, שפה ותהליך העבודה שלכם.",
  },
  {
    title: "הקמה מהירה",
    description: "עולים לאוויר מהר ומתחילים לקבל לידים מסודרים בלי תהליך מסורבל.",
  },
  {
    title: "שירות בעברית",
    description: "ליווי מלא בעברית, כולל התאמה שוטפת ושיפור ביצועים לאורך הדרך.",
  },
];

export function TrustPoints() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {trustPoints.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-white/15 bg-white/[0.045] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/50 sm:p-5"
        >
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-brand-mist sm:text-base">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
