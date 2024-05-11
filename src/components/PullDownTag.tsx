"use client";
import { IconChevronDown } from "@tabler/icons-react";

function PullDownTag({ section }: { section: string }) {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(section)}
      className="animate-bounce hover:text-accent"
    >
      <IconChevronDown size="3rem" />
    </button>
  );
}

export default PullDownTag;
