import React from "react";
import { Plane, CalendarCheck, User, Gift } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 pt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Trusted Partner
            <br />
            in Travel & Events
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-600">
            Planning a perfect trip or event shouldn’t be stressful. We handle
            every detail—from flights and hotels to bespoke tours and on‑site
            coordination—so you can simply enjoy the journey.
          </p>
          <p className="text-lg text-gray-600">
            Whether it’s a dream vacation, a corporate retreat or a destination
            wedding, our experienced team creates seamless, memorable
            experiences tailored just for you.
          </p>
          <p className="text-lg text-gray-600">
            Ready to get started? Let’s craft your next adventure together.
          </p>

          <button className="mt-4 px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  const values = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Airport pickup",
      description: "We provide escort from the airport to the hotel",
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Easy booking",
      description: "Quick and easy booking of tours for upcoming dates",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Best tour guide",
      description: "Our best tour guide is ready to guide your trip",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Lots of promos",
      description: "Various promotions and drawings of tours",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Top values for you
        </h2>
        <p className="text-gray-600 mb-8">
          Try variety of benefits when using our services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="p-4 bg-white rounded-full shadow-md mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

