import React from "react";
import {
  Users,
  Award,
  Globe,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Excellence",
    description:
      "Delivering exceptional service quality that exceeds your expectations at every touchpoint.",
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Trust",
    description:
      "Building lasting relationships through reliability, transparency, and consistent performance.",
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology to provide seamless and modern travel experiences.",
  },
  {
    icon: <MapPin className="w-12 h-12 text-blue-600" />,
    title: "Global Reach",
    description:
      "Connecting you to destinations worldwide with our extensive network of partners.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Personalization",
    description:
      "Tailoring every journey to your unique preferences, budget, and travel style.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "Reliability",
    description:
      "Ensuring dependable service with 24/7 support throughout your entire journey.",
  },
];

const whyChooseUs = [
  "Comprehensive travel solutions under one roof",
  "Global presence with local expertise and insights",
  "24/7 customer support and assistance",
  "Competitive pricing with transparent value packages",
  "Experienced and certified travel consultants",
  "Seamless booking and secure payment processes",
  "Personalized itinerary planning and customization",
  "Emergency support and travel insurance options",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden m-[10px] rounded-3xl">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-yellow-400">Happiness Plans</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Your trusted global travel partner transforming dreams into
              unforgettable journeys
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Global Presence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded with a vision to transform travel dreams into reality,
                  Happiness Plans has emerged as a trusted global travel
                  partner. We believe that every journey should be a source of
                  joy and create memories that last a lifetime.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is simple yet profound: to provide comprehensive
                  travel solutions that exceed expectations while ensuring
                  complete peace of mind throughout your journey. From the
                  moment you dream of a destination to the time you return home
                  with cherished memories, we're with you every step of the way.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800 font-medium italic">
                    "We don't just plan trips; we craft experiences that
                    transform ordinary moments into extraordinary memories."
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  What Sets Us Apart
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Expert Planning
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Detailed itinerary planning tailored to your preferences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        End-to-End Service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        From booking to return, we handle every detail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Global Network
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Extensive partnerships worldwide for seamless
                        experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in delivering exceptional travel
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Happiness Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for travelers
                worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied travelers who have trusted us with
                  their dream vacations and special occasions.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Plan Your Trip Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
