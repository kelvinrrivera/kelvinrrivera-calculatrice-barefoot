import IntroSection from '@/components/layout/IntroSection';
import Calculator from '@/components/calculator/Calculator';

export const metadata = {
  title: 'Calculatrice de Type de Pied | Mesurer ses pieds | Minimalistes',
  description: 'Découvrez votre type de pied avec notre calculatrice interactive. Mesurer ses pieds n\'a jamais été aussi simple pour choisir des chaussures minimalistes.',
  keywords: 'mesurer ses pieds, type de pied, chaussures minimalistes, pieds égyptien, pieds grec, pieds romain',
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <IntroSection />
      <Calculator />
    </main>
  );
}
