"use client";

import { Logo } from "./logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "./mobile-nav";

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
        <nav className="h-[99px] w-full flex items-center justify-between border-b-[2px] border-[#FFFFFF12] bg-[#0B0A0A] px-[120px] py-2 text-white shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="mx-12 flex items-center justify-center">
              <Logo width={160} height={40} />
            </div>

            {/* Navigation Links */}
            <div className="hidden items-center space-x-8 md:flex text-[#E3E3E3] md:text-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition duration-300 ease-in-out hover:text-[#7D73C3]"
                >
                  {item.name}
                </a>
              ))}
              <a 
              href="/contact"
              className="rounded-lg bg-[#7D73C3] px-6 py-3 text-md text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF]">
                Contact Us
              </a>
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
