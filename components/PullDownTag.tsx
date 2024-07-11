"use client";
import useScroll from "../hooks/useScroll";
import { IconChevronDown } from "@tabler/icons-react";

function PullDownTag({ section }: { section: string }) {
  const { scrollTo } = useScroll();

  return (
    <button
      onClick={() => scrollTo(section)}
      className="animate-bounce hover:text-accent"
      aria-label="Pull down tag"
    >
      <IconChevronDown size="3rem" />
    </button>
  );
}

export default PullDownTag;
