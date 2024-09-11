import { compile } from "@mdx-js/mdx";
import rehypeStarryNight from "rehype-starry-night";

const MDXContent = async ({ slug }: { slug: string }) => {
  const code = `~~~js
console.log(1)
~~~`;

  const compiledCode = await compile(code, {
    rehypePlugins: [rehypeStarryNight],
  });

  console.log(String(compiledCode));

  return <div>hi</div>;
};

export default MDXContent;
