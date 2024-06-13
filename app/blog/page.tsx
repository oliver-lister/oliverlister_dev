import GradientUnderline from "../../components/GradientUnderline";
import AuthState from "./_components/AuthState/AuthState";

export default function Blog() {
  return (
    <section id="blog">
      <div className="wrapper mt-header min-h-[60vh] grid gap-2">
        <div className="flex justify-between items-center h-min">
          <GradientUnderline>
            <h1 className="text-5xl font-bold">Blog</h1>
          </GradientUnderline>
          <AuthState />
        </div>
      </div>
    </section>
  );
}
