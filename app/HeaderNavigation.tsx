"use client";

import { usePathname } from "next/navigation";
import { navigationItems } from "./foundationData";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-4 lg:flex">
      {navigationItems.map(([label, href]) => (
        <a
          className={
            isActiveRoute(pathname, href)
              ? "nav-link nav-link-active"
              : "nav-link"
          }
          href={href}
          key={href}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
