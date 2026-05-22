import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRIO — Točená zmrzlina · Mladá Boleslav",
  description: "Prémiová točená zmrzlina — belgická čokoláda, madagaskarská vanilka, čerstvá jahoda. Mladá Boleslav, od roku 2009.",
  openGraph: { title: "TRIO Zmrzlina · Mladá Boleslav", description: "Prémiová točená zmrzlina — tři dokonalé příchutě.", type: "website", locale: "cs_CZ" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
