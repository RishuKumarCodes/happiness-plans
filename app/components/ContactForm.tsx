'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    destination: '',
    travelDates: '',
    travelers: '',
    budgetRange: '',
    message: '',
    contactMethod: 'email',
    marketingConsent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      destination: '',
      travelDates: '',
      travelers: '',
      budgetRange: '',
      message: '',
      contactMethod: 'email',
      marketingConsent: false
    })
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-primary mb-2">
            Service Interest
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
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

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-primary mb-2">
            Destination/Location
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label htmlFor="travelDates" className="block text-sm font-medium text-primary mb-2">
            Travel Dates
          </label>
          <input
            type="text"
            id="travelDates"
            name="travelDates"
            placeholder="e.g., December 2024"
            value={formData.travelDates}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="travelers" className="block text-sm font-medium text-primary mb-2">
            Number of Travelers
          </label>
          <select
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select number</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3-5">3-5 People</option>
            <option value="6-10">6-10 People</option>
            <option value="10+">10+ People</option>
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-primary mb-2">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select budget</option>
            <option value="under-50k">Under ₹50,000</option>
            <option value="50k-1l">₹50,000 - ₹1,00,000</option>
            <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
            <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
            <option value="above-5l">Above ₹5,00,000</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message/Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your travel requirements..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        ></textarea>
      </div>

      <div>
        <label htmlFor="contactMethod" className="block text-sm font-medium text-primary mb-2">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="marketingConsent"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
          className="mt-1"
        />
        <label htmlFor="marketingConsent" className="text-sm text-neutral-dark">
          I agree to receive marketing communications and travel updates from Happiness Plans
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-secondary text-primary hover:bg-accent-yellow'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}