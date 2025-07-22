import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Happiness Plans',
  description: 'Discover our comprehensive travel services including holiday packages, flights, cruises, foreign exchange, destination weddings, events, and study abroad programs.',
}

export default function Services() {
  const services = [
    {
      icon: "🏖️",
      title: "Holiday Packages",
      description: "Domestic and international tour packages with customized itineraries, group and solo travel options, adventure, leisure, and cultural tours, plus family-friendly vacation packages."
    },
    {
      icon: "✈️", 
      title: "Flight Services",
      description: "Domestic and international air tickets with best price guarantees, flexible booking options, corporate travel solutions, and last-minute booking assistance."
    },
    {
      icon: "🚢",
      title: "Cruise Packages", 
      description: "Ocean and river cruises including Mediterranean, Caribbean, and Asian routes with luxury and budget-friendly options, family and adults-only cruises, and shore excursion planning."
    },
    {
      icon: "💰",
      title: "Foreign Exchange",
      description: "Competitive currency exchange rates, Forex cards and cash currency, online and offline exchange services, travel insurance integration, and quick processing and delivery."
    },
    {
      icon: "💒",
      title: "Destination Weddings",
      description: "Exotic wedding venues worldwide with complete wedding planning services, guest travel coordination, photography and videography arrangements, and honeymoon package integration."
    },
    {
      icon: "🎉",
      title: "Event Management", 
      description: "Corporate events and conferences, incentive travel programs, team building retreats, special occasion celebrations, and MICE (Meetings, Incentives, Conferences, Exhibitions) services."
    },
    {
      icon: "🎓",
      title: "Study Abroad Programs",
      description: "University admissions assistance, visa guidance and processing, accommodation arrangements, pre-departure orientation, and ongoing student support services."
    }
  ]

  const additionalServices = [
    "Travel insurance",
    "Visa assistance", 
    "Hotel bookings",
    "Car rentals",
    "Travel accessories",
    "24/7 emergency support"
  ]

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="font-accent text-secondary">Services</span>
            </h1>
            <p className="text-xl text-gray-200">
              One destination for all travel related services
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-neutral-dark leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Additional Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-light rounded-lg">
                  <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-neutral-dark font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}