import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woovi - Venda ao infinito",
  description: "Venda mais e encante seus clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
