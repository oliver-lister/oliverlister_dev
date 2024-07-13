import { NavLink } from "./NavBar";
import Link from "next/link";

function MobileNav({
  links,
  toggleMobileMenu,
}: {
  links: NavLink[];
  toggleMobileMenu: () => void;
}) {
  return (
    <nav
      id="navigation"
      className="w-full h-screen fixed inset-0"
    >
      <ul className="h-full text-center grid place-content-center gap-20 text-3xl bg-secondary text-primary | dark:bg-primary dark:text-secondary">
        {links.map((link) => (
          <li
            key={link.path}
            className="active:scale-95 transition-transform duration-100"
          >
            <Link href={link.path} onClick={toggleMobileMenu} className="">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
