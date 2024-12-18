import Button from "@/components/Button/Button";
import PullDownTag from "@/components/PullDownTag";
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
                <h2 className="text-md">
                  I&apos;m a <strong>software engineer</strong> crafting
                  seamless digital experiences with code.
                </h2>
              </div>
              <div className="flex gap-4 justify-center items-center | md:justify-start">
                <Button
                  variant="gradient-outline"
                  href="/OLister_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="OLister_Resume.pdf"
                >
                  <IconFileDownload size={18} />
                  <div>
                    <span className="hidden | md:inline">Download</span> Resume
                  </div>
                </Button>
                <Button variant="outline" href="/projects">
                  <div>
                    <span className="hidden | md:inline">View</span> Projects
                  </div>
                  <IconArrowRight />
                </Button>
              </div>
            </div>
            <div className="relative mx-auto md-0 | md:ml-auto md:mx-0">
              <div className="hero-img border-wobble rounded-full border-4 border-primary dark:border-secondary overflow-hidden">
                <Image
                  src="/ol_headshot.webp"
                  priority
                  width={1000}
                  height={1000}
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
