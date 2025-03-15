"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface EmailFormProps {
  formData: {
    userName: string;
    userEmail: string;
    consent: boolean;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
  error: string;
}

export default function EmailForm({ formData, setFormData, handleSubmit, error }: EmailFormProps) {
  const [formErrors, setFormErrors] = useState({
    userName: "",
    userEmail: "",
    consent: "",
  });
  
  const validateField = (field: string, value: string | boolean) => {
    let error = "";
    
    switch (field) {
      case "userName":
        if (!value) error = "Veuillez entrer votre prénom";
        else if (typeof value === "string" && value.length < 2) 
          error = "Le prénom doit contenir au moins 2 caractères";
        break;
        
      case "userEmail":
        if (!value) error = "Veuillez entrer votre email";
        else if (typeof value === "string" && !/^\S+@\S+\.\S+$/.test(value))
          error = "Veuillez entrer une adresse email valide";
        break;
        
      case "consent":
        if (!value) error = "Vous devez accepter les conditions";
        break;
    }
    
    setFormErrors(prev => ({ ...prev, [field]: error }));
    return !error;
  };
  
  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    validateField(field, value);
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField("userName", formData.userName);
    const isEmailValid = validateField("userEmail", formData.userEmail);
    const isConsentValid = validateField("consent", formData.consent);
    
    if (isNameValid && isEmailValid && isConsentValid) {
      handleSubmit(e);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-xl font-semibold mb-2">Recevez votre guide personnalisé</h3>
      <p className="text-gray-600 mb-6">Obtenez notre guide complet pour choisir les chaussures minimalistes parfaites pour votre type de pied.</p>
      
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="userName"
              value={formData.userName}
              onChange={(e) => handleChange("userName", e.target.value)}
              className={`w-full p-3 bg-white border ${formErrors.userName ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:border-barefoot-blue focus:ring-2 focus:ring-barefoot-blue/20 outline-none transition-all`}
              placeholder="Votre prénom"
            />
            {formErrors.userName && (
              <p className="mt-1 text-sm text-red-600">{formErrors.userName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              value={formData.userEmail}
              onChange={(e) => handleChange("userEmail", e.target.value)}
              className={`w-full p-3 bg-white border ${formErrors.userEmail ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm focus:border-barefoot-blue focus:ring-2 focus:ring-barefoot-blue/20 outline-none transition-all`}
              placeholder="votre@email.com"
            />
            {formErrors.userEmail && (
              <p className="mt-1 text-sm text-red-600">{formErrors.userEmail}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              className="w-4 h-4 text-barefoot-blue border-gray-300 rounded focus:ring-barefoot-blue"
            />
          </div>
          <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
            J'accepte de recevoir mon guide personnalisé et les conseils de Minimalistes par email. Je peux me désinscrire à tout moment.
          </label>
        </div>
        {formErrors.consent && (
          <p className="mt-1 text-sm text-red-600">{formErrors.consent}</p>
        )}
        
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-barefoot-blue text-white rounded-lg shadow-sm hover:bg-barefoot-dark transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50"
        >
          Recevoir mon guide
        </button>
      </form>
    </motion.div>
  );
}
