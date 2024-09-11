import GradientUnderline from "@/components/GradientUnderline";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="blog">
      <div className="wrapper mt-header grid gap-6">
        <GradientUnderline>
          <h1 className="text-5xl font-bold">Blog</h1>
        </GradientUnderline>
        {children}
      </div>
    </section>
  );
};

export default BlogLayout;
