import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-110 z-50"
      style={{ backgroundColor: '#F77F00' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: '#FFFFFF' }} />
    </a>
  );
}
