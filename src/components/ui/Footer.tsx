import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link href="https://minimalistes.com" className="flex items-center">
              <svg className="h-8 w-auto text-barefoot-blue" viewBox="0 0 100 40" fill="currentColor">
                <path d="M5,20 L15,5 L25,20 M20,5 L20,35 M30,5 L40,5 L40,35 M50,5 L60,5 L65,20 L60,35 L50,35 M70,5 L80,5 L85,20 L80,35 L70,35" strokeWidth="4" stroke="currentColor" fill="none" />
              </svg>
              <span className="ml-2 text-lg font-semibold">Minimalistes</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="https://minimalistes.com/a-propos" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              À propos
            </Link>
            <Link href="https://minimalistes.com/contact" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Contact
            </Link>
            <Link href="https://minimalistes.com/mentions-legales" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Mentions légales
            </Link>
            <Link href="https://minimalistes.com/politique-de-confidentialite" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Politique de confidentialité
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Minimalistes. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
