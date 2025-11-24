import Rodapé from '@/Componentes/public/Footer';
import Header from '@/Componentes/public/Header';
import { AuthProvider } from '@/cotexts/AuthContextUser';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <Header />
            <main>
              {children}
            </main>
          <Rodapé />
        </AuthProvider>
      </body>
    </html>
  );
}