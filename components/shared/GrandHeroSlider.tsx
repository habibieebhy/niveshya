"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Using high-quality Unsplash placeholders for the "grand business" feel
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Corporate buildings
    heading: "Financial Clarity.",
    subheading: "Niveshya Advisory",
    description: "Navigate complex markets with crystal-clear strategies designed for your unique goals."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop", // Accounting/Charts
    heading: "Business Growth.",
    subheading: "Corporate Excellence",
    description: "Scalable accounting, compliance, and outsourced finance operations for ambitious enterprises."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // Handshake/Meeting
    heading: "Long-Term Wealth.",
    subheading: "Generational Success",
    description: "Personalized investment planning and wealth management built entirely around your future."
  }
];

export default function GrandHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with slight zoom effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-105"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }} 
          />
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background/90 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-5xl mx-auto text-white">
            <div className={`transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wider uppercase mb-6">
                {slide.subheading}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
                {slide.heading}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light drop-shadow">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Controls (Hidden by default, show on hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-white" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}