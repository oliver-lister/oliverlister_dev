import GradientUnderline from "@/components/GradientUnderline";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies";

export default function About() {
  return (
    <div className="wrapper mt-header">
      <div className="grid gap-6">
        <section id="about" className="grid gap-6">
          <GradientUnderline>
            <h1 className="text-5xl font-bold">About Me</h1>
          </GradientUnderline>
          <AboutMe />
        </section>
        <Technologies />
      </div>
    </div>
  );
}
