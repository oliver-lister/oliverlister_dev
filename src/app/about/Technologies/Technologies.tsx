"use client";

import { useState } from "react";
import { Technology } from "../page";
import Card from "@/components/Card";

export default function Technologies({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [searchText, setSearchText] = useState<string>("");

  return (
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
  );
}
