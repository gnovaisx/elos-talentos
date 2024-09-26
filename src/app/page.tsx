import ContactForm from "@/components/sections/ContactForm";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-accent text-gray-900">
      <HeroSection />
      <ServicesSection />
      <ContactForm />
    </div>
  )
}
