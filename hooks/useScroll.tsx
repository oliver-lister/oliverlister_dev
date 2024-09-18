import { useEffect, useState } from "react";

type ScrollData = {
  scrollYPosition: number;
  scrollYDirection: "up" | "down";
  isScrolling: boolean;
  allowScroll: boolean;
};

const useScroll = () => {
  const [scroll, setScroll] = useState<ScrollData>({
    scrollYPosition: 0,
    scrollYDirection: "up",
    isScrolling: false,
    allowScroll: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScroll((prevScroll) => ({
        ...prevScroll,
        scrollYPosition: currentScrollY,
        scrollYDirection:
          currentScrollY > prevScroll.scrollYPosition ? "down" : "up",
      }));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (sectionId: string, offset?: number) => {
    try {
      const element = document.getElementById(sectionId);
      if (!element)
        throw new Error("Could not find element with sectionId: " + sectionId);
      let y = element.getBoundingClientRect().top + scroll.scrollYPosition;

      if (offset) {
        y = y + offset;
      }

      if (element && !scroll.isScrolling) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } catch (err) {
      if (err instanceof Error) console.error(err.message);
    }
  };

  const toggleAllowScroll = () => {
    setScroll((prevScroll) => ({
      ...prevScroll,
      allowScroll: !prevScroll.allowScroll,
    }));
  };

  return {
    scrollYPosition: scroll.scrollYPosition,
    scrollYDirection: scroll.scrollYDirection,
    scrollTo,
    toggleAllowScroll,
  };
};

export default useScroll;
