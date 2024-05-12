"use client";

import { useState } from "react";
import Card from "@/components/Card";

const technologies = [
  {
    title: "HTML",
    imageSrc: "/logos/html.svg",
    shadowClr: "E34F26",
  },
  {
    title: "CSS",
    imageSrc: "/logos/css.svg",
    shadowClr: "1A73BA",
  },
  {
    title: "Javascript",
    imageSrc: "/logos/javascript.svg",
    shadowClr: "F0DB4F",
  },
  {
    title: "React.js",
    imageSrc: "/logos/react.svg",
    shadowClr: "61DAFB",
  },
  {
    title: "Node.js",
    imageSrc: "/logos/nodejs.svg",
    shadowClr: "60AF46",
  },
  {
    title: "Express.js",
    imageSrc: "/logos/express.svg",
    shadowClr: "000000",
  },
  {
    title: "Next.js",
    imageSrc: "/logos/next-js.svg",
    shadowClr: "000000",
  },
  {
    title: "Typescript",
    imageSrc: "/logos/typescript.svg",
    shadowClr: "007ACC",
  },
  {
    title: "MongoDB",
    imageSrc: "/logos/mongodb.svg",
    shadowClr: "599636",
  },
  {
    title: "Redux Toolkit",
    imageSrc: "/logos/redux.svg",
    shadowClr: "764ABC",
  },
  {
    title: "TailwindCSS",
    imageSrc: "/logos/tailwindcss.svg",
    shadowClr: "15C6B8",
  },
  {
    title: "Mantine",
    imageSrc: "/logos/mantine.svg",
    shadowClr: "339AF0",
  },
  {
    title: "JSON Web Token (JWT)",
    imageSrc: "/logos/jwt.svg",
    shadowClr: "FB015B",
  },
  {
    title: "Github",
    imageSrc: "/logos/github.svg",
    shadowClr: "5C6BC0",
  },
  {
    title: "Vite",
    imageSrc: "/logos/vitejs.svg",
    shadowClr: "FFCB1F",
  },
  {
    title: "Vitest",
    imageSrc: "/logos/vitest.svg",
    shadowClr: "729B1B",
  },
  {
    title: "React Testing Library",
    imageSrc: "/logos/react-testing-library.svg",
    shadowClr: "EE3B39",
  },
  {
    title: "Figma",
    imageSrc: "/logos/figma.svg",
    shadowClr: "0ACF83",
  },
  {
    title: "Stripe",
    imageSrc: "/logos/stripe.svg",
    shadowClr: "238AD0",
  },
];

type Technology = {
  title: string;
  imageSrc: string;
  shadowClr: string;
};

export default function Technologies() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section id="technlogies">
      <div className="wrapper grid gap-6">
        <div className="relative grid items-center justify-center">
          <span className="absolute top-6 z-[-1] h-[1px] w-full bg-primary dark:bg-secondary"></span>
          <h2 className="text-4xl font-semibold bg-secondary px-6 dark:bg-primary">
            Technologies
          </h2>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchText(e.currentTarget.value)}
            placeholder="Search technologies..."
            aria-label="Search Technologies"
            className="w-full p-2 border-2 border-primary/40 bg-secondary rounded-lg dark:bg-primary dark:border-secondary/40"
          />
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies
            .filter((tech) =>
              tech.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((tech, index) => (
              <Card
                key={tech.title}
                theme="technology"
                imageSrc={tech.imageSrc}
                imageSize={100}
                shadowClr={tech.shadowClr}
              >
                {tech.title}
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
