"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Project } from "../../page";
import ProjectCard from "./ProjectCard";
import { useCallback } from "react";

export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative" ref={emblaRef}>
      <div className="embla__container flex">
        {projects.map((project, index) => (
          <div className="embla__slide ml-6 min-w-fit" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <button
        className="embla__prev absolute top-[50%] left-2 p-2 bg-black rounded-full"
        onClick={scrollPrev}
      >
        {"<"}
      </button>
      <button
        className="embla__next absolute top-[50%] right-2 p-2 bg-black rounded-full"
        onClick={scrollNext}
      >
        {">"}
      </button>
    </div>
  );
}
