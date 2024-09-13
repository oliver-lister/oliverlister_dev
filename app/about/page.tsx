import { Metadata } from "next";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies/Technologies";

// Metadata
const title = "About Me - Oliver Lister | Web Developer";
const description =
  "Hi, I&apos;m Oliver Lister. I&apos;m passionate about web development and design. Learn more about my background, profishiencies, and what drives my work in this section of my site.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "/about",
    siteName: "Oliver Lister | Portfolio & Blog - Web Developer",
    images: ["/ol2.webp"],
  },
};

export default function About() {
  return (
    <div className="grid">
      <AboutMe />
      <Technologies />
    </div>
  );
}
