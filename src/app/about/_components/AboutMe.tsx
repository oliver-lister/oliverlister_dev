import Image from "next/image";
import React from "react";

function AboutMe() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="grid gap-4">
        <p>
          Hey there, I&apos;m <strong>Oliver Lister</strong>, a Sydney-based
          frontend web developer with a unique backstory in music and sound.
          While I&apos;ve always had a passion for creativity, I found myself
          missing the technical challenges and problem solving that come with
          software development. That&apos;s why I&apos;ve made the exciting leap
          into the world of coding!
        </p>
        <p>
          With a plethora of knowledge in music and sound production and
          management, I bring a fresh perspective and a keen eye for detail to
          every project. From producing music compositions to overseeing
          projects end-to-end, I&apos;ve honed my skills in managing complex
          processes and delivering top-notch results.
        </p>
        <p>
          Using my experience and creativity as fuel, I&apos;m diving headfirst
          into web development. Whether it&apos;s crafting sleek interfaces or
          building dynamic applications, I&apos;m eager to learn, grow, and make
          connections.
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
  );
}

export default AboutMe;
