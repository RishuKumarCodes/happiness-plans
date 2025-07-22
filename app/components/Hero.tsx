"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "Hero1.jpg",
      alt: "Azores green landscape with ocean view",
    },
    {
      image: "Hero2.jpg",
      alt: "Beautiful beach destination",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className=" h-[calc(100vh-70px)] flex items-center overflow-hidden">
      <div className=" relative w-[calc(100%-20px)] h-[calc(100%-10px)] m-auto mt-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-white min-h-[100%]">
          <div className="m-[3vw]">
            <div className="text-[12vw] md:text-[6vw] leading-tight mb-32 tracking-tight gap-6">
              <div className="flex flex-col md:flex-row">
                <h1 className="flex">
                  One
                  <span style={{ fontFamily: "Felipa" }} className="px-6">
                    destination
                  </span>
                </h1>
                for all
              </div>
              <span style={{ fontFamily: "Felipa" }}>travel -</span> related
              services
            </div>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book now
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 z-20 flex space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:text-black hover:bg-white transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:text-black hover:bg-white transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center text-white">
          <span className="text-sm font-light mb-2 opacity-75">
            Scroll down
          </span>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/75"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
