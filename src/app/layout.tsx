import Navbar from '@/components/layout/Navbar'
import './globals.css'

export const metadata = {
  title: 'Elos Talentos',
  description: 'Somos especialistas em recrutamento e seleção de talentos.',
  openGraph: {
    title: 'Elos Talentos',
    description: 'Conectando empresas e profissionais qualificados.',
    url: 'https://www.elostalentos.com.br',
    siteName: 'Elos Talentos',
    images: [
      {
        url: 'https://www.elostalentos.com.br/imagem-og.jpg', // Substitua pela imagem correta
        width: 800,
        height: 600,
        alt: 'Elos Talentos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
