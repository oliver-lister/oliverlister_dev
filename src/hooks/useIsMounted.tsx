"use client";

import { useEffect, useState } from "react";

// Used for css transitions
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // On Open
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useIsMounted;
