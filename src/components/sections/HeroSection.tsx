import { Link } from "lucide-react"

const HeroSection = () => {
  return (
    // <section className="relative min-h-screen hero-bg">
    <section className="hero-bg">
      <div className="flex flex-col justify-center items-center h-full text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Conectando Talentos e Empresas</h1>
        <p className="text-lg max-w-2xl mb-8">
          A Elos é especializada em recrutamento e seleção, ajudando empresas a encontrar os melhores talentos e candidatos a encontrar as melhores oportunidades.
        </p>
        <div className="flex space-x-4">
          <Link href="#contact">
            <button className="px-6 py-3 bg-primary text-white rounded-full">Entre em Contato</button>
          </Link>
          <Link href="#services">
            <button className="px-6 py-3 bg-secondary text-white rounded-full">Nossos Serviços</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
