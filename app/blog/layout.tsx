import GradientUnderline from "@/components/GradientUnderline";
import AuthState from "../_components/Layout/Header/AuthState/AuthState";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="blog">
      <div className="wrapper mt-header grid gap-2">
        <div>
          <GradientUnderline>
            <h1 className="text-5xl font-bold">Blog</h1>
          </GradientUnderline>
        </div>
        {children}
      </div>
    </section>
  );
};

export default BlogLayout;
