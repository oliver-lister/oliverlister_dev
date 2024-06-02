import Button from "@/components/Button";
import Card from "../../../../components/Card";
import { Project } from "../../page";
import { IconBrowser, IconBrandGithub } from "@tabler/icons-react";

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
        <div>
          <ul className="flex flex-wrap gap-1 text-xs">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="px-2 py-1 rounded-full text-[10px] bg-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
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
          className="border-2 p-3 rounded-lg flex gap-2 items-center text-secondary border-secondary hover:bg-secondary hover:text-primary"
        >
          <IconBrandGithub />
          Code
        </Button>
      </div>
    </Card>
  );
}
