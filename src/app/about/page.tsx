"use client";

import Card from "@/components/Card";
import Image from "next/image";
import { useState } from "react";

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
    title: "React",
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
];

export default function About() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="grid gap-6">
      <section className="grid gap-6">
        <div className="relative inline max-w-max">
          <h2 className="text-5xl font-bold">About Me</h2>
          <span className="absolute bg-gradient w-full h-1 z-[-1]"></span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <p>
              Hey there, I&apos;m <strong>Oliver Lister</strong>, a Sydney-based
              frontend web developer with a unique backstory in music and sound.
              While I&apos;ve always had a passion for creativity, I found
              myself missing the technical challenges and problem solving that
              come with software development. That&apos;s why I&apos;ve made the
              exciting leap into the world of coding!
            </p>
            <p>
              With a plethora of knowledge in music and sound production and
              management, I bring a fresh perspective and a keen eye for detail
              to every project. From producing music compositions to overseeing
              projects end-to-end, I&apos;ve honed my skills in managing complex
              processes and delivering top-notch results.
            </p>
            <p>
              Using my experience and creativity as fuel, I&apos;m diving
              headfirst into web development. Whether it&apos;s crafting sleek
              interfaces or building dynamic applications, I&apos;m eager to
              learn, grow, and make connections.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg border-4 border-primary dark:border-secondary overflow-hidden bg-gradient">
              <Image
                src="/OL_Photo.jpeg"
                alt="Oliver Lister"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6">
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
            className="w-full p-2 border-2 border-primary/40 bg-secondary rounded-sm dark:bg-primary dark:border-secondary/40"
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
      </section>
    </div>
  );
}
