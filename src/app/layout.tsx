import '@/styles/globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Calculatrice de Type de Pied | Minimalistes',
  description: 'Découvrez votre morphologie précise pour trouver des chaussures minimalistes parfaitement adaptées à vos pieds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
