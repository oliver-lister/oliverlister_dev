import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs";
import { useMDXComponents } from "@/app/mdx-components";
import { compile } from "@mdx-js/mdx";
import rehypeStarryNight from "rehype-starry-night";

const MDXContent = async ({ slug }: { slug: string }) => {
  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");
  const components = useMDXComponents({});

  const code = `~~~js
console.log(1)
~~~`;

  const compiledCode = await compile(code, {
    rehypePlugins: [rehypeStarryNight],
  });

  console.log(String(compiledCode));

  return <div>hi</div>;

  //   return <MDXRemote source={String(compiledCode)} components={components} />;
};

export default MDXContent;
