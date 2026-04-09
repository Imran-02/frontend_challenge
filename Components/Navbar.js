"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed text-white top-0 left-0 w-full z-50  bg-black/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-xl font-semibold tracking-tight">
            Imran<span className="text-blue-600">.dev</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-200 hover:text-gray-400 transition">
              Home
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400 transition">
              Features
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400 transition">
              Pricing
            </a>
            <a href="#" className="text-gray-200 hover:text-gray-400 transition">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block" >
            <button className="px-4 py-2 rounded-lg bg-white text-black text-sm hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" >
            <button onClick={() => setOpen(!open)} >
              <div className="space-y-1 cursor-pointer">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 pb-4 space-y-3">
            <a href="#" className="block text-gray-200">Home</a>
            <a href="#" className="block text-gray-200">Features</a>
            <a href="#" className="block text-gray-200">Pricing</a>
            <a href="#" className="block text-gray-200">About</a>

            <button className="w-full mt-2 px-4 py-2 rounded-lg bg-white text-black">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}