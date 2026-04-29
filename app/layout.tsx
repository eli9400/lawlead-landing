import type { Metadata } from "next";
import { Heebo } from "next/font/google";

import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const title = "מערכת לידים לעורכי דין | דיני משפחה";
const description =
  "מערכת חכמה למשרדי דיני משפחה שמביאה פניות איכותיות ומסדרת לידים ישירות לוואטסאפ.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://lawlead-landing.vercel.app"),
  keywords: [
    "מערכת לידים לעורכי דין",
    "לידים לדיני משפחה",
    "שיווק עורכי דין",
    "קליטת לקוחות לעורכי דין",
    "לידים חכמים לוואטסאפ",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "LawLead",
    locale: "he_IL",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LawLead - מערכת לידים חכמה למשרדי דיני משפחה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
