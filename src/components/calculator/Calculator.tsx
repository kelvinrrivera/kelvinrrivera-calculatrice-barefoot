'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCalculator from '@/hooks/useCalculator';
import ProgressBar from './ProgressBar';
import AgeSelection from './AgeSelection';
import FootMeasurement from './FootMeasurement';
import Results from './Results';
import EmailForm from './EmailForm';
import ThankYouMessage from '@/components/layout/ThankYouMessage';

export default function Calculator() {
  const [isVisible, setIsVisible] = useState(false);
  const calculator = useCalculator();
  
  useEffect(() => {
    // Retrasa la aparición de la calculadora para que sea visible después de hacer clic en "comenzar"
    setIsVisible(true);
  }, []);
  
  // Si la calculadora aún no está visible, no renderizar nada
  if (!isVisible) return null;
  
  // Determinar el contenido según el paso actual
  const renderStepContent = () => {
    switch (calculator.currentStep) {
      case 0:
        return <AgeSelection {...calculator} />;
      case 1:
        return <FootMeasurement 
          title="Longueur du pied" 
          description="Mesurez la distance entre votre talon et le bout de votre orteil le plus long."
          inputName="footLength"
          value={calculator.measurements.footLength}
          onChange={(value) => calculator.updateMeasurement('footLength', value)}
          {...calculator}
        />;
      case 2:
        return <FootMeasurement 
          title="Forme des orteils" 
          description="Mesurez la longueur des trois premiers orteils depuis le talon."
          multipleInputs={[
            { name: 'toe1Length', label: '1er orteil', value: calculator.measurements.toe1Length },
            { name: 'toe2Length', label: '2ème orteil', value: calculator.measurements.toe2Length },
            { name: 'toe3Length', label: '3ème orteil', value: calculator.measurements.toe3Length },
          ]}
          onChange={(name, value) => calculator.updateMeasurement(name, value)}
          {...calculator}
        />;
      case 3:
        return <FootMeasurement 
          title="Largeur et volume du pied" 
          description="Mesurez la largeur, le volume et la cheville de votre pied."
          multipleInputs={[
            { name: 'footWidth', label: 'Largeur du pied', value: calculator.measurements.footWidth },
            { name: 'footVolume', label: 'Périmètre du cou-de-pied', value: calculator.measurements.footVolume },
            { name: 'ankleCircumference', label: 'Tour de cheville', value: calculator.measurements.ankleCircumference },
          ]}
          onChange={(name, value) => calculator.updateMeasurement(name, value)}
          onFinalStep={() => calculator.calculateResults()}
          {...calculator}
        />;
      case 4:
        return calculator.isSubmitted 
          ? <ThankYouMessage /> 
          : <Results results={calculator.results} onSubmit={calculator.handleSubmit} {...calculator} />;
      default:
        return null;
    }
  };
  
  return (
    <motion.div 
      className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProgressBar currentStep={calculator.currentStep} totalSteps={5} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={calculator.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8"
        >
          {renderStepContent()}
        </motion.div>
      </AnimatePresence>
      
      {calculator.error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
          {calculator.error}
        </div>
      )}
    </motion.div>
  );
}
