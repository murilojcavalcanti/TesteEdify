import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Sua Biblioteca Online',
  description: 'Gerenciador de Livros Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main className="min-h-screen items-center py-8 bg-slate-100">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
