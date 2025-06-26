import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, CheckCircle2, ArrowLeft } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Enviando dados para o webhook:", formData);
      
      const response = await fetch("https://n8n-n8n.ain39p.easypanel.host/webhook-test/3a573bb6-5e52-4b94-bc8e-b42465d40c2e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          email: formData.email,
          timestamp: new Date().toISOString(),
          origem: "Landing Page WhatsApp AI"
        }),
      });

      console.log("Dados enviados para o webhook");
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });
      setIsSubmitted(true);
      
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Ocorreu um erro de conectividade. Verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNewRequest = () => {
    setIsSubmitted(false);
    setFormData({
      nome: "",
      telefone: "",
      email: ""
    });
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-gradient-to-br from-whatsapp-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-whatsapp-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-whatsapp-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Obrigado pelo interesse!
                </h3>
                <p className="text-gray-600 mb-6">
                  Recebemos sua solicitação e entraremos em contato em breve para agendar sua demonstração personalizada.
                </p>
                <div className="bg-whatsapp-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-whatsapp-700">
                    <strong>Próximos passos:</strong><br />
                    1. Análise do seu negócio<br />
                    2. Demonstração personalizada<br />
                    3. Configuração gratuita
                  </p>
                </div>
                <Button
                  onClick={handleNewRequest}
                  variant="outline"
                  className="w-full h-12 border-whatsapp-200 text-whatsapp-600 hover:bg-whatsapp-50 font-semibold rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Nova solicitação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-whatsapp-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Form */}
            <div>
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-whatsapp-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-whatsapp-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Solicite uma Demonstração
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Veja na prática como nosso agente de IA pode transformar seu atendimento
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                        Nome completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-200 focus:border-whatsapp-500 focus:ring-whatsapp-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-200 focus:border-whatsapp-500 focus:ring-whatsapp-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-gray-200 focus:border-whatsapp-500 focus:ring-whatsapp-500"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-whatsapp-600 hover:bg-whatsapp-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        "Quero uma demonstração"
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500">
                      Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Benefits recap */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  O que você receberá:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-whatsapp-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Demonstração Personalizada</h4>
                      <p className="text-gray-600 text-sm">Veja o sistema funcionando com exemplos do seu segmento</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-whatsapp-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Análise Gratuita</h4>
                      <p className="text-gray-600 text-sm">Avaliação de como otimizar seu atendimento atual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-whatsapp-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proposta Personalizada</h4>
                      <p className="text-gray-600 text-sm">Plano sob medida para as necessidades do seu negócio</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-whatsapp-50 p-6 rounded-xl">
                <h4 className="font-semibold text-whatsapp-800 mb-2">🚀 Oferta Especial</h4>
                <p className="text-whatsapp-700 text-sm">
                  Setup gratuito para os primeiros 50 cadastros este mês. 
                  Economize R$ 497 na implementação!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
