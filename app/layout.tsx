import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Layout/Header/Header";
import Footer from "./_components/Layout/Footer/Footer";
import { ThemeProvider } from "next-themes";
import ModalContextProvider from "../context/ModalContext";
import ModalManager from "../components/Modal/ModalManager";
import SessionProvider from "@/components/SessionProvider";

export const defaultUrl = process.env.NEXT_URL
  ? `https://${process.env.NEXT_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Oliver Lister | Portfolio & Blog - Web Developer",
  description:
    "Welcome to my portfolio and blog! I&apos;m Oliver Lister, a web developer and creative project manager. Explore my projects, read my latest blog posts, and learn more about my journey and expertise.",
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
