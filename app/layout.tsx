import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "./asset-path";

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
    icon: assetPath("/brand/fungames-symbol.png"),
    shortcut: assetPath("/brand/fungames-symbol.png"),
    apple: assetPath("/brand/fungames-symbol.png"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
