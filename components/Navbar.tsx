"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";
import { MdDarkMode, MdLanguage } from "react-icons/md";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Switch } from "./ui/switch";

const Navbar = () => {
  const navItems = [
    { href: "/", title: "Home" },
    { href: "#about", title: "About Us" },
    { href: "#services", title: "Services" },
    { href: "#contact", title: "Contact Us" },
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
            <Button className="lg:hidden" onClick={handleToggleNavbar}>
              <span className="sr-only">Open Main Menu</span>
              <FiMenu />
            </Button>
            <Link href="/">
              <img
                src="../assets/imgs/logo.svg"
                alt="Roya-Logo"
                className="w-36"
              />
            </Link>
          </div>

          <div
            className={cn(
              "nav lg:flex items-center justify-between w-full lg:w-auto fixed lg:static left-0 right-0 top-16 bg-bunker",
              !isOpen && "hidden"
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
          <div className="flex flex-wrap gap-5">
            <div className="actions flex flex-wrap items-center gap-2">
              <MdLanguage />
              <span className="hidden md:flex">Language</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Switch />
              <MdDarkMode />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
