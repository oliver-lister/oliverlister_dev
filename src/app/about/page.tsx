import Card from "@/components/Card";

const technologies = [
  {
    title: "HTML",
    imageSrc: "/logos/html.svg",
    shadowClr: "E34F26",
  },
  {
    title: "CSS",
    imageSrc: "/logos/css.svg",
    shadowClr: "1A73BA",
  },
  {
    title: "Javascript",
    imageSrc: "/logos/javascript.svg",
    shadowClr: "F0DB4F",
  },
  {
    title: "React",
    imageSrc: "/logos/react.svg",
    shadowClr: "61DAFB",
  },
  {
    title: "Next.js",
    imageSrc: "/logos/next-js.svg",
    shadowClr: "000000",
  },
  {
    title: "TailwindCSS",
    imageSrc: "/logos/tailwindcss.svg",
    shadowClr: "15C6B8",
  },
  {
    title: "Github",
    imageSrc: "/logos/github.svg",
    shadowClr: "5C6BC0",
  },
];

export default function About() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-6">
        <div className="relative">
          <h2 className="text-5xl font-bold">About Me</h2>
          <span className="absolute bg-gradient w-[225px] h-1"></span>
        </div>
        <div className="grid md:grid-cols-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, dolor
            cum? Maiores laudantium quidem quos cum unde alias architecto libero
            optio. Explicabo facere iure labore cum ullam nulla, odit, beatae
            dolorem distinctio aperiam pariatur. Nam totam at placeat odio alias
            cumque, est voluptatibus adipisci laboriosam ratione voluptate
            doloribus, eius ipsa iure dolores eveniet atque minima pariatur
            illum ad? Mollitia nemo inventore modi et doloremque ducimus
            necessitatibus, facere iusto quibusdam consequuntur assumenda
            pariatur tempore dolore? Pariatur maiores consequatur sapiente nobis
            veniam quis fugiat praesentium, ea voluptate cumque totam delectus
            at quas mollitia ipsa voluptatem voluptates necessitatibus ab!
            Dolore explicabo impedit sapiente voluptatibus esse quis accusamus,
            eum dolorem. Explicabo recusandae illo vero possimus facere sunt
            error enim quam aut excepturi, hic unde, repellendus iusto
            consectetur assumenda architecto eum corporis at, et quis delectus.
            Velit, nisi. Voluptas, eius iure. Maiores et porro quae sit,
            voluptatum quibusdam, facere, illum tenetur eum reprehenderit
            cumque. Ab earum, veritatis voluptas aliquam explicabo id a
            aspernatur numquam illo nisi quaerat cumque totam voluptates ipsum
            assumenda! Consectetur iste dicta vel ut optio tempora ab alias
            porro dolore corrupti. Voluptates excepturi aspernatur nemo
            perferendis inventore unde labore provident quas amet corrupti,
            praesentium ad tenetur sequi ullam quidem deserunt quos impedit.
          </p>
        </div>
      </section>
      <section className="grid gap-6">
        <div>
          <h2 className="text-5xl font-bold text-center">Technologies</h2>
        </div>
        <div className="grid grid-cols-1 justify-items-center items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, index) => {
            return (
              <Card
                key={tech.title}
                theme="technology"
                imageSrc={tech.imageSrc}
                imageSize={100}
                shadowClr={tech.shadowClr}
              >
                {tech.title}
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
