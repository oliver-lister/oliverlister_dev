import GradientUnderline from "../../../components/GradientUnderline";
import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <section id="about" className="wrapper mt-header grid gap-6">
      <GradientUnderline>
        <h1 className="text-5xl font-bold">About Me</h1>
      </GradientUnderline>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="grid gap-4">
          <p>
            Hi there, I&apos;m <strong>Oliver Lister</strong>, a Sydney-based
            frontend web developer and music and sound professional. While
            I&apos;ve always had a passion for creativity, I love the technical
            challenges and problem solving that come with software development.
          </p>
          <p>
            With a plethora of knowledge in music and sound production and
            management, I bring a fresh perspective and a keen eye for detail to
            every project. From producing music compositions to overseeing
            projects end-to-end, I&apos;ve honed my skills in managing complex
            processes and delivering consistent results.
          </p>
          <p>
            Whether it&apos;s crafting sleek interfaces or building dynamic
            applications, I&apos;m eager to learn, grow, and make connections.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-lg border-4 border-primary dark:border-secondary overflow-hidden">
            <Image
              src="/ol2.jpg"
              alt="Oliver Lister"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
