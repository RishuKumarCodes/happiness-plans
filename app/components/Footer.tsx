import Link from 'next/link'
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#011850] m-[10px] rounded-3xl text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-heading font-bold mb-4">
              <span className="text-white">Happiness</span>
              <span className="text-secondary font-accent"> Plans</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted global travel partner making happiness happen worldwide. 
              One destination for all travel related services.
            </p>
            <div className="text-sm text-gray-400">
              Global presence, local expertise
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Holiday Packages</li>
              <li className="text-gray-300">Flight Services</li>
              <li className="text-gray-300">Cruise Packages</li>
              <li className="text-gray-300">Foreign Exchange</li>
              <li className="text-gray-300">Destination Weddings</li>
              <li className="text-gray-300">Study Abroad Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Email:</p>
                <p className="text-secondary">info@happinessplans.com</p>
              </div>
              <div>
                <p className="text-gray-300">Phone:</p>
                <p className="text-secondary">[Primary contact number]</p>
              </div>
              <div>
                <p className="text-gray-300">Business Hours:</p>
                <p className="text-gray-300">Monday - Saturday</p>
                <p className="text-gray-300">9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Happiness Plans. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
