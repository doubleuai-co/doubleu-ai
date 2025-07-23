"use client";
import { useState } from "react";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navItems } from "./navbar";
import Link from "next/link";
import { LogoNav } from "./logo nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-gray-700 bg-[#0B0A0A] px-6 py-[21px] shadow-sm shadow-black/50">
      {/* Logo */}
      <LogoNav />

      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="cursor-pointer pt-6" variant="trans" size="icon">
            <Image
              src="/new-img/Menu.svg"
              alt=""
              width={350}
              height={150}
              className="object-fit mb-6 object-cover"
            />
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
              <Image
                src="/new-img/Xoutline.svg"
                alt=""
                width={350}
                height={150}
                className="object-fit mb-6 object-cover"
              />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition duration-300 ease-in-out text-xl font-light text-[#A2A2A2] hover:text-[#7D73C3]"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contact"
              className="cursor-pointer rounded-md border border-[#7D73C3] bg-[#7D73C3] px-8 py-3 text-lg text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-[#9747FF] hover:text-white hover:shadow-none"
            >
              Book a Demo
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
