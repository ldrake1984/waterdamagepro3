import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

export default function StatePage() {
  const { state } = useParams<{ state: string }>();
  const formattedState = state?.replace('water-damage-pro-', '').split('-').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const services = [
    'Water Extraction',
    'Flood Damage Restoration',
    'Sewage Cleanup',
    'Mold Remediation',
    'Storm Damage Repair',
    'Basement Waterproofing',
    'Structural Drying',
    'Dehumidification'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583853275454-c8b02b0c2c8c?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Damage Pro in {formattedState}
            </h1>
            <p className="text-xl mb-8">
              24/7 Emergency Water Damage Restoration Services in {formattedState}
            </p>
            <a
              href="tel:+1-800-400-9353"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 (800) 400-9353
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Professional Water Damage Services in {formattedState}
              </h2>
              <p className="text-gray-600 mb-6">
                Water Damage Pro provides expert water damage restoration services throughout {formattedState}. 
                Our team of certified professionals is available 24/7 to respond to your emergency and restore 
                your property to its pre-damage condition.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose Water Damage Pro?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>24/7 Emergency Response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>Licensed & Insured Professionals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>Advanced Equipment & Techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>Free Estimates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <QuoteForm className="sticky top-24" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}