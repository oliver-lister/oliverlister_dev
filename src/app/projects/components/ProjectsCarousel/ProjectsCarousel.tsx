"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Project } from "../../page";
import ProjectCard from "./ProjectCard";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import "./styles.css";

export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) console.log(emblaApi?.slidesInView());
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project, index) => (
          <div className="embla__slide" key={index}>
            <article className="relative grid rounded-xl h-[60vh] overflow-hidden shadow-sm shadow-primary dark:shadow-secondary">
              <div className="absolute inset-0">
                <Image
                  src={"/projects/moda-beyond.png"}
                  alt="Project snapshot"
                  width={1500}
                  height={1500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-auto border-t p-6 backdrop-blur-md bg-primary/40 text-secondary border-secondary/40">
                <div className="grid gap-2">
                  <div>
                    <ul className="flex flex-wrap gap-1 text-xs">
                      <li className="px-2 py-1 rounded-full text-[10px] bg-primary">
                        tag
                      </li>
                    </ul>
                  </div>
                  <h3 className="font-bold text-xl">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-xs opacity-90">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta accusamus et magnam asperiores eaque impedit fuga
                    aspernatur quis accusantium sapiente esse iure itaque hic
                    omnis, explicabo laborum velit culpa pariatur.
                  </p>
                </div>
                <div className="mt-4 flex gap-6 items-center">
                  <a
                    href={"/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-0.5 inline-flex items-center font-bold justify-center overflow-hidden group rounded-lg"
                  >
                    <span className="w-full h-full bg-gradient group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                    <span className="relative flex gap-2 p-3 transition-all ease-out text-secondary bg-primary dark:bg-primary-400 rounded-md group-hover:bg-opacity-0 duration-400">
                      <Icon icon="browser" />
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={"/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 p-3 rounded-lg flex gap-2 items-center text-secondary border-secondary hover:bg-secondary hover:text-primary"
                  >
                    <Icon icon="github" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
        {/* <ProjectCard {...project} /> */}
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        {"<"}
      </button>
      <button className="embla__next" onClick={scrollNext}>
        {">"}
      </button>
    </div>
  );
}
