import React from 'react';
import { Airplane, CalendarCheck, User, Gift } from 'lucide-react';

export function BlogSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Blog about
            <br />
            traveling
          </h2>
        </div>
        <div>
          <p className="text-lg text-gray-600 mb-6">
            The most exotic island in Europe in the center of the vast blue ocean,
            enveloped by a mild maritime climate and the paradisical beauty of
            untouched nature imaginable
          </p>
          <button className="px-6 py-3 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-100 transition">
            Read all articles
          </button>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection() {
  const values = [
    {
      icon: <Airplane className="w-6 h-6" />, 
      title: 'Airport pickup',
      description: 'We provide escort from the airport to the hotel',
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: 'Easy booking',
      description: 'Quick and easy booking of tours for upcoming dates',
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Best tour guide',
      description: 'Our best tour guide is ready to guide your trip',
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Lots of promos',
      description: 'Various promotions and drawings of tours',
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
              <h3 className="font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const services = [
    'Holidays',
    'Air Tickets',
    'Destination Weddings',
    'Events',
    'Visa',
    'Passport',
    'Bus, Car Rental',
    'Study Abroad',
    'Foreign Exchange',
    'Adventure Trips',
    'Cruise and Travel and Tourism planning',
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
      <p className="text-gray-600 mb-6">
        Looking for a reliable and experienced tour and travel company for your next
        vacation? Look no further! Our company specializes in travel planning and
        event management, ensuring that your trip is tailored to your specifications
        and runs smoothly from start to finish.
      </p>
      <p className="text-gray-600 mb-6">
        We understand that planning a trip can be overwhelming, so we take care of
        all the details, from booking flights and hotels to arranging tours and
        activities.
      </p>
      <p className="text-gray-600 mb-6">
        In addition to travel planning, we specialize in event management, creating
        unforgettable experiences for corporate retreats, weddings, and other
        special occasions. Our team works closely with clients to ensure that every
        detail is perfect, from venue selection and decor to catering and
        entertainment.
      </p>
      <p className="text-gray-600 mb-6">
        So if you're looking for a trustworthy and reliable travel and event management
        company, look no further.
      </p>
      <h3 className="text-xl font-semibold mb-3">Our Services</h3>
      <ul className="list-disc list-inside grid grid-cols-2 gap-2 text-gray-600">
        {services.map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
