"use client";

import { useState } from "react";
import TechnologyCard from "./TechnologyCard";

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

export type Technology = {
  title: string;
  imageSrc: string;
  shadowClr: string;
};

export default function Technologies() {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section id="technlogies" className="bg-zinc-300 dark:bg-zinc-700">
      <div className="wrapper grid gap-6">
        <div className="grid items-center justify-center">
          <h2 className="text-4xl font-semibold text-primary dark:text-secondary">
            Technologies
          </h2>
        </div>
        <div className="grid gap-1">
          <label htmlFor="search-technologies" className="text-sm">
            Search Technologies
          </label>
          <input
            id="search-technologies"
            type="text"
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className="border-2 py-2 px-3 text-md rounded-lg border-primary bg-zinc-100 text-primary | dark:border-secondary dark:bg-zinc-400"
          />
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies
            .filter((tech) =>
              tech.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((tech) => (
              <TechnologyCard
                key={tech.title}
                imageSrc={tech.imageSrc}
                shadowClr={tech.shadowClr}
                title={tech.title}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
