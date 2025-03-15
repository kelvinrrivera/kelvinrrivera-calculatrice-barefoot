"use client";

import { motion } from "framer-motion";
import { FaChild, FaUser } from "react-icons/fa";

interface AgeSelectionProps {
  isAdult: boolean;
  setIsAdult: (isAdult: boolean) => void;
  childAge: number | null;
  setChildAge: (age: number | null) => void;
  goToStep: (step: number) => void;
  error: string;
}

export default function AgeSelection({
  isAdult,
  setIsAdult,
  childAge,
  setChildAge,
  goToStep,
  error,
}: AgeSelectionProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Comment mesurer vos pieds</h2>
        <p className="text-gray-600 mb-6">Pour obtenir des mesures précises, suivez ces conseils :</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-barefoot-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-barefoot-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">Mesurer en fin de journée</h3>
            <p className="text-gray-600 text-center text-sm">Les pieds ont tendance à gonfler légèrement pendant la journée.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-barefoot-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-barefoot-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 22H7C5.89543 22 5 21.1046 5 20V11H19V20C19 21.1046 18.1046 22 17 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 11L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 11L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-center mb-2">En position debout</h3>
            <p className="text-gray-600 text-center text-sm">Prenez les mesures en ét
