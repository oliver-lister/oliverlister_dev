import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavLink } from "./NavBar";
import Link from "next/link";

function DesktopNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const home = useRef<HTMLAnchorElement | null>(null);
  const about = useRef<HTMLAnchorElement | null>(null);
  const projects = useRef<HTMLAnchorElement | null>(null);
  const blog = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const menu = document.querySelector(".menu__list") as HTMLElement;

    const pathLookup = {
      "/": home.current,
      "/about": about.current,
      "/projects": projects.current,
      "/blog": blog.current,
    } as { [key: string]: HTMLAnchorElement | null };

    // Hovering line under Desktop Links
    const handleChange = (pathname: string) => {
      const active = pathLookup[pathname];
      if (active) {
        menu.style.setProperty("--underline-width", `${active.offsetWidth}px`);
        menu.style.setProperty(
          "--underline-offset-x",
          `${active.offsetLeft}px`
        );
      }
    };
    handleChange(pathname);
  }, [pathname]);

  return (
    <nav id="navigation">
      <ul className="menu__list relative grid gap-10 grid-flow-col">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              ref={
                link.ref === "home"
                  ? home
                  : link.ref === "about"
                  ? about
                  : link.ref === "projects"
                  ? projects
                  : blog
              }
              href={link.path}
              className={`menu__link select-none ${
                link.path === pathname ? "text-clip-gradient" : ""
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

export default DesktopNav;
