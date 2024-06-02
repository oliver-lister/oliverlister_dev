import Button from "@/components/Button";
import Card from "../../../../components/Card";
import { Project } from "../../page";
import { IconBrowser, IconBrandGithub } from "@tabler/icons-react";
import ProjectTag from "./ProjectTag";

export default function ProjectCard({
  title,
  imageSrc,
  tags,
  description,
  url,
  githubUrl,
}: Project) {
  return (
    <Card key={title} theme="project" imageSrc={imageSrc} imageSize={1000}>
      <div className="grid gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-xs opacity-90">{description}</p>
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
          className="border-secondary text-secondary bg-primary hover:bg-secondary hover:text-primary-400"
        >
          <IconBrandGithub />
          Code
        </Button>
      </div>
    </Card>
  );
}
