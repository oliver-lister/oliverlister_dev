"use client";

import Button from "@/components/Button/Button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    console.error(error.digest);
  }, [error]);

  return (
    <section
      id="error"
      className="mt-header wrapper grid gap-6 place-content-center text-center hero"
    >
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="italic">You've encountered an error.</p>
      <p>Error: {error.message}</p>
      <Button
        variant="accent"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
      <Link href="/" className="text-accent hover:underline">
        Click Here to Return Home
      </Link>
    </section>
  );
}
