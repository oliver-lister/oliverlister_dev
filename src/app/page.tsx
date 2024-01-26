import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Link from "next/link";

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
            <Button className="flex gap-2">
              <Icon icon="filedownload" />
              Download CV
            </Button>
            <Button>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto">
          <Image src="/memoji-wave.png" width={300} height={300} alt="Avatar" />
        </div>
      </div>
    </section>
  );
}
