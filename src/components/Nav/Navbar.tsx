'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ToggleCart from '../Cart/ToggleCart';
import MenuResponsive from './MenuResponsive';
import MovilMenu from './MovilMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-50 shadow-lg">
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

          {/* Botón del carrito */}
          <ToggleCart />
        </div>

        {/* Menú móvil */}
        <MovilMenu
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      <MenuResponsive isMobileMenuOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
