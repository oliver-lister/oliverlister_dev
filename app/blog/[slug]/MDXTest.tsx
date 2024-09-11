import { compile } from "@mdx-js/mdx";
import rehypeStarryNight from "rehype-starry-night";

const MDXTest = async ({ slug }: { slug: string }) => {
  const code = `~~~js
        console.log(1)
        ~~~`;

  const compiledCode = await compile(code, {
    rehypePlugins: [rehypeStarryNight],
  });

  console.log(String(compiledCode));
  return <div>test</div>;
};

export default MDXTest;
