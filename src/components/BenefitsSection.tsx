
import { Clock, Zap, Settings } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Seu negócio sempre disponível para atender, mesmo fora do horário comercial.",
      color: "text-whatsapp-600",
      bgColor: "bg-whatsapp-100"
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas", 
      description: "Acabe com as filas e a insatisfação. Soluções na hora para seus clientes.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Settings,
      title: "Automação Eficiente",
      description: "Reduza a carga da sua equipe e os custos operacionais com um atendimento automatizado.",
      color: "text-purple-600", 
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nosso{" "}
            <span className="text-whatsapp-600">Agente de IA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme o atendimento do seu negócio com tecnologia de ponta que nunca para de trabalhar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats or additional info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {index === 0 && (
                    <div className="text-2xl font-bold text-whatsapp-600">24h</div>
                  )}
                  {index === 1 && (
                    <div className="text-2xl font-bold text-blue-600">&lt;10s</div>
                  )}
                  {index === 2 && (
                    <div className="text-2xl font-bold text-purple-600">-70%</div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">
                    {index === 0 && "Disponibilidade"}
                    {index === 1 && "Tempo de resposta"}
                    {index === 2 && "Redução de custos"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional social proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-whatsapp-600 mr-2">98%</span>
              <span className="text-sm">Satisfação dos clientes</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-whatsapp-600 mr-2">+30%</span>
              <span className="text-sm">Empresas usam.</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-whatsapp-600 mr-2">20%+</span>
              <span className="text-sm">Hoje dos atendimentos são com IAs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
