import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <section className="grid items-center justify-center">
      <div className="grid gap-6 items-center | md:gap-0 md:grid-cols-2">
        <div className="grid gap-6">
          <div className="text-center grid gap-2 | md:text-left">
            <p className="text-sm">Hi! I&apos;m</p>
            <h1 className="text-6xl font-bold">Oliver Lister.</h1>
            <h2>
              I&apos;m a <strong>frontend developer</strong> crafting seamless
              digital experiences with code.
            </h2>
          </div>
          <div className="flex gap-4 justify-center | md:justify-start">
            <Button>Contact Me</Button>
            <Button>View Projects</Button>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src="https://picsum.photos/1000"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
