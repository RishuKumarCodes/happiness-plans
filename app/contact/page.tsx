import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Happiness Plans",
  description:
    "Get in touch with Happiness Plans for all your travel needs. Contact our expert team for personalized travel solutions.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Contact <span className="font-accent text-secondary">Us</span>
            </h1>
            <p className="text-xl text-gray-200">
              Ready to plan your next adventure? Get in touch with our expert
              team
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-neutral-dark">
                        [Primary contact number]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-neutral-dark">
                        info@happinessplans.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Address</p>
                      <p className="text-neutral-dark">
                        [Headquarters address]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">🕒</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        Business Hours
                      </p>
                      <p className="text-neutral-dark">
                        Monday - Saturday, 9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Presence Map Placeholder */}
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Global Presence
                </h3>
                <div className="bg-neutral-light h-64 rounded-lg flex items-center justify-center">
                  <p className="text-neutral-dark">
                    Interactive map showing office locations and service areas
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
