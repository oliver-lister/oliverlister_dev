import React from "react";

export interface LayoutProps {
  id: number;
  path: string;
}
const BlogPageLayout = (props: LayoutProps & { children: React.ReactNode }) => {
  return (
    <>
      <header>{props.path}</header>
      <main>{props.children}</main>
      <footer>{props.id}</footer>
    </>
  );
};

export default BlogPageLayout;
