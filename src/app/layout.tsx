import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angle Genius | B2B Offer Creator",
  description: "Create effective angles that reach your targets. Boost sales with offers that improve business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
