import GradientUnderline from "@/components/GradientUnderline";
import ProjectsCarousel from "./components/ProjectsCarousel/ProjectsCarousel";

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
      "A full-stack e-commerce store, where customers can browse a wide array of clothing products across mens, womens and kids categories.",
    tags: ["React.js", "Express.js", "Node.js"],
  },
  {
    title: "MØDA-BEYOND Fullstack E-Commerce Platform",
    url: "https://oliver-lister.github.io/moda-beyond/",
    githubUrl: "https://github.com/oliver-lister/moda-beyond",
    imageSrc: "/projects/moda-beyond.png",
    description:
      "A full-stack e-commerce store, where customers can browse a wide array of clothing products across mens, womens and kids categories.",
    tags: ["React.js", "Express.js", "Node.js"],
  },
  {
    title: "MØDA-BEYOND Fullstack E-Commerce Platform",
    url: "https://oliver-lister.github.io/moda-beyond/",
    githubUrl: "https://github.com/oliver-lister/moda-beyond",
    imageSrc: "/projects/moda-beyond.png",
    description:
      "A full-stack e-commerce store, where customers can browse a wide array of clothing products across mens, womens and kids categories.",
    tags: ["React.js", "Express.js", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section className="grid gap-6">
      <GradientUnderline>
        <h2 className="text-5xl font-bold">Projects</h2>
      </GradientUnderline>
      <div>
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}
