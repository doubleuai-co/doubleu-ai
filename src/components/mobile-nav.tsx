"use client";
import { useState } from "react";
import { Menu, XIcon } from 'lucide-react';

import { Logo } from "./logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { navItems } from "./navbar";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 border-b border-gray-700 flex w-full items-center justify-between bg-[#0B0A0A] px-6 py-[21px] shadow-md shadow-black/50">
      {/* Logo */}
      <Logo />

      {/* Mobile Menu Trigger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent md:hidden"
          >
            <Menu size={48} className="text-[#fff]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-screen">
          <div className="flex items-center justify-between bg-[#0B0A0A] px-[21px] py-6">
            <Logo />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <XIcon size={48} className="text-[#fff]"/>
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-6 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 px-8 py-6 cursor-pointer rounded-full border border-[#7D73C3] bg-[#7D73C3] text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-white hover:text-[#1E2A47] hover:shadow-none">
              Book a Demo
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
