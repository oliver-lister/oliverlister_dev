import { useMDXComponents } from "@/mdx-components";
import * as runtime from "react/jsx-runtime";
import { run, compile } from "@mdx-js/mdx";
import path from "path";
import fs from "fs";
import rehypeHighlight from "rehype-highlight";
import "@/app/highlight.css";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { visit } from "unist-util-visit";
import Link from "next/link";

const MDXContent = async ({ slug }: { slug: string }) => {
  const components = useMDXComponents({});

  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  // Compile the MDX source code to a function body
  const file = await compile(fileContent, {
    outputFormat: "function-body",
    rehypePlugins: [
      rehypeSlug,
      withToc,
      withTocExport,
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
  });

  // extract table of contents from file.data property
  const toc = file.data.toc || [];

  // @ts-expect-error
  const { default: MDXComponent } = await run(String(file), runtime);

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="grid gap-6 col-span-2">
        <MDXComponent components={components} />
      </div>
      <aside className="hidden lg:block h-full">
        <nav className="sticky top-0 bg-zinc-300 dark:bg-zinc-700 p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg text-accent uppercase">
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside">
            {toc.map((item) => (
              <li key={item.id} className="text-lg pl-2">
                <Link href={`#${item.id}`}>{item.value}</Link>
                {item.children && (
                  <ol className="list-decimal list-inside">
                    {item.children.map((child) => (
                      <li key={child.id} className="text-sm pl-4">
                        <Link href={`#${child.id}`}>{child.value}</Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </div>
  );
};

export default MDXContent;
