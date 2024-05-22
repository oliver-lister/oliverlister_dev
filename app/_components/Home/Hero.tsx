import Button from "../../../components/Button";
import PullDownTag from "../../../components/PullDownTag";
import { IconArrowRight, IconFileDownload } from "@tabler/icons-react";
import Image from "next/image";

function Hero() {
  return (
    <section id="hero">
      <div className="wrapper">
        <div className="hero relative grid justify-center items-center">
          <div className="grid gap-6 justify-center items-center | md:gap-0 md:grid-cols-2">
            <div className="grid gap-6">
              <div className="text-center grid gap-2 | md:text-left">
                <p className="text-sm">Hi! I&apos;m</p>
                <h1 className="text-responsive font-bold text-clip-gradient">
                  Oliver Lister.
                </h1>
                <h2>
                  I&apos;m a <strong>frontend developer</strong> crafting
                  seamless digital experiences with code.
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
                    <IconFileDownload />
                    <div className="flex">
                      <span className="hidden | md:block">Download</span>
                      &nbsp;Resume
                    </div>
                  </span>
                </a>
                <Button
                  href="/projects"
                  className="flex gap-1 px-3 py-4 rounded-lg hover:bg-primary-900 dark:hover:bg-primary-400"
                >
                  <span className="hidden | md:block">View</span> Projects
                  <IconArrowRight />
                </Button>
              </div>
            </div>
            <div className="mx-auto md-0 | md:ml-auto md:mx-0">
              <div className="max-w-[60vw] rounded-full border-4 border-primary dark:border-secondary overflow-hidden">
                <Image
                  src="/OL_Photo.jpeg"
                  priority
                  width={300}
                  height={300}
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-center items-end">
              <PullDownTag section="blog-teaser" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
