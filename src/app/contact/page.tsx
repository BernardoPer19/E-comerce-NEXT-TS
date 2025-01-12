"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="bg-white py-24 px-6 sm:px-12 flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Contáctanos
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Si tienes alguna pregunta, sugerencia o solicitud, no dudes en ponerte en contacto con nosotros. Estamos siempre listos para ayudarte. Completa el formulario a continuación o visita nuestra tienda física.
        </p>
        
        {/* Ubicación */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
          <p className="text-gray-600 mb-4">
            Visítanos en nuestra ubicación central para obtener los productos más frescos, y disfruta de un excelente servicio.
          </p>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0300164262474!2d-99.15309018502677!3d19.43260797923106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fe4a46a26b43%3A0x649e4e3d0600878a!2sSupermercado%20XYZ!5e0!3m2!1ses!2smx!4v1625817440341!5m2!1ses!2smx"
            loading="lazy"
          ></iframe>
        </div>

        {/* Formulario de contacto */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Formulario de Contacto</h3>
          <form className="space-y-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-left text-gray-800">Nombre</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Ingresa tu nombre"
                className="p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-left text-gray-800">Correo Electrónico</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Ingresa tu correo electrónico"
                className="p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="message" className="text-left text-gray-800">Mensaje</label>
              <textarea 
                id="message" 
                rows={3
                    }
                placeholder="Escribe tu mensaje"
                className="p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex justify-center">
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
