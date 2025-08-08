import Link from "next/link";
import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./logo";

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
      {/* Blue Blurred Gradient */}
      <div
        className="absolute top-1/4 left-24 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00B4D852] opacity-50 blur-[300px]"
        aria-hidden="true"
      ></div>

      {/* Purple Blurred Gradient */}
      <div
        className="absolute top-1/2 right-48 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[#7D73C359] opacity-50 blur-[200px] md:top-1/4"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto max-w-7xl border-spacing-2 items-center gap-x-4 space-x-10 border-b border-gray-700 pb-8 md:flex md:place-items-start md:justify-between">
        {/* Column 1: Logo, Description, and Contact Info */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            DoubleU AI helps build the AI powered enterprise you envision, we
            design, train and customize autonomous AI workers for your business
            and brand.
          </p>

          {/* Contact Information */}
          <div className="flex items-center space-x-2 pt-4 text-sm md:pt-0">
            <Mail size={18} className="text-[#fff]" />
            <a
              href="mailto:info@doubleuai.co"
              className="transition-colors hover:text-[#7D73C3]"
            >
              info@doubleuai.co
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={18} className="text-[#fff]" />
            <span>Toronto, CA</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={18} className="text-[#fff]" />
            <span>Lagos, NG</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="pt-8 md:pt-0">
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Section */}
        <div className="pt-8 md:space-x-0 md:pt-0">
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <p className="mb-4 max-w-xs text-sm leading-relaxed">
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
      <div className="flex flex-col items-center justify-between text-sm pt-2 text-[#D0D5DD] sm:flex-row">
        <p className="mb-4 text-center sm:mb-0">
          © 2025 DoubleU AI. All rights reserved.
        </p>
        <div className="flex space-x-6 pt-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faXTwitter} size="xl" />{" "}
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#fff]"
              size="xl"
            />{" "}
            {/* LinkedIn icon */}
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#fff]"
              size="xl"
            />{" "}
            {/* LinkedIn icon */}
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {/* <Instagram size={20} className="text-[#fff]" />{" "} */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#fff]"
              size="xl"
            />
            {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}
