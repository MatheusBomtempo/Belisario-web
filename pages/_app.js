import '../styles/globals.css';
import { Inter } from 'next/font/google'; // Importa a fonte Inter do Google

// Configurando a fonte Inter com diferentes pesos
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Defina os pesos que você quer usar
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
