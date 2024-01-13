"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navItems = [
    { href: "/", title: "Home" },
    { href: "/about-us", title: "About Us" },
    { href: "/features", title: "Features" },
    { href: "/solution", title: "Solution" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;
  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar sticky top-0 py-4 text-white z-50 bg-bunker">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-5">
            <Link href="/">
              <img
                src="../assets/imgs/logo.svg"
                alt="Roya-Logo"
                className="w-36"
              />
            </Link>
            <Button className="lg:hidden" onClick={handleToggleNavbar}>
              <span className="sr-only">Open Main Menu</span>
              <FiMenu />
            </Button>
          </div>

          <div
            className={cn(
              "nav flex items-center justify-between w-full lg:w-auto fixed lg:static left-0 right-0 top-16",
              isOpen && "hidden"
            )}
          >
            <div className="mx-auto">
              <ul className="flex flex-col lg:flex-row items-center gap-5">
                {navItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <li
                      className={cn(
                        "cursor-pointer p-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-[#f7bd91] to-[#EE7214] rounded-md",
                        isActive(item.href) &&
                          "text-transparent bg-clip-text bg-gradient-to-b from-[#f7bd91] to-[#EE7214]"
                      )}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="actions flex flex-wrap items-center gap-2">
            <MdLanguage />
            <span>Language</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
