import { usePathname } from "next/navigation";
import { NavLink } from "./NavBar";
import Link from "next/link";

const activePathStyles = "text-clip-gradient";

function MobileNav({
  links,
  toggleMobileMenu,
}: {
  links: NavLink[];
  toggleMobileMenu: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      id="navigation"
      className="w-full h-screen fixed inset-0 bg-secondary dark:bg-primary"
    >
      <ul className="wrapper grid items-center place-content-center justify-start h-full gap-10 text-5xl text-primary dark:text-secondary">
        {links.map((link) => (
          <li
            key={link.path}
            className="active:scale-95 transition-transform duration-100"
          >
            <Link
              href={link.path}
              onClick={toggleMobileMenu}
              className={`menu__link select-none ${
                link.path === pathname
                  ? activePathStyles
                  : pathname.includes(link.path) && link.path !== "/"
                  ? activePathStyles
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
