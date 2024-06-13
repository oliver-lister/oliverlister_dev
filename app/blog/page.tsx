import Button from "@/components/Button";
import GradientUnderline from "../../components/GradientUnderline";

export default function Blog() {
  return (
    <section id="blog">
      <div className="wrapper mt-header min-h-[60vh] grid gap-2">
        <GradientUnderline>
          <h1 className="text-5xl font-bold">Blog</h1>
        </GradientUnderline>
        <div className="">
          <div className="">
            <Button href="/blog/login" variant="accent">
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
