"use client";

import Icon from "@/components/Icon";

export default function Loading() {
  return (
    <div className="hero grid items-center justify-center">
      <Icon icon="spinner" size="50" className="animate-spin" />
    </div>
  );
}
