import { useMDXComponents } from "@/mdx-components";
import * as runtime from "react/jsx-runtime";
import { run, compile } from "@mdx-js/mdx";
import rehypeHighlight from "rehype-highlight";
import "@/app/highlight.css";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { visit } from "unist-util-visit";
import PostSidebar from "./PostSidebar/PostSidebar";

const PostBody = async ({ fileContent }: { fileContent: string }) => {
  // Compile the MDX source code to a function body
  const parsedFile = await compile(fileContent, {
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
  const toc = parsedFile.data.toc || [];

  // @ts-expect-error
  const { default: MDXComponent } = await run(String(parsedFile), runtime);

  const components = useMDXComponents({});

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="grid gap-6 col-span-2">
        <MDXComponent components={components} />
      </div>
      <PostSidebar toc={toc} />
    </div>
  );
};

export default PostBody;
