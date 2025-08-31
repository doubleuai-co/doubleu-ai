"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navItems } from "./navbar";
import Link from "next/link";
import { LogoNav } from "./logo nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#0B0A0A] px-6 py-[21px] shadow-sm shadow-black/50">
      {/* Logo */}
      <LogoNav />
      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="cursor-pointer pt-6" variant="trans" size="icon">
            {/*             <Image
              src="/new-img/Menu.svg"
              alt=""
              width={350}
              height={150}
              className="object-fit mb-6 object-cover"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-screen bg-[#0B0A0A]">
          <div className="flex items-center justify-between bg-[#0B0A0A] px-[21px] py-6">
            <LogoNav />
            <Button
              className="cursor-pointer pt-6"
              variant="trans"
              size="icon"
              onClick={() => setOpen(false)}
            >
              {/*               <Image
                src="/new-img/Xoutline.svg"
                alt=""
                width={350}
                height={150}
                className="object-fit mb-6 object-cover"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-md font-light transition duration-300 ease-in-out hover:text-[#7D73C3] ${
                  isActiveLink(item.href) ? "text-[#7D73C3]" : "text-[#A2A2A2]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-md cursor-pointer rounded-md border border-[#7D73C3] bg-[#7D73C3] px-8 py-2 text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-[#9747FF] hover:text-white hover:shadow-none"
            >
              <span className="-mt-4">Contact Us</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
