
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "557999566997";
  const message = "Olá! Gostaria de saber mais informações sobre o Agente de IA WhatsApp.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="sm:fixed sm:bottom-6 sm:right-6 sm:z-50 w-full sm:w-14 h-14 sm:rounded-full rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 sm:animate-float flex items-center justify-center gap-2 sm:gap-0"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sm:hidden font-medium">Falar no WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
