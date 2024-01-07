"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact", cta: true },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-3 px-[7%] bg-black text-white">
      <div className="flex justify-between">
        <span className="flex items-center">
          <div className="rounded-[20%] text-center bg-white mr-2">
            {/* Use Image component here if needed */}
            <img
              src="/logo-full.png"
              className="mx-auto"
              width={50}
              alt="Logo"
            />
          </div>
          <h5 className="font-bold">Ekmabyte</h5>
        </span>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="lg:hidden fixed top-16 left-0 right-0 bg-black flex flex-col items-center space-y-2 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  className="hover:text-gray-300"
                  href={link.href}
                  onClick={toggleMobileMenu}
                >
                  {link.cta ? (
                    <Button className="bg-transparent" variant={"outline"}>
                      {link.name}
                    </Button>
                  ) : (
                    link.name
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <a className="hover:text-gray-300" href={link.href}>
                {link.cta ? (
                  <Button className="bg-transparent" variant={"outline"}>
                    {link.name}
                  </Button>
                ) : (
                  link.name
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
