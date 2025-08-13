"use client";

import { Logo } from "./logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "./mobile-nav";
import Link from "next/link";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Workforce", href: "/workforce" },
];

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1120px)");

  // // Split navigation items for desktop layout
  // const leftNavItems = navItems.slice(0, 3);
  // const rightNavItems = navItems.slice(3);

  return (
    <>
      {isDesktop ? (
        <nav className="fixed top-0 z-50 h-[99px] w-full border-b-[2px] border-[#FFFFFF12] bg-[#0B0A0A] px-[120px] pt-[30px] pb-[22px] text-white shadow-md">
          <div className="mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="block">
              <Logo width={120} height={40} />
            </div>

            {/* Navigation Links */}
            <div className="md:text-md hidden items-center space-x-8 text-[#E3E3E3] md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition duration-300 ease-in-out hover:text-[#7D73C3]"
                >
                  {item.name}
                </a>
              ))}

              <Link href="/contact">
                <button className="cursor-pointer rounded-[8px] bg-[#7D73C3] px-5.5 py-3.5 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:rounded-lg md:px-6 md:py-3.5 md:text-[16px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        // Mobile Navigation
        <MobileNav />
      )}
    </>
  );
}
