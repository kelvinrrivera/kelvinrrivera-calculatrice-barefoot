"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface IntroSectionProps {
  onStartCalculator: () => void;
}

export default function IntroSection({ onStartCalculator }: IntroSectionProps) {
  return (
    <section className="text-center max-w-4xl mx-auto mb-16">
      {/* Elemento decorativo en el fondo */}
      <div className="absolute top-0 right-0 -z-10 opacity-5 w-96 h-96 overflow-hidden hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-barefoot-blue">
          <path d="M20,180 C60,180 80,160 100,140 C120,120 130,100 140,60 C150,20 160,20 180,20" 
                stroke="currentColor" 
                strokeWidth="20" 
                fill="none" />
        </svg>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-barefoot-blue mb-6">
          Calculatrice de Type de Pied
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Découvrez votre morphologie précise pour trouver des chaussures minimalistes parfaitement adaptées à vos pieds.
        </p>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-barefoot-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-barefoot-blue" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Identifiez votre type de pied</h3>
          <p className="text-gray-600 text-sm">Égyptien, grec, romain ou d'autres morphologies spécifiques.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-barefoot-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-barefoot-blue" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2V9h2v8zm4 0h-2v-6h2v6zm-8 0H6v-4h2v4z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Déterminez votre largeur et volume</h3>
          <p className="text-gray-600 text-sm">Obtenez des mesures précises pour choisir des chaussures adaptées.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="w-16 h-16 bg-barefoot-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-barefoot-blue" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Recevez des recommandations</h3>
          <p className="text-gray-600 text-sm">Un guide personnalisé pour choisir les chaussures parfaites pour vos pieds.</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button
          onClick={onStartCalculator}
          className="px-8 py-4 bg-barefoot-blue text-white rounded-lg text-lg font-medium shadow-md hover:bg-barefoot-dark transform transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-barefoot-blue focus:ring-opacity-50"
        >
          Commencer la mesure
        </button>
      </motion.div>
    </section>
  );
}
