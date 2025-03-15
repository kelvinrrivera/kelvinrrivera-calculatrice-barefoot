"use client";

import { motion } from "framer-motion";
import EmailForm from "./EmailForm";
import { FOOT_TYPES, WIDTH_CATEGORIES, VOLUME_CATEGORIES, ANKLE_CATEGORIES } from "@/lib/constants";

interface ResultsProps {
  results: {
    footType: typeof FOOT_TYPES.EGYPTIEN;
    widthCategory: typeof WIDTH_CATEGORIES.MEDIUM;
    volumeCategory: typeof VOLUME_CATEGORIES.MEDIUM;
    ankleCategory: typeof ANKLE_CATEGORIES.MEDIUM;
  };
  formData: {
    userName: string;
    userEmail: string;
    consent: boolean;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function Results({ results, formData, setFormData, handleSubmit, error }: ResultsProps) {
  if (!results) return null;
  
  const { footType, widthCategory, volumeCategory, ankleCategory } = results;
  
  const categories = [
    {
      title: "Type de pied",
      value: footType.name,
      description: footType.description,
      icon: footType.icon,
    },
    {
      title: "Largeur du pied",
      value: widthCategory.name,
      description: widthCategory.description,
      icon: widthCategory.icon,
    },
    {
      title: "Volume du pied",
      value: volumeCategory.name,
      description: volumeCategory.description,
      icon: volumeCategory.icon,
    },
    {
      title: "Type de cheville",
      value: ankleCategory.name,
      description: ankleCategory.description,
      icon: ankleCategory.icon,
    },
  ];
  
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-1">Vos résultats</h2>
        <p className="text-gray-600 text-center mb-8">Voici les caractéristiques de vos pieds basées sur vos mesures.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4" dangerouslySetInnerHTML={{ __html: category.icon }} />
              <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
              <div className="text-xl font-bold text-barefoot-blue mb-2">{category.value}</div>
              <p className="text-gray-600 text-sm text-center">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <EmailForm 
          formData={formData} 
          setFormData={setFormData} 
          handleSubmit={handleSubmit} 
          error={error} 
        />
      </motion.div>
    </div>
  );
}
