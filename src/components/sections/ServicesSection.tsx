import { Card, CardContent, CardHeader } from '@/components/ui/card'

const services = [
  { title: 'Recrutamento', description: 'Identificamos os melhores talentos para sua empresa.' },
  { title: 'Seleção', description: 'Oferecemos um processo de seleção otimizado e eficaz.' },
  { title: 'Treinamento', description: 'Capacitação para talentos e equipes.' },
]

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que fazemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
