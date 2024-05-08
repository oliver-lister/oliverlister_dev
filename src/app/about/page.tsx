import GradientUnderline from "@/components/GradientUnderline";
import AboutMe from "./_components/AboutMe";
import Technologies from "./_components/Technologies";

export default function About() {
  return (
    <div className="grid gap-6">
      <section className="grid gap-6">
        <GradientUnderline>
          <h2 className="text-5xl font-bold">About Me</h2>
        </GradientUnderline>
        <AboutMe />
      </section>
      <Technologies />
    </div>
  );
}
