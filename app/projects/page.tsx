import { Metadata } from "next";
import GradientUnderline from "../../components/GradientUnderline";
import { defaultUrl } from "../layout";
import ProjectsCarousel from "./_components/ProjectsCarousel/ProjectsCarousel";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Projects - Oliver Lister | Web Developer",
  description:
    "Check out my portfolio of web development projects. From interactive web applications to stunning designs, I showcase how I bring ideas to life.",
};

export type Project = {
  title: string;
  url: string;
  githubUrl: string;
  imageSrc: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "MØDA-BEYOND Fullstack E-Commerce Platform",
    url: "https://oliver-lister.github.io/moda-beyond/",
    githubUrl: "https://github.com/oliver-lister/moda-beyond",
    imageSrc: "/projects/moda-beyond.png",
    description:
      "A full-stack e-commerce store, where customers can browse a wide array of clothing products across mens, womens and kids categories. Users can easily create an account, assemble their shopping cart, and securely process payments through the Stripe API, collecting shipping information along the way.",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mantine",
      "JWT",
      "Stripe API",
      "Vitest",
      "React Testing Library",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrapper mt-header grid gap-6">
        <GradientUnderline>
          <h1 className="text-5xl font-bold">Projects</h1>
        </GradientUnderline>
        <div>
          <ProjectsCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
}
