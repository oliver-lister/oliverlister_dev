"use client";

import Button from "@/components/Button/Button";
import { IconLayoutDashboard, IconUser } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/blog/dashboard",
    label: "Dashboard",
    icon: <IconLayoutDashboard />,
  },
  {
    href: "/blog/dashboard/user",
    label: "User",
    icon: <IconUser />,
  },
];

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-start gap-2 divide divide-x-[1px]">
      {links.map(({ href, label, icon }) => (
        <Button
          key={label}
          href={href}
          variant="link"
          className={`${pathname === href ? "text-accent" : ""}`}
        >
          {icon}
          {label}
        </Button>
      ))}
    </nav>
  );
};

export default Navlinks;
