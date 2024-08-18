import GradientUnderline from "@/components/GradientUnderline";
import AuthState from "../_components/Layout/Header/AuthState/AuthState";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="blog">
      <div className="wrapper mt-header grid gap-6">{children}</div>
    </section>
  );
};

export default BlogLayout;
