"use client";
import { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    destination: "",
    travelDates: "",
    travelers: "",
    budgetRange: "",
    message: "",
    contactMethod: "email",
    marketingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      destination: "",
      travelDates: "",
      travelers: "",
      budgetRange: "",
      message: "",
      contactMethod: "email",
      marketingConsent: false,
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="md:flex gap-10">
        {/* Left Side*/}
        <div className="space-y-12 flex-1 p-10 md:p-14">
          {/* Chat to us */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Chat to us
              </h2>
              <p className="text-gray-600 mb-3">
                Our friendly team is here to help.
              </p>
              <p className="text-gray-900 font-medium">
                info@happinessplans.com
              </p>
            </div>
          </div>

          {/* Visit us */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Visit us
              </h2>
              <p className="text-gray-600 mb-3">
                Come say hello at our office HQ.
              </p>
              <div className="text-gray-900">
                <p className="font-medium">Travel Plaza, Level 12</p>
                <p>Downtown Business District</p>
                <p>New York, NY 10001 US</p>
              </div>
            </div>
          </div>

          {/* Call us */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mt-1">
              <Phone className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Call us
              </h2>
              <p className="text-gray-600 mb-3">Mon-Fri from 8am to 5pm.</p>
              <p className="text-gray-900 font-medium">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-8">
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Facebook className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Twitter className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Youtube className="w-5 h-5 text-gray-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Instagram className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>

        {/* Right Side*/}
        <div className="bg-[#FFCB22] rounded-3xl p-8 md:p-14 flex-1 m-[10px]">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact us
            </h2>
            <p className="text-gray-800">
              Tell us more about yourself and what you've got in mind.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
              <div>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="holiday">Holiday Packages</option>
                  <option value="flights">Flight Services</option>
                  <option value="cruise">Cruise Packages</option>
                  <option value="forex">Foreign Exchange</option>
                  <option value="wedding">Destination Weddings</option>
                  <option value="events">Event Management</option>
                  <option value="study">Study Abroad Programs</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination/Location"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="travelDates"
                  placeholder="Travel dates (e.g., December 2024)"
                  value={formData.travelDates}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                >
                  <option value="">Number of travelers</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-5">3-5 People</option>
                  <option value="6-10">6-10 People</option>
                  <option value="10+">10+ People</option>
                </select>
              </div>
              <div>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                >
                  <option value="">Budget range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                  <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                </select>
              </div>
            </div>

            <div>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
              >
                <option value="email">Preferred contact: Email</option>
                <option value="phone">Preferred contact: Phone</option>
                <option value="whatsapp">Preferred contact: WhatsApp</option>
              </select>
            </div>

            <div>
              <textarea
                rows={4}
                name="message"
                placeholder="Tell us about your travel requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-700 text-gray-900 placeholder-gray-700 focus:outline-none focus:border-gray-900 resize-none transition-colors"
              ></textarea>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="marketingConsent"
                id="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="w-4 h-4 text-gray-900 border-gray-700 rounded focus:ring-gray-900 mt-1"
              />
              <label
                htmlFor="marketingConsent"
                className="text-gray-800 text-sm"
              >
                I agree to receive marketing communications and travel updates
                from Happiness Plans
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Let's get started!"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
