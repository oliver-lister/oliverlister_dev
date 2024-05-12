"use client";

import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
};

function useViewport() {
  const [viewport, setViewport] = useState(getWindowDimensions());

  useEffect(() => {
    const handleWidthandHeightChange = () => {
      setViewport(getWindowDimensions());
    };

    window.addEventListener("resize", handleWidthandHeightChange);

    return () => {
      window.removeEventListener("resize", handleWidthandHeightChange);
    };
  }, []);

  return viewport;
}

export default useViewport;
