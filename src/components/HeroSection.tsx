
import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-whatsapp-50 via-white to-whatsapp-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-whatsapp-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-whatsapp-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-whatsapp-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Atendimento Inteligente e{" "}
              <span className="text-whatsapp-600 relative">
                24/7
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-whatsapp-300 rounded-full"></div>
              </span>{" "}
              para o seu WhatsApp
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Deixe nossa Inteligência Artificial responder dúvidas, registrar solicitações 
              e encantar seus clientes a qualquer hora do dia. Rápido, prático e sem esperas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onCtaClick}
                size="lg" 
                className="bg-whatsapp-600 hover:bg-whatsapp-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Quero uma demonstração
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-whatsapp-500 rounded-full mr-2"></div>
                Setup em menos de uma semana!
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-whatsapp-500 rounded-full mr-2"></div>
                Adiquira já o seu agente de IA!
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-whatsapp-500 rounded-full mr-2"></div>
                Suporte 24/7
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Phone mockup */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                  {/* WhatsApp interface mockup */}
                  <div className="bg-whatsapp-600 h-16 flex items-center px-4">
                    <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-medium text-sm">Atendimento IA</div>
                      <div className="text-whatsapp-200 text-xs">online</div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3 bg-gray-50 h-full">
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                      <p className="text-sm text-gray-700">Olá! Como posso ajudar você hoje?</p>
                      <span className="text-xs text-gray-400">09:30</span>
                    </div>
                    
                    <div className="bg-whatsapp-500 text-white p-3 rounded-lg shadow-sm max-w-xs ml-auto">
                      <p className="text-sm">Gostaria de saber sobre os produtos</p>
                      <span className="text-xs text-whatsapp-200">09:31</span>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                      <p className="text-sm text-gray-700">Perfeito! Temos várias opções disponíveis. Que tipo de produto você procura?</p>
                      <span className="text-xs text-gray-400">09:31</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-whatsapp-500 text-white p-3 rounded-xl shadow-lg animate-float">
                <Smartphone className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-whatsapp-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-gray-700">Respondendo...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
