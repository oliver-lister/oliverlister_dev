import NavBar from "./NavBar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="overflow-hidden">
      <div className="wrapper flex justify-between items-center py-4 | md:py-6">
        <Link href="/">
          <h1>Oliver Lister</h1>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
