'use client';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className=" py-16 px-8 sm:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Título Principal */}
        <h2 className="text-5xl font-semibold text-gray-800 mb-6">
          Conoce Más Sobre Nosotros
        </h2>

        {/* Descripción de la empresa */}
        <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          En Supermercado XYZ, nos dedicamos a ofrecerte productos frescos, de calidad y accesibles. Desde nuestra fundación, trabajamos para ofrecer una experiencia de compra que se adapte a tus necesidades.
        </p>

        {/* Sección de Imagen y Texto con flexbox */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-16">
          {/* Imagen */}
          <div className="flex-1 max-w-md rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://www.wekookmarketing.com/wp-content/uploads/2022/08/lineal-de-supermercado.jpg" 
              alt="Supermercado XYZ"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Texto Descriptivo */}
          <div className="flex-1 max-w-md">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Ofrecemos una amplia variedad de productos frescos y gourmet, garantizando la mejor calidad. Con un equipo dedicado, nos aseguramos de brindarte la mejor experiencia de compra.
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white py-3 px-8 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300"
            >
              Explora Nuestro Catálogo
            </motion.button>
          </div>
        </div>

        {/* Sección de Testimonios */}
        <div className="py-16">
          <h3 className="text-4xl font-semibold text-gray-800 text-center mb-10">
            Lo que dicen nuestros clientes
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-sm text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "Supermercado XYZ tiene los mejores productos y el servicio es excelente. ¡Me encanta comprar aquí!"
              </p>
              <span className="text-gray-800 font-semibold">Carlos Rodríguez</span>
            </div>
            <div className="max-w-sm text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "La variedad de productos y la facilidad de compra son lo mejor. ¡Recomiendo totalmente!"
              </p>
              <span className="text-gray-800 font-semibold">Ana Martínez</span>
            </div>
            <div className="max-w-sm text-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                "Siempre encuentro lo que necesito a buen precio. Un supermercado de confianza."
              </p>
              <span className="text-gray-800 font-semibold">Luis García</span>
            </div>
          </div>
        </div>

        {/* Sección de Historia, Misión, Visión y Valores */}
        <div className="max-w-7xl mx-auto text-center py-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">
            Nuestra Historia y Valores
          </h3>
          
          {/* Historia */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Nuestra Historia</h4>
            <p className="text-lg text-gray-600">
              Fundada en 2005, Supermercado XYZ ha crecido para convertirse en una referencia en la comunidad, siempre con el compromiso de ofrecer productos frescos y de calidad.
            </p>
          </div>

          {/* Visión */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Nuestra Visión</h4>
            <p className="text-lg text-gray-600">
              Ser la primera opción de compra para quienes buscan productos frescos y de calidad, siempre innovando y brindando soluciones eficaces.
            </p>
          </div>

          {/* Misión */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Nuestra Misión</h4>
            <p className="text-lg text-gray-600">
              Brindar productos frescos, saludables y de calidad, con un enfoque en la atención al cliente y una experiencia de compra cómoda y satisfactoria.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default About;
