"use client";

import { motion } from "framer-motion";

interface MeasurementGuideProps {
  type: string;
}

export default function MeasurementGuide({ type }: MeasurementGuideProps) {
  const guides = {
    length: {
      title: "Mesure de la longueur",
      steps: [
        "Placez une feuille de papier contre un mur",
        "Tenez-vous debout sur la feuille, le talon touchant le mur",
        "Marquez la position du bout de votre orteil le plus long",
        "Mesurez la distance entre le mur et la marque"
      ],
      svg: (
        <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,160 Q140,120 150,100 T170,50 Q180,20 210,20 T250,50 Q270,100 280,120 T320,160" stroke="#3a7bd5" strokeWidth="4" fill="none" />
          <line x1="100" y1="180" x2="320" y2="180" stroke="#333" strokeWidth="2" />
          <line x1="100" y1="175" x2="100" y2="185" stroke="#333" strokeWidth="2" />
          <line x1="320" y1="175" x2="320" y2="185" stroke="#333" strokeWidth="2" />
          <line x1="210" y1="178" x2="210" y2="182" stroke="#333" strokeWidth="1" />
          <text x="200" y="195" textAnchor="middle" fill="#333" fontSize="14">mm</text>
        </svg>
      )
    },
    toes: {
      title: "Mesure des orteils",
      steps: [
        "Tracez le contour de votre pied sur une feuille",
        "Marquez la pointe des trois premiers orteils",
        "Mesurez la longueur de chaque orteil depuis le talon"
      ],
      svg: (
        <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,160 Q140,120 150,100 T170,50 Q180,20 210,20 T250,50 Q270,100 280,120 T320,160" stroke="#ddd" strokeWidth="4" fill="none" />
          <path d="M170,50 L170,10" stroke="#3a7bd5" strokeWidth="4" fill="none" />
          <path d="M210,20 L210,10" stroke="#3a7bd5" strokeWidth="4" fill="none" />
          <path d="M250,50 L250,10" stroke="#3a7bd5" strokeWidth="4" fill="none" />
          <circle cx="170" cy="50" r="5" fill="#3a7bd5" />
          <circle cx="210" cy="20" r="5" fill="#3a7bd5" />
          <circle cx="250" cy="50" r="5" fill="#3a7bd5" />
          <text x="170" y="30" textAnchor="middle" fill="#333" fontSize="12">1</text>
          <text x="210" y="30" textAnchor="middle" fill="#333" fontSize="12">2</text>
          <text x="250" y="30" textAnchor="middle" fill="#333" fontSize="12">3</text>
        </svg>
      )
    },
    width: {
      title: "Mesure de la largeur",
      steps: [
        "Placez votre pied sur une feuille de papier",
        "Tracez le contour du pied",
        "Mesurez la largeur à l'endroit le plus large (au niveau des métatarses)"
      ],
      svg: (
        <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,160 Q140,120 150,100 T170,50 Q180,20 210,20 T250,50 Q270,100 280,120 T320,160" stroke="#ddd" strokeWidth="4" fill="none" />
          <line x1="140" y1="120" x2="280" y2="120" stroke="#3a7bd5" strokeWidth="3" strokeDasharray="5,5" />
          <line x1="140" y1="110" x2="140" y2="130" stroke="#3a7bd5" strokeWidth="2" />
          <line x1="280" y1="110" x2="280" y2="130" stroke="#3a7bd5" strokeWidth="2" />
          <text x="210" y="110" textAnchor="middle" fill="#3a7bd5" fontSize="14">Largeur</text>
        </svg>
      )
    },
    volume: {
      title: "Mesure du volume",
      steps: [
        "Utilisez un mètre ruban souple",
        "Mesurez le périmètre du pied en diagonale depuis le talon jusqu'à la flexion (cou-de-pied)",
        "Le ruban doit être ajusté mais pas serré"
      ],
      svg: (
        <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,160 Q140,120 150,100 T170,50 Q180,20 210,20 T250,50 Q270,100 280,120 T320,160" stroke="#ddd" strokeWidth="4" fill="none" />
          <path d="M100,160 Q130,130 170,50" stroke="#3a7bd5" strokeWidth="3" strokeDasharray="5,5" fill="none" />
          <circle cx="100" cy="160" r="5" fill="#3a7bd5" />
          <circle cx="170" cy="50" r="5" fill="#3a7bd5" />
          <text x="130" y="110" textAnchor="middle" fill="#3a7bd5" fontSize="14" transform="rotate(-45,130,110)">Volume</text>
        </svg>
      )
    },
    ankle: {
      title: "Mesure de la cheville",
      steps: [
        "Utilisez un mètre ruban souple",
        "Mesurez le périmètre de la cheville à son point le plus fin",
        "Le ruban doit être ajusté mais pas serré"
      ],
      svg: (
        <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150,180 Q150,100 210,70 T270,100 Q270,180 150,180" stroke="#ddd" strokeWidth="4" fill="none" />
          <ellipse cx="210" cy="100" rx="60" ry="20" stroke="#3a7bd5" strokeWidth="3" strokeDasharray="5,5" fill="none" />
          <text x="210" y="105" textAnchor="middle" fill="#3a7bd5" fontSize="14">Cheville</text>
        </svg>
      )
    }
  };
  
  const currentGuide = guides[type as keyof typeof guides];
  
  return (
    <motion.div 
      className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="md:flex items-center gap-6">
        <div className="md:w-2/5 mb-6 md:mb-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            {currentGuide.svg}
          </motion.div>
        </div>
        
        <div className="md:w-3/5">
          <h3 className="text-lg font-semibold mb-3">{currentGuide.title}</h3>
          <ol className="list-decimal pl-5 space-y-2">
            {currentGuide.steps.map((step, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="text-gray-700"
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}
