import { useMDXComponents } from "@/mdx-components";
import * as runtime from "react/jsx-runtime";
import { run, compile } from "@mdx-js/mdx";
import path from "path";
import fs from "fs";

const MDXContent = async ({ slug }: { slug: string }) => {
  const components = useMDXComponents({});

  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  // Compile the MDX source code to a function body
  const code = String(
    await compile(fileContent, { outputFormat: "function-body" })
  );
  // @ts-expect-error
  const { default: MDXContent } = await run(code, runtime);

  return <MDXContent components={components} />;
};

export default MDXContent;
