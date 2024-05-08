"use client";

import { IconLoader } from "@tabler/icons-react";

export default function Loading() {
  return (
    <div className="hero grid items-center justify-center">
      <IconLoader size={50} className="animate-spin" />
    </div>
  );
}
