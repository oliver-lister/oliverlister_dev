import Link from "next/link";
import React from "react";

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

type Toc = Array<TocEntry>;

type TOCProps = {
  toc: Toc;
};

const TableOfContents: React.FC<TOCProps> = ({ toc }) => {
  console.log(toc);
  return (
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
  );
};

export default TableOfContents;
