"use client";

import Button from "@/components/Button/Button";
import { IconChevronUp } from "@tabler/icons-react";
import React from "react";

const ScrollToTop = () => {
  return (
    <Button
      variant="accent"
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      Back To The Top
      <IconChevronUp />
    </Button>
  );
};

export default ScrollToTop;
