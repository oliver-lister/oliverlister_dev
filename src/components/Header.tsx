import NavBar from "./NavBar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-secondary-800 shadow dark:bg-primary-400 dark:shadow-secondary/10">
      <div className="wrapper flex justify-between items-center py-4 | md:py-6">
        <Link href="/">
          <p className="italic text-4xl font-bold text-clip-gradient">O.L</p>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
