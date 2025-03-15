import { useState } from 'react';
import { FOOT_TYPES, WIDTH_CATEGORIES, VOLUME_CATEGORIES, ANKLE_CATEGORIES } from '@/lib/constants';

export default function useCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAdult, setIsAdult] = useState(true);
  const [childAge, setChildAge] = useState<number | null>(null);
  const [measurements, setMeasurements] = useState({
    footLength: '',
    toe1Length: '',
    toe2Length: '',
    toe3Length: '',
    footWidth: '',
    footVolume: '',
    ankleCircumference: '',
  });
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Navegación entre pasos
  const goToStep = (step: number) => {
    if (step < 0 || step > 4) return;
    
    if (step > currentStep && !validateStep(currentStep)) {
      return;
    }
    
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Validación de cada paso
  const validateStep = (step: number): boolean => {
    setError('');
    
    switch (step) {
      case 0: // Introducción y selección adulto/niño
        if (!isAdult && !childAge) {
          setError('Veuillez sélectionner l\'âge de l\'enfant.');
          return false;
        }
        return true;
        
      case 1: // Longueur du pied
        if (!measurements.footLength) {
          setError('Veuillez entrer la longueur de votre pied.');
          return false;
        }
        const footLength = parseFloat(measurements.footLength);
        if (isNaN(footLength) || footLength < 100 || footLength > 350) {
          setError('La longueur du pied doit être comprise entre 100 et 350 mm.');
          return false;
        }
        return true;
      
      case 2: // Forme des orteils
        if (!measurements.toe1Length || !measurements.toe2Length || !measurements.toe3Length) {
          setError('Veuillez entrer la longueur de tous les orteils.');
          return false;
        }
        
        const toe1 = parseFloat(measurements.toe1Length);
        const toe2 = parseFloat(measurements.toe2Length);
        const toe3 = parseFloat(measurements.toe3Length);
        
        if (isNaN(toe1) || isNaN(toe2) || isNaN(toe3)) {
          setError('Veuillez entrer des valeurs numériques valides.');
          return false;
        }
        return true;
        
      case 3: // Mesures de largeur, volume et cheville
        if (!measurements.footWidth || !measurements.footVolume || !measurements.ankleCircumference) {
          setError('Veuillez compléter toutes les mesures.');
          return false;
        }
        
        const width = parseFloat(measurements.footWidth);
        const volume = parseFloat(measurements.footVolume);
        const ankle = parseFloat(measurements.ankleCircumference);
        
        if (isNaN(width) || isNaN(volume) || isNaN(ankle)) {
          setError('Veuillez entrer des valeurs numériques valides.');
          return false;
        }
        return true;
        
      default:
        return true;
    }
  };

  // Actualización de las medidas introducidas
  const updateMeasurement = (name: string, value: string) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  // Cálculo de los resultados
  const calculateResults = () => {
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      return;
    }
    
    const footLength = parseFloat(measurements.footLength);
    const toe1 = parseFloat(measurements.toe1Length);
    const toe2 = parseFloat(measurements.toe2Length);
    const toe3 = parseFloat(measurements.toe3Length);
    const width = parseFloat(measurements.footWidth);
    const volume = parseFloat(measurements.footVolume);
    const ankle = parseFloat(measurements.ankleCircumference);
    
    // Determinar el tipo de pie basado en las longitudes de los dedos
    const footType = determineFootType(toe1, toe2, toe3);
    
    // Calcular índices y determinar categorías
    const widthIndex = (width / footLength) * 100;
    const widthCategory = determineWidthCategory(widthIndex, isAdult);
    
    const volumeIndex = (volume / footLength) * 100;
    const volumeCategory = determineVolumeCategory(volumeIndex, isAdult);
    
    const ankleIndex = (ankle / footLength) * 100;
    const ankleCategory = determineAnkleCategory(ankleIndex, isAdult);
    
    setResults({
      footType,
      widthCategory,
      volumeCategory,
      ankleCategory,
    });
  };

  // Lógica para determinar el tipo de pie según las longitudes de los orteils
  const determineFootType = (toe1: number, toe2: number, toe3: number) => {
    // Calcular diferencias entre dedos
    const diff12 = toe1 - toe2;
    const diff23 = toe2 - toe3;
    const absDiff12 = Math.abs(diff12);
    const absDiff23 = Math.abs(diff23);
    
    // Umbral para considerar diferencias significativas (en mm)
    const threshold = 3;
    
    if (toe1 > toe2 && toe2 > toe3 && diff12 > threshold) {
      return FOOT_TYPES.EGYPTIEN;
    } else if (toe2 > toe1 && toe1 > toe3 && absDiff12 > threshold) {
      return FOOT_TYPES.GREC;
    } else if (absDiff12 < threshold && absDiff23 < threshold) {
      return FOOT_TYPES.ROMAIN;
    } else if (toe1 > toe2 && absDiff23 < threshold) {
      return FOOT_TYPES.GERMANIQUE;
    } else if (toe2 > toe1 && toe2 > toe3 && absDiff23 > threshold) {
      return FOOT_TYPES.CELTE;
    } else {
      return FOOT_TYPES.MIXTE;
    }
  };

  // Determinar categoría de anchura
  const determineWidthCategory = (widthIndex: number, isAdult: boolean) => {
    const thresholds = isAdult 
      ? [36, 39, 42] // Para adulto: fin, moyen, large, très large
      : [39, 42, 45]; // Para niños: umbrales ajustados
    
    if (widthIndex < thresholds[0]) {
      return WIDTH_CATEGORIES.NARROW;
    } else if (widthIndex < thresholds[1]) {
      return WIDTH_CATEGORIES.MEDIUM;
    } else if (widthIndex < thresholds[2]) {
      return WIDTH_CATEGORIES.WIDE;
    } else {
      return WIDTH_CATEGORIES.VERY_WIDE;
    }
  };

  // Determinar categoría de volumen
  const determineVolumeCategory = (volumeIndex: number, isAdult: boolean) => {
    const thresholds = isAdult 
      ? [90, 100, 110]
      : [95, 105, 115];
    
    if (volumeIndex < thresholds[0]) {
      return VOLUME_CATEGORIES.LOW;
    } else if (volumeIndex < thresholds[1]) {
      return VOLUME_CATEGORIES.MEDIUM;
    } else if (volumeIndex < thresholds[2]) {
      return VOLUME_CATEGORIES.HIGH;
    } else {
      return VOLUME_CATEGORIES.VERY_HIGH;
    }
  };

  // Determinar categoría de tobillo
  const determineAnkleCategory = (ankleIndex: number, isAdult: boolean) => {
    const thresholds = isAdult 
      ? [80, 87, 95]
      : [85, 92, 100];
    
    if (ankleIndex < thresholds[0]) {
      return ANKLE_CATEGORIES.THIN;
    } else if (ankleIndex < thresholds[1]) {
      return ANKLE_CATEGORIES.MEDIUM;
    } else if (ankleIndex < thresholds[2]) {
      return ANKLE_CATEGORIES.WIDE;
    } else {
      return ANKLE_CATEGORIES.VERY_WIDE;
    }
  };

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.userName || !formData.userEmail || !formData.consent) {
      setError('Veuillez remplir tous les champs et accepter les conditions.');
      return;
    }
    
    // Validación de formato de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.userEmail)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    
    try {
      setError('');
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.userName,
          email: formData.userEmail,
          footType: results.footType.name,
          footWidth: results.widthCategory.name,
          footVolume: results.volumeCategory.name,
          ankleType: results.ankleCategory.name,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Une erreur est survenue lors de l\'inscription');
      }
      
      // Éxito: marcar como enviado y guardar en localStorage
      setIsSubmitted(true);
      setError('');
      localStorage.setItem('footCalculatorSubmitted', 'true');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setError(error.message || 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return {
    currentStep,
    isAdult,
    setIsAdult,
    childAge,
    setChildAge,
    measurements,
    updateMeasurement,
    results,
    formData,
    setFormData,
    isSubmitted,
    error,
    goToStep,
    calculateResults,
    handleSubmit,
  };
}
