"use client";

interface StepNavigationProps {
  currentStep: number;
  goToStep: (step: number) => void;
  isLastStep: boolean;
  onFinalStep?: () => void;
}

export default function StepNavigation({ 
  currentStep, 
  goToStep, 
  isLastStep,
  onFinalStep 
}: StepNavigationProps) {
  const handleNext = () => {
    if (isLastStep && onFinalStep) {
      onFinalStep();
    } else {
      goToStep(currentStep + 1);
    }
  };
  
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={() => goToStep(currentStep - 1)}
        className="px-6 py-3 border border-barefoot-blue text-barefoot-blue rounded-lg hover:bg-barefoot-blue/5 transition-all focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50"
      >
        Retour
      </button>
      
      <button
        type="button"
        onClick={handleNext}
        className="px-6 py-3 bg-barefoot-blue text-white rounded-lg shadow-sm hover:bg-barefoot-dark transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-barefoot-blue/50"
      >
        {isLastStep ? "Voir mes résultats" : "Continuer"}
      </button>
    </div>
  );
}
