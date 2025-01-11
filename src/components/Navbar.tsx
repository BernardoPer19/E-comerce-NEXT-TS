"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX,  } from 'react-icons/hi'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-50 shadow-lg ">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">
          <Link href="/">MiTienda</Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Productos
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Acerca de
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Contacto
          </Link>
          <div className="relative">
            <button className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
              <i className="fas fa-shopping-cart"></i> 
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6 text-gray-800" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 px-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Productos
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Acerca de
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
