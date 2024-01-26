import Link from "next/link";

export default function SocialsNav() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="">Github</Link>
        </li>
        <li>
          <Link href="">LinkedIn</Link>
        </li>
      </ul>
    </nav>
  );
}
