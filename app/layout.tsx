import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Layout/Header/Header";
import Footer from "./_components/Layout/Footer/Footer";
import { ThemeProvider } from "next-themes";
import ModalContextProvider from "../context/ModalContext";
import ModalManager from "../components/Modal/ModalManager";
import SessionProvider from "@/components/SessionProvider";

const defaultUrl = process.env.NEXT_URL
  ? `https://${process.env.NEXT_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Oliver Lister | Portfolio Website",
  description: "A frontend web developer based in Sydney, Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="text-primary bg-secondary overflow-x-hidden | dark:text-secondary dark:bg-primary">
        <ThemeProvider attribute="class">
          <ModalContextProvider>
            <ModalManager />
            <Header />
            <main>{children}</main>
            <Footer />
          </ModalContextProvider>
        </ThemeProvider>
        <SessionProvider />
      </body>
    </html>
  );
}
