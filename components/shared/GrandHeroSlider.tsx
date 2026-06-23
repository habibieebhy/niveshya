"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

const slides = [
  {
    id: 3, 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
    heading: "Financial Clarity.",
    subheading: "NIVESHYA ADVISORY",
    description: "Navigate complex markets with crystal-clear strategies designed for your unique goals.",
    taglinePre: "Managing Today.",
    taglineGold: "Growing Tomorrow.",
    ctaText: "Explore Our Divisions", 
    ctaHash: "#financial-paths",
    showLogo: true // <-- Tells the component to render the large logo on this specific slide!
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", 
    heading: "Long-Term Wealth.",
    subheading: "Wealth Advisory",
    description: "Personalised Investment Planning and Insurance Solutions designed to help you build, protect and grow your wealth entirely around your future goals"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop", 
    heading: "Managing Your Accounts",
    subheading: "Accounting Services",
    description: "Scalable accounting, taxation, compliance, and outsourced bookkeeping services for MSMEs, Proprietorships, Partnership firms and Professional Consultants helping businesses stay compliant, efficient and growth-focused."
  }
];

export default function GrandHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-105"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }} 
          />
          
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-background/90 via-black/50 to-transparent" />

          {/* Increased max-w to 7xl to give the text and logo room to breathe on desktop */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto text-white">
            
            <div className={`flex flex-col md:flex-row items-center justify-between w-full gap-12 transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              
              {/* Text Column (Dynamically sizes based on whether a logo is present) */}
              <div className={`flex flex-col ${slide.showLogo ? 'w-full md:w-1/2' : 'w-full max-w-2xl'}`}>
                <div className="self-start">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-transparent border border-[#d4af37]/60 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-6">
                    {slide.subheading}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg font-serif">
                  {slide.heading}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light drop-shadow mb-6">
                  {slide.description}
                </p>

                {(slide.taglinePre || slide.taglineGold) && (
                  <p className="text-xl md:text-2xl font-medium tracking-wide mb-8">
                    <span className="text-white">{slide.taglinePre}</span>{" "}
                    <span className="text-[#d4af37]">{slide.taglineGold}</span>
                  </p>
                )}
                
                {slide.ctaText && slide.ctaHash && (
                  <div className="animate-fade-in-up mt-4 self-start">
                    <a 
                      href={slide.ctaHash}
                      className="inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg font-bold text-black bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                    >
                      {slide.ctaText}
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </a>
                  </div>
                )}
              </div>

              {/* Logo Column (Only renders if slide.showLogo is true) */}
              {slide.showLogo && (
                <div className="hidden md:flex w-full md:w-1/2 justify-end items-center">
                  <img 
                    src="/logo.png" 
                    alt="Niveshya Advisory Large Logo" 
                    // Using w-full with a generous max-width so it looks massive but stays proportionate
                    className="w-full max-w-[450px] lg:max-w-[550px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      ))}

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-[#d4af37]" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}