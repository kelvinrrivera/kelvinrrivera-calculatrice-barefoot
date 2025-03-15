"use client";

import { motion } from "framer-motion";
import MeasurementGuide from "./MeasurementGuide";

interface InputConfig {
  name: string;
  label: string;
  value: string;
}

interface FootMeasurementProps {
  title: string;
  description: string;
  inputName?: string;
  value?: string;
  multipleInputs?: InputConfig[];
  onChange: (name: string, value: string) => void;
  goToStep: (step: number) => void;
  currentStep: number;
  onFinalStep?: () => void;
  error: string;
}

export default function FootMeasurement({
  title,
  description,
  inputName,
  value,
  multipleInputs,
  onChange,
  goToStep,
  currentStep,
  onFinalStep,
  error
}: FootMeasurementProps) {
  const handleNext = () => {
    if (currentStep === 3 && onFinalStep) {
      onFinalStep();
    }
    goToStep(currentStep + 1);
  };
  
  const getGuideImage = (step: number) => {
    switch (step) {
      case 1:
        return "length";
      case 2:
        return "toes";
      case 3:
        return inputName === "footWidth" ? "width" : 
               inputName === "footVolume" ? "volume" : "ankle";
      default:
        return "length";
    }
  };
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
        <p className="text-gray-600 text-center mb-8">{description}</p>
      </motion.div>
      
      <MeasurementGuide type={getGuideImage(currentStep)} />
      
      <motion.div
        className="mt-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {inputName && !multipleInputs ? (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Longueur du pied :
            </label>
            <div className="relative">
              <input
                type="number"
                min="100"
                max="350"
                value={value}
                onChange={(e) => onChange(inputName, e.target.value)}
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg shadow-sm focus:border-barefoot-blue focus:ring-2 focus:ring-barefoot-blue/20 outline-none transition-all"
                placeholder="Ex: 265"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                mm
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500">Entrez une valeur entre 100 et 350 mm</p>
          </div>
        ) : (
          multipleInputs && (
            <div className="space-y-6">
              {multipleInputs.map((input) => (
                <div key={input.name} className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    {input.label} :
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="100"
                      max="350"
                      value={input.value}
                      onChange={(e) => onChange(input.name, e.target.value)}
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg shadow-sm focus:border-barefoot-blue focus:ring-2 focus:ring-barefoot-blue/20 outline-none transition-all"
                      placeholder="Ex: 265"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                      mm
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </motion.div>
      
      {error && (
        <motion.div
          className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}
      
      <div className="mt-10 flex justify-between">
        <button
          onClick={() => goToStep(currentStep - 1)}
          className="px-6 py-3 border border-barefoot-blue text-barefoot-blue rounded-lg hover:bg-barefoot-blue/5 transition-all focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50"
        >
          Retour
        </button>
        
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-barefoot-blue text-white rounded-lg shadow-sm hover:bg-barefoot-dark transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50"
        >
          {currentStep === 3 ? "Voir mes résultats" : "Continuer"}
        </button>
      </div>
    </div>
  );
}
