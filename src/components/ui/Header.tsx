import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="https://minimalistes.com" className="flex items-center">
            <svg className="h-8 w-auto text-barefoot-blue" viewBox="0 0 100 40" fill="currentColor">
              <path d="M5,20 L15,5 L25,20 M20,5 L20,35 M30,5 L40,5 L40,35 M50,5 L60,5 L65,20 L60,35 L50,35 M70,5 L80,5 L85,20 L80,35 L70,35" strokeWidth="4" stroke="currentColor" fill="none" />
            </svg>
            <span className="ml-2 text-xl font-semibold">Minimalistes</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="https://minimalistes.com/chaussures" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Chaussures
            </Link>
            <Link href="https://minimalistes.com/guide" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Guide
            </Link>
            <Link href="https://minimalistes.com/blog" className="text-gray-600 hover:text-barefoot-blue transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
