
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5579995666997"; // Número sem espaços e caracteres especiais
  const message = "Olá! Gostaria de saber mais informações sobre o Agente de IA WhatsApp.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;
