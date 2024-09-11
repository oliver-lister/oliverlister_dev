import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import path from "path";
import fs from "fs";
import { useMDXComponents } from "@/app/mdx-components";

const MDXContent = async ({ slug }: { slug: string }) => {
  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");
  const components = useMDXComponents({});

  return <MDXRemote source={fileContent} components={components} />;
};

export default MDXContent;
