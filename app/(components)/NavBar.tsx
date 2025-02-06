"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu } from "lucide-react";
import Logo from "@/public/images/logo.svg";

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
    <header className="w-full h-[64px] shadow-sm bg-white">
      <div className="max-w-screen-xl flex m-auto items-center h-full px-4 relative">
        <div className="flex flex-1 justify-start items-center gap-4 relative">
          <Link href="/" className="md:hidden">
            <Menu />
          </Link>
          <Link href="/" className="hidden md:block max-w-64">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <Link
          href="/"
          className="block md:hidden max-w-64 absolute left-1/2 -translate-x-1/2"
        >
          <Image src={Logo} alt="Logo" />
        </Link>
        <nav className="hidden md:block">
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
      </div>
    </header>
  );
};

export default NavBar;
