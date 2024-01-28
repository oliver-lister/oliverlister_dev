import Card from "@/components/Card";
import Icon from "@/components/Icon";

const projects = [
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
  {
    title: "E-Commerce Website",
    url: "",
    githubUrl: "https://www.github.com/oliver-lister",
    imageSrc: "https://picsum.photos/1000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas quisquam maiores reprehenderit distinctio numquam a enim atque error culpa.",
    tags: ["React", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="grid gap-6">
      <div className="relative inline max-w-max">
        <h2 className="text-5xl font-bold">Projects</h2>
        <span className="absolute bg-gradient w-full h-1 z-[-1]"></span>
      </div>
      <div className="grid gap-6">
        {projects.map(
          ({ title, description, url, githubUrl, imageSrc, tags }) => (
            <Card
              key={title}
              theme="project"
              imageSrc={imageSrc}
              imageSize={1000}
            >
              <div className="grid gap-2">
                <div>
                  <ul className="flex gap-x-1 text-xs">
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className="border-2 px-2 py-1 rounded-full text-[10px] border-secondary bg-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-xs opacity-90">{description}</p>
              </div>
              <div className="mt-4 flex gap-6 items-center">
                <a
                  href={url}
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
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 p-3 rounded-lg flex gap-2 items-center text-secondary border-secondary hover:bg-secondary hover:text-primary"
                >
                  <Icon icon="github" />
                  Code
                </a>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
