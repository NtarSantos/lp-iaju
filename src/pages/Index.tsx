
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <BenefitsSection />
      <LeadForm />
      
      {/* WhatsApp Button - Mobile: inline, Desktop: fixed */}
      <div className="sm:hidden container mx-auto px-6 py-8">
        <WhatsAppButton />
      </div>
      <div className="hidden sm:block">
        <WhatsAppButton />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Agente de IA WhatsApp. Transformando atendimento com inteligência artificial.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
