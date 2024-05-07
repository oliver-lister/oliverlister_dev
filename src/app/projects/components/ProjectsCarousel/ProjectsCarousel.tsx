"use client";

import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { Project } from "../../page";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import { EmblaCarouselType } from "embla-carousel";

export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] xl:max-w-[calc(100vw-(100vw-1280px)-2rem)]">
          {projects.map((project, index) => (
            <div className="embla__slide flex-none min-w-0 w-full" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      {!prevBtnDisabled ? (
        <button
          className="embla__prev absolute top-[50%] left-[-1rem] rounded-full p-1 bg-primary text-secondary dark:bg-secondary dark:text-primary"
          onClick={onPrevButtonClick}
        >
          <UilAngleLeftB />
        </button>
      ) : null}
      {!nextBtnDisabled ? (
        <button
          className="embla__next absolute top-[50%] right-[-1rem] rounded-full p-1 bg-primary text-secondary dark:bg-secondary dark:text-primary"
          onClick={onNextButtonClick}
        >
          <UilAngleRightB />
        </button>
      ) : null}
    </div>
  );
}
