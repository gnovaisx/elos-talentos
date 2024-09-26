import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const ContactForm = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
        <form className="max-w-lg mx-auto">
          <Input type="text" placeholder="Nome" className="mb-4" />
          <Input type="email" placeholder="E-mail" className="mb-4" />
          <textarea
            className="w-full p-4 text-gray-800 rounded-md"
            placeholder="Sua mensagem"
            rows={5}
          />
          <Button className="mt-6 w-full">Enviar</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
