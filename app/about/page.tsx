import { Metadata } from "next";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies/Technologies";
import { defaultUrl } from "../layout";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "About Me - Oliver Lister | Web Developer",
  description:
    "Hi, I&apos;m Oliver Lister. I&apos;m passionate about web development and design. Learn more about my background, profishiencies, and what drives my work in this section of my site.",
};

export default function About() {
  return (
    <div className="grid">
      <AboutMe />
      <Technologies />
    </div>
  );
}
