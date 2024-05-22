import Link from "next/link";

export default function NotFound() {
  return (
    <section
      id="not-found"
      className="mt-header wrapper grid gap-6 place-content-center text-center hero"
    >
      <h1 className="text-2xl font-bold">Error 404 | Page Not Found</h1>
      <p className="italic">Could not find requested resource</p>
      <Link href="/" className="text-accent hover:underline">
        Click Here to Return Home
      </Link>
    </section>
  );
}
