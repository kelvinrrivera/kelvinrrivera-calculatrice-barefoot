"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouMessage() {
  return (
    <motion.div
      className="text-center py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
        </svg>
      </motion.div>
      
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Merci !
      </motion.h2>
      
      <motion.p 
        className="text-xl text-gray-600 mb-2 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Votre guide personnalisé a été envoyé à votre adresse email.
      </motion.p>
      
      <motion.p 
        className="text-gray-500 mb-8 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        N'oubliez pas de consulter votre boîte de réception (et vos spams) pour découvrir nos recommandations.
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="https://minimalistes.com/chaussures" className="px-6 py-3 bg-barefoot-blue text-white rounded-lg shadow-sm hover:bg-barefoot-dark transition-all hover:shadow-md">
          Découvrir les chaussures recommandées
        </Link>
        
        <Link href="https://minimalistes.com/blog" className="px-6 py-3 border border-barefoot-blue text-barefoot-blue rounded-lg hover:bg-barefoot-blue/5 transition-all">
          Visiter notre blog
        </Link>
      </motion.div>
    </motion.div>
  );
}
