import { useState, useEffect } from "react";

const useElementHeight = (id: string) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      setHeight(element.getBoundingClientRect().height);
    }
  }, [id]);

  return height;
};

export default useElementHeight;
