import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/ThemeContext";

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
      <ThemeContextProvider>
        <body
          className={
            inter.className +
            " " +
            " text-primary bg-secondary | dark:text-secondary dark:bg-primary"
          }
        >
          <Header />
          <main>
            <div className="wrapper">{children}</div>
          </main>
          <Footer />
        </body>
      </ThemeContextProvider>
    </html>
  );
}
