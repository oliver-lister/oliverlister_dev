import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Layout/Header/Header";
import Footer from "@/app/_components/Layout/Footer/Footer";
import { ThemeProvider } from "next-themes";
import ModalContextProvider from "@/context/ModalContext";
import ModalManager from "@/components/modals/ModalManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oliver Lister | Portfolio Website",
  description: "A frontend web developer based in Sydney, Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={
          inter.className +
          " " +
          " text-primary bg-secondary overflow-x-hidden | dark:text-secondary dark:bg-primary"
        }
      >
        <ThemeProvider attribute="class">
          <ModalContextProvider>
            <ModalManager />
            <Header />
            <main>{children}</main>
            <Footer />
          </ModalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
