"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  // Calculate progress percentage
  const progress = (currentStep / (totalSteps - 1)) * 100;
  
  return (
    <div className="px-4 pt-6 pb-2">
      <div className="relative mb-6">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <motion.div
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-barefoot-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        
        <div className="flex justify-between -mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-white ${index <= currentStep ? 'bg-barefoot-blue text-white' : 'bg-gray-200 text-gray-600'} z-10 transition-colors`}>
                {index < currentStep ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              
              {index < totalSteps - 1 && (
                <div className="absolute top-3 -right-1/2 w-full h-0.5 bg-gray-200">
                  {index < currentStep && (
                    <motion.div
                      className="h-full bg-barefoot-blue"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
                </div>
              )}
              
              <span className="text-xs mt-2 hidden md:block">
                {index === 0 && "Préparation"}
                {index === 1 && "Longueur"}
                {index === 2 && "Orteils"}
                {index === 3 && "Largeur & Volume"}
                {index === 4 && "Résultats"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
