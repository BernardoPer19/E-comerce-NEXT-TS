import Link from "next/link";

function MenuResponsive({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
    return (
      <>
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
      </>
    );
  }
  
  export default MenuResponsive;
  