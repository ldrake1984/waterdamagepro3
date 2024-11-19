import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

export default function Footer() {
  const states = [
    'Texas', 'Georgia', 'Colorado', 'California',
    'Nevada', 'New York', 'North Carolina', 'Florida',
    'Washington', 'Maryland', 'New Jersey', 'Utah'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Water Damage Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional water damage restoration services available 24/7.
            </p>
            <div className="space-y-2">
              <a href="tel:+1-800-400-9353" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +1 (800) 400-9353
              </a>
              <a href="mailto:info@waterdamageproservices.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                info@waterdamageproservices.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <div className="grid grid-cols-1 gap-2">
              {states.map((state) => (
                <div
                  key={state}
                  className="text-gray-400 flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {state}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="block text-gray-400 hover:text-white">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Water Damage Pro Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}