import Button from "@/components/Button/Button";
import { Project } from "../../page";
import { IconBrowser, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export default function ProjectCard({
  title,
  imageSrc,
  description,
  url,
  githubUrl,
}: Project) {
  return (
    <article className="relative grid rounded-xl min-h-[70vh] overflow-hidden shadow-sm shadow-primary dark:shadow-secondary">
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        ) : null}
      </div>
      <div className="mt-auto border-t p-6 backdrop-blur-md bg-primary/40 text-secondary border-secondary/40">
        <div className="grid gap-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-xs opacity-90 leading-relaxed">{description}</p>
        </div>
        <div className="mt-4 flex gap-6 items-center">
          <Button
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            variant="gradient-outline"
          >
            <IconBrowser />
            Live Demo
          </Button>
          <Button
            variant="outline"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-secondary text-secondary bg-primary hover:bg-secondary hover:text-primary"
          >
            <IconBrandGithub />
            Code
          </Button>
        </div>
      </div>
    </article>
  );
}
