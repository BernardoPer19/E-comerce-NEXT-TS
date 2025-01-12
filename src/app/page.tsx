'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function LandingPage() {
  return (
    <div className=" text-gray-800 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center px-6 sm:px-12 py-16"
      >
        {/* Titulo Principal */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Descubre los productos que necesitas a diario
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-75">
          Ofrecemos lo mejor en calidad y precios. ¡Explora y aprovecha nuestras ofertas exclusivas ahora!
        </p>

        {/* Botón CTA */}
        <Link href="/products">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white py-4 px-10 rounded-full shadow-xl hover:bg-teal-700 transition-all duration-300"
          >
            Ver Productos
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default LandingPage;
