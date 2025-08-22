import Link from "next/link";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./logo";
import Image from "next/image";

// Define footer links similar to navItems for reusability and clarity
export const footerQuickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Workforce", href: "/workforce" },
  { name: "Terms and Condition", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    // Main footer container with a subtle gradient background
    <footer className="relative w-full overflow-hidden bg-[#0B0A0A] px-6 py-12 pt-14 pb-8 text-gray-300 md:px-[120px] lg:pt-18">
      <Image
               src="/footer.svg"
               alt=""
               layout="fill"
               objectFit="cover"
               quality={100}
               className="-z-0"
             />
     
      {/* Blue Blurred Gradient */}
      {/* <div
        className="absolute top-1/4 left-90 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#00B4D852] opacity-50 blur-[300px]"
        aria-hidden="true"
      ></div> */}

      {/* Purple Blurred Gradient */}
      {/* <div
        className="absolute top-1/2 right-90 h-[600px] w-[800px] translate-x-1/2 rounded-full bg-[#7D73C359] opacity-40 blur-[200px] md:top-0"
        aria-hidden="true"
      ></div> */}

      <div className="relative md:pb-14 container mx-auto max-w-7xl border-spacing-2 items-center gap-x-4 space-x-10 border-b border-gray-700 pb-8 md:flex md:place-items-start md:justify-between">
        {/* Column 1: Logo, Description, and Contact Info */}
        <div className="flex flex-col space-y-3">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <p className="max-w-xs text-sm md:text-[16px] leading-relaxed pb-4">
            DoubleU AI helps build the AI powered enterprise you envision, we
            design, train and customize autonomous AI workers for your business
            and brand.
          </p>

          {/* Contact Information */}
          <div className="flex items-center space-x-2 pt-4 text-sm md:text-[16px] md:pt-0">
            <Mail size={18} className="text-[#fff]" />
            <a
              href="mailto:info@doubleuai.co"
              className="transition-colors hover:text-[#7D73C3]"
            >
              info@doubleuai.co
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-[16px]">
            <MapPin size={18} className="text-[#fff]" />
            <span>Toronto, CA</span>
          </div>
          <div className="flex items-center space-x-2 text-sm md:text-[16px]">
            <MapPin size={18} className="text-[#fff]" />
            <span>Lagos, NG</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="pt-8 md:pt-0">
          <h3 className="mb-4 text-sm md:text-[18px] font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.name} className="py-1">
                <Link
                  href={link.href}
                  className="text-sm md:text-[16px] cursor-pointer hover:text-[#7D73C3]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Section */}
        <div className="pt-8 md:space-x-0 md:pt-0">
          <h3 className="mb-4 text-sm md:text-[18px] font-semibold text-white">Contact</h3>
          <p className="mb-4 max-w-[18rem] text-sm md:text-[16px] leading-relaxed m">
            Have any feedback or questions? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="py-2 text-[#00B4D8] underline decoration-[#00B4D8] decoration-solid decoration-1 transition duration-300 ease-in-out hover:text-[#fff]"
            passHref
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Section: Copyright and Social Icons */}
      <div className="relative flex flex-col items-center justify-between text-sm md:text-[16px] pt-2 text-[#D0D5DD] sm:flex-row">
        <p className="mb-4 text-center sm:mb-0">
          © 2025 DoubleU AI. All rights reserved.
        </p>
        <div className="flex space-x-6 pt-4">
          <a
            href="https://x.com/doubleuai_"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/doubleu-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#fff]"
              size="lg"
            />{" "}
            {/* LinkedIn icon */}
          </a>
          <a
            href="https://www.instagram.com/doubleuai.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {/* <Instagram size={20} className="text-[#fff]" />{" "} */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#fff]"
              size="lg"
            />
            {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
