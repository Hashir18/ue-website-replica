import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/447586797014"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white shadow-pill flex items-center justify-center transition-smooth hover:scale-110"
  >
    <MessageCircle className="h-7 w-7 fill-white" />
  </a>
);

export default WhatsAppButton;
