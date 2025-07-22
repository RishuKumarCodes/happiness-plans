import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Happiness Plans",
  description:
    "Learn about Happiness Plans - your trusted global travel partner transforming travel dreams into reality.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About{" "}
              <span className="font-accent text-secondary">
                Happiness Plans
              </span>
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted global travel partner transforming dreams into
              unforgettable journeys
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                Founded with a vision to transform travel dreams into reality,
                Happiness Plans has emerged as a trusted global travel partner.
                We believe that every journey should be a source of joy and
                memorable experiences.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed">
                Our mission is simple: to provide comprehensive travel solutions
                that exceed expectations while ensuring peace of mind throughout
                your journey. From the moment you dream of a destination to the
                time you return home with cherished memories, we're with you
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Excellence",
                description: "Delivering exceptional service quality",
              },
              {
                title: "Trust",
                description:
                  "Building lasting relationships through reliability",
              },
              {
                title: "Innovation",
                description: "Embracing technology for seamless experiences",
              },
              {
                title: "Global Reach",
                description: "Connecting you to destinations worldwide",
              },
              {
                title: "Personalization",
                description: "Tailoring every journey to your unique needs",
              },
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Comprehensive travel solutions under one roof",
                "Global presence with local expertise",
                "24/7 customer support",
                "Competitive pricing and value packages",
                "Experienced travel consultants",
                "Seamless booking and payment processes",
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-neutral-dark">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export function AboutSection() {
  const services = [
    "Holidays",
    "Air Tickets",
    "Destination Weddings",
    "Events",
    "Visa",
    "Passport",
    "Bus, Car Rental",
    "Study Abroad",
    "Foreign Exchange",
    "Adventure Trips",
    "Cruise and Travel and Tourism planning",
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
      <p className="text-gray-600 mb-6">
        Looking for a reliable and experienced tour and travel company for your
        next vacation? Look no further! Our company specializes in travel
        planning and event management, ensuring that your trip is tailored to
        your specifications and runs smoothly from start to finish.
      </p>
      <p className="text-gray-600 mb-6">
        We understand that planning a trip can be overwhelming, so we take care
        of all the details, from booking flights and hotels to arranging tours
        and activities.
      </p>
      <p className="text-gray-600 mb-6">
        In addition to travel planning, we specialize in event management,
        creating unforgettable experiences for corporate retreats, weddings, and
        other special occasions. Our team works closely with clients to ensure
        that every detail is perfect, from venue selection and decor to catering
        and entertainment.
      </p>
      <p className="text-gray-600 mb-6">
        So if you're looking for a trustworthy and reliable travel and event
        management company, look no further.
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
