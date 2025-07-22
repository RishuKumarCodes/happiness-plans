"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Quote } from "lucide-react";

export default function TrustIndicators() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Happiness Plans made our dream destination wedding in Bali absolutely perfect. Every detail was handled with care!",
      author: "Sarah & Michael",
      location: "Bali Wedding",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      text: "Their study abroad program assistance helped me get into my dream university in Australia. Incredible support!",
      author: "Rahul Sharma",
      location: "Study Abroad",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      text: "The cruise package was amazing. Great value for money and excellent customer service throughout our journey.",
      author: "The Johnson Family",
      location: "Mediterranean Cruise",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Testimonials Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              What our costumers say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trusted us with their
              dreams
            </p>
          </div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="border-black rounded-3xl p-8 lg:p-12 border-1 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#FECA22]">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="text-center max-w-3xl mx-auto">
                          {/* Stars */}
                          <div className="flex justify-center gap-1 mb-6"></div>

                          {/* Testimonial Text */}
                          <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                            "{testimonial.text}"
                          </p>

                          {/* Author Info */}
                          <div className="flex items-center justify-center gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                            />
                            <div className="text-left">
                              <p className="font-bold text-gray-900 text-lg">
                                {testimonial.author}
                              </p>
                              <div className="flex items-center gap-1 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <p className="text-sm">
                                  {testimonial.location}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-x-1 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:translate-x-1 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6 font-medium">
            Trusted by leading organizations
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="font-bold text-gray-700">ISO Certified</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="font-bold text-gray-700">IATA Member</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
              <span className="font-bold text-gray-700">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
