import { useMDXComponents } from "@/mdx-components";
import * as runtime from "react/jsx-runtime";
import { run, compile } from "@mdx-js/mdx";
import path from "path";
import fs from "fs";
import rehypeHighlight from "rehype-highlight";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import "@/app/highlight.css";
import { visit } from "unist-util-visit";

const MDXContent = async ({ slug }: { slug: string }) => {
  const components = useMDXComponents({});

  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  // Compile the MDX source code to a function body
  const code = String(
    await compile(fileContent, {
      outputFormat: "function-body",
      rehypePlugins: [
        // Retrieve raw code from snippet before syntax hightlighting and pass to <pre> tag
        () => (tree) => {
          visit(tree, (node) => {
            if (node.type === "element" && node.tagName === "pre") {
              const [codeEl] = node.children;

              if (codeEl.tagName !== "code") return;
              node.properties["raw"] = codeEl.children?.[0].value;
            }
          });
        },
        rehypeHighlight,
        rehypeMdxCodeProps,
      ],
    })
  );
  // @ts-expect-error
  const { default: MDXComponent } = await run(code, runtime);

  return <MDXComponent components={components} />;
};

export default MDXContent;
