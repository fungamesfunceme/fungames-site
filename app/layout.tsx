import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUNGames | FUNCEME",
  description:
    "Iniciativa da FUNCEME que integra pesquisa, jogos sérios e capacitações para transformar ciência em experiências e apoiar decisões.",
  keywords: [
    "FUNGames",
    "FUNCEME",
    "jogos sérios",
    "ciência",
    "capacitação",
    "gestão de secas",
    "recursos hídricos",
  ],
  other: { "codex-preview": "development" },
  icons: {
    icon: "/brand/fungames-symbol.png",
    shortcut: "/brand/fungames-symbol.png",
    apple: "/brand/fungames-symbol.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
