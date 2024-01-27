import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero grid items-center justify-center">
      <div className="grid gap-6 items-center | md:gap-0 md:grid-cols-2">
        <div className="grid gap-6">
          <div className="text-center grid gap-2 | md:text-left">
            <p className="text-sm">Hi! I&apos;m</p>
            <h1 className="text-6xl font-bold text-clip-gradient">
              Oliver Lister.
            </h1>
            <h2>
              I&apos;m a <strong>frontend developer</strong> crafting seamless
              digital experiences with code.
            </h2>
          </div>
          <div className="flex gap-4 justify-center items-center | md:justify-start">
            <Button theme="accent">
              <Icon icon="filedownload" />
              <span className="hidden | md:block">Download</span> CV
            </Button>
            <Link
              href="/projects"
              className="flex px-3 py-4 rounded-lg hover:bg-primary-900 dark:hover:bg-primary-400"
            >
              <span className="hidden | md:block">View&nbsp;</span>Projects
              <Icon icon="arrow" />
            </Link>
          </div>
        </div>
        <div className="mx-auto">
          <div className="rounded-full border-4 border-primary dark:border-secondary overflow-hidden bg-gradient">
            <Image
              src="/memoji-wave.png"
              priority
              width={300}
              height={300}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
