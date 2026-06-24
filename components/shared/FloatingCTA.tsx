import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="#contact"
      aria-label="Contact Us"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 hover:shadow-xl md:bottom-10 md:right-10"
    >
      <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Optional: Subtle Ping Animation behind the button to draw attention */}
      <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-20"></span>
    </a>
  );
}