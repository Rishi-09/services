"use client"; 

import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="fixed top-0 inset-x-0 w-full md:w-9/12 mx-auto z-50 px-4 md:px-0">
      <nav className="w-full py-3 md:py-4 bg-amber-50/10 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-4xl mt-4 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6">
          {/* temporary Logo */}
          <Link href="/" className="font-bold text-white text-lg tracking-tighter">
            Tales<span className="text-red-500/50">FM</span>
          </Link>

          {/*  links */}
          <div className="hidden md:flex gap-4">
            <Link href="/services" className="rounded-full px-4 py-2 text-gray-200 hover:bg-amber-50 hover:text-black transition-all duration-300">
              Services
            </Link>
            <Link href="/about" className="rounded-full px-4 py-2 text-gray-200 hover:bg-amber-50 hover:text-black transition-all duration-300">
              About
            </Link>
          </div>
          {/* Hamburger Menu  */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-center gap-4 py-6 border-t border-white/5 mt-3">
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-amber-50">Services</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-amber-50">About</Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;