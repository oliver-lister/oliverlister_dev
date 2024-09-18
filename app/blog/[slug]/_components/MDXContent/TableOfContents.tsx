"use client";

import Button from "@/components/Button/Button";
import useElementHeight from "@/hooks/useElementHeight";
import useScroll from "@/hooks/useScroll";
import { IconMap } from "@tabler/icons-react";

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
  const { scrollTo } = useScroll();
  const headerHeight = useElementHeight("header");

  return (
    <nav
      id="toc"
      className="sticky border-accent border-2 rounded-lg shadow-md overflow-hidden"
      style={{ top: headerHeight + 16 }}
    >
      <div className="bg-gradient flex items-center gap-2 px-4 py-2 border-b-2 border-accent text-secondary">
        <IconMap />
        <h2 className="font-semibold text-lg uppercase">Table of Contents</h2>
      </div>
      <div className="bg-accent-100 dark:bg-accent-900 px-4 py-2">
        <ol className="list-none">
          {toc.map((item) => (
            <li key={item.id} className="text-lg">
              <Button
                onClick={() => scrollTo(String(item.id), -headerHeight - 16)}
                className="relative hover:text-accent hover:underline"
              >
                {item.value}
              </Button>
              {item.children && (
                <ol className="list-none">
                  {item.children.map((child) => (
                    <li key={child.id} className="text-sm pl-4">
                      <Button
                        onClick={() =>
                          scrollTo(String(child.id), -headerHeight - 16)
                        }
                        className="hover:text-accent hover:underline"
                      >
                        {child.value}
                      </Button>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default TableOfContents;
