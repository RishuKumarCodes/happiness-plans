import React from "react";
import {
  Plane,
  MapPin,
  Ship,
  DollarSign,
  Heart,
  Users,
  GraduationCap,
  Shield,
  FileText,
  Building,
  Car,
  Headphones,
  Compass,
  CheckCircle,
  Star,
} from "lucide-react";

const services = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    title: "Holiday Packages",
    description:
      "Domestic and international tour packages with customized itineraries, group and solo travel options, adventure, leisure, and cultural tours, plus family-friendly vacation packages.",
    features: [
      "Customized Itineraries",
      "Group & Solo Options",
      "Adventure Tours",
      "Family Packages",
    ],
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    title: "Flight Services",
    description:
      "Domestic and international air tickets with best price guarantees, flexible booking options, corporate travel solutions, and last-minute booking assistance.",
    features: [
      "Best Price Guarantee",
      "Flexible Booking",
      "Corporate Solutions",
      "Last-minute Assistance",
    ],
  },
  {
    icon: <Ship className="w-8 h-8 text-blue-600" />,
    title: "Cruise Packages",
    description:
      "Ocean and river cruises including Mediterranean, Caribbean, and Asian routes with luxury and budget-friendly options, family and adults-only cruises, and shore excursion planning.",
    features: [
      "Ocean & River Cruises",
      "Multiple Routes",
      "Luxury & Budget Options",
      "Shore Excursions",
    ],
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Foreign Exchange",
    description:
      "Competitive currency exchange rates, Forex cards and cash currency, online and offline exchange services, travel insurance integration, and quick processing and delivery.",
    features: [
      "Competitive Rates",
      "Forex Cards",
      "Online Services",
      "Quick Processing",
    ],
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Destination Weddings",
    description:
      "Exotic wedding venues worldwide with complete wedding planning services, guest travel coordination, photography and videography arrangements, and honeymoon package integration.",
    features: [
      "Exotic Venues",
      "Complete Planning",
      "Guest Coordination",
      "Honeymoon Packages",
    ],
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Event Management",
    description:
      "Corporate events and conferences, incentive travel programs, team building retreats, special occasion celebrations, and MICE (Meetings, Incentives, Conferences, Exhibitions) services.",
    features: [
      "Corporate Events",
      "Incentive Programs",
      "Team Building",
      "MICE Services",
    ],
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Study Abroad Programs",
    description:
      "University admissions assistance, visa guidance and processing, accommodation arrangements, pre-departure orientation, and ongoing student support services.",
    features: [
      "Admissions Assistance",
      "Visa Processing",
      "Accommodation",
      "Student Support",
    ],
  },
];

const additionalServices = [
  { name: "Travel Insurance", icon: <Shield className="w-5 h-5" /> },
  { name: "Visa Assistance", icon: <FileText className="w-5 h-5" /> },
  { name: "Hotel Bookings", icon: <Building className="w-5 h-5" /> },
  { name: "Car Rentals", icon: <Car className="w-5 h-5" /> },
  { name: "Travel Accessories", icon: <Compass className="w-5 h-5" /> },
  { name: "24/7 Emergency Support", icon: <Headphones className="w-5 h-5" /> },
];

const serviceStats = [
  { number: "10,000+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "24/7", label: "Customer Support" },
  { number: "15+", label: "Years Experience" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden m-[10px] rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your one destination for all travel-related services and
              experiences
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              From dream vacations to business travel, destination weddings to
              study abroad programs - we provide comprehensive solutions for
              every travel need.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel solutions designed to make your journey
              seamless and memorable
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Supporting services to enhance your travel experience
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {service.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our simple and efficient process ensures your travel planning is
              stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "Share your travel dreams and requirements",
              },
              {
                step: "2",
                title: "Planning",
                desc: "We create a customized itinerary for you",
              },
              {
                step: "3",
                title: "Booking",
                desc: "Secure bookings with transparent pricing",
              },
              {
                step: "4",
                title: "Support",
                desc: "Enjoy 24/7 support throughout your journey",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 p-12 rounded-2xl">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let us help you create unforgettable travel experiences. Contact
                our expert team today to discuss your travel plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  View Our Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
