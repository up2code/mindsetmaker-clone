"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Take Action", href: "/take-action" },
  {
    name: "Resource & Services",
    href: "/resource-and-services",
  },
  { name: "Events", href: "/events" },
  { name: "About Us", href: "/about-us" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between h-[46px] items-center px-10 py-8 shadow-sm">
      <div>
        <Link href="/">
          <Image src="/images/logo.svg" width={240} height={400} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-around gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={clsx({
                  "text-blue-600": pathname === link.href,
                  "opacity-70 transition-opacity duration-300 hover:opacity-100":
                    pathname != link.href,
                })}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
