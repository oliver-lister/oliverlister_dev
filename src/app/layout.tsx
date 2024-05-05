import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/root/Header";
import Footer from "@/components/root/Footer";
import ThemeContextProvider from "@/context/ThemeContext";
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <ThemeContextProvider>
        <ModalContextProvider>
          <body
            className={
              inter.className +
              " " +
              " text-primary bg-secondary overflow-x-hidden | dark:text-secondary dark:bg-primary"
            }
          >
            <ModalManager />
            <Header />
            <main>
              <div className="wrapper py-6">{children}</div>
            </main>
            <Footer />
          </body>
        </ModalContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
