import React from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

interface MovilMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

function MovilMenu({ isMobileMenuOpen, toggleMobileMenu }: MovilMenuProps) {
  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <HiX className="h-6 w-6 text-gray-800" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>
    </>
  );
}

export default MovilMenu;
