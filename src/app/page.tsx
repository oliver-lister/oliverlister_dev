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
            <a
              className="relative p-0.5 inline-flex items-center font-bold justify-center overflow-hidden group rounded-lg select-none"
              href="/OLister_Resume.pdf"
              download="OLister_Resume.pdf"
            >
              <span className="w-full h-full bg-gradient group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative flex gap-2 p-3 transition-all ease-out text-secondary bg-primary dark:bg-primary-400 rounded-md group-hover:bg-opacity-0 duration-400">
                <Icon icon="filedownload" />
                <div className="flex">
                  <span className="hidden | md:block">Download</span>
                  &nbsp;Resume
                </div>
              </span>
            </a>
            <Link
              href="/projects"
              className="flex px-3 py-4 rounded-lg hover:bg-primary-900 dark:hover:bg-primary-400"
            >
              <span className="hidden | md:block">View&nbsp;</span>Projects
              <Icon icon="arrow" />
            </Link>
          </div>
        </div>
        <div className="mx-auto md-0 | md:ml-auto md:mx-0">
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
