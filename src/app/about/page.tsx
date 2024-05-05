import GradientUnderline from "@/components/GradientUnderline";
import AboutMe from "./AboutMe/AboutMe";
import Technologies from "./Technologies/Technologies";

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

export type Technology = {
  title: string;
  imageSrc: string;
  shadowClr: string;
};

export default function About() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-6">
        <GradientUnderline>
          <h2 className="text-5xl font-bold">About Me</h2>
        </GradientUnderline>
        <AboutMe />
      </section>
      <Technologies technologies={technologies} />
    </div>
  );
}
