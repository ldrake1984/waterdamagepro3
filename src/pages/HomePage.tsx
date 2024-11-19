import React from 'react';
import { Phone, CheckCircle, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Emergency Water Damage Restoration Services
            </h1>
            <p className="text-xl mb-8">
              Professional water damage restoration services by licensed & insured experts. Available 24/7 for emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1-800-400-9353"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 (800) 400-9353
              </a>
              <Link
                to="/water-damage-repair-cost-calculator"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Water Damage Cost Calculator
              </Link>
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Water Damage Restoration',
                description: 'Expert water removal and restoration services for your property.'
              },
              {
                title: 'Flood Damage Repair',
                description: 'Comprehensive flood damage cleanup and repair services.'
              },
              {
                title: 'Emergency Response',
                description: '24/7 emergency water damage restoration services.'
              },
              {
                title: 'Mold Remediation',
                description: 'Professional mold removal and remediation services.'
              },
              {
                title: 'Storm Damage Repair',
                description: 'Storm and weather-related water damage restoration.'
              },
              {
                title: 'Sewage Cleanup',
                description: 'Safe and thorough sewage water cleanup services.'
              }
            ].map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/water-damage-repair-cost-calculator"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Water Damage Repair Costs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need Emergency Water Damage Services?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+1-800-400-9353"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: +1 (800) 400-9353
            </a>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Texas', 'Georgia', 'Colorado', 'California',
              'Nevada', 'New York', 'North Carolina', 'Florida',
              'Washington', 'Maryland', 'New Jersey', 'Utah'
            ].map((state) => (
              <div
                key={state}
                className="p-4 text-center bg-gray-50 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900">{state}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/water-damage-repair-cost-calculator"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Water Damage Repair Costs
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8">Water Damage Pro Services: An Expert Guide</h2>
            
            <p className="mb-6">
              When disaster strikes, water damage can wreak havoc on your property, whether it's a burst pipe, storm damage, or flooding. In this guide, we dive into everything you need to know about water damage restoration, the role of water damage pros, and why timely action is essential.
            </p>

            <h3 className="text-2xl font-bold mb-4">1. What Is Water Damage, and Why Does It Happen?</h3>
            <p className="mb-4">
              Water damage occurs when water intrudes into your property, causing damage to your home or business. Common causes include burst pipes, flooding, storms, or even gradual leaks. If left unaddressed, water damage can lead to structural damage, mold growth, and costly repairs.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Standing water can seep into floors and walls, weakening structures.</li>
              <li>Water damage caused by storms or faulty plumbing requires immediate action to prevent further damage.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">2. How Do Water Damage Pros Help You Recover?</h3>
            <p className="mb-4">
              Water damage pros bring expertise, professionalism, and the right tools to restore your property efficiently. They handle:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Water removal using advanced equipment to eliminate standing water.</li>
              <li>Assessing the damage to determine the scope of repairs.</li>
              <li>Providing emergency services to get your business back up and running quickly.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">3. What Are the Key Steps in the Restoration Process?</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Water Extraction: Removing standing water to stop further harm.</li>
              <li>Drying and Dehumidification: Using specialized equipment to address moisture.</li>
              <li>Damage Restoration: Repairing structural damage to restore your property.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">4. What Services Are Included in Water Damage Restoration?</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Mold remediation to address mold growth caused by water.</li>
              <li>Fire damage repair in cases of combined fire and water incidents.</li>
              <li>Storm damage cleanup for properties affected by severe weather.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">5. How to Handle Mold Damage After Water Exposure</h3>
            <p className="mb-4">
              Mold damage is a common consequence of water exposure. If not addressed, mold can:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Compromise air quality in your home or business.</li>
              <li>Lead to health issues for occupants.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">6. Is Your Home or Business Impacted by Water Damage?</h3>
            <p className="mb-4">
              Assessing the damage is critical when your property is impacted by water damage. Look for:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Warped walls or floors.</li>
              <li>Persistent odors.</li>
              <li>Visible mold growth.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">7. Commercial Water Damage Repair: What You Need to Know</h3>
            <p className="mb-4">
              Commercial water damage repair focuses on restoring businesses affected by water intrusion. Key considerations:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Emergency water damage repair services are available 24 hours a day to minimize downtime.</li>
              <li>Get your business back up and running quickly with professional restoration teams.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">8. How to Choose the Right Water Damage Company</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Their expertise in handling water mitigation and restoration projects.</li>
              <li>Reviews and testimonials that highlight great customer service.</li>
              <li>Their commitment to excellence in providing remediation services.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">9. Ask the Community: What People Also Searched For</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Emergency water damage repair services.</li>
              <li>Tips for dealing with fire damage and smoke damage alongside water restoration.</li>
              <li>Commercial water damage repair for businesses.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">10. Why You Should Contact Us Today for Professional Restoration Services</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Open 24 hours for emergency services.</li>
              <li>Equipped to handle everything from storm damage restoration to flood restoration.</li>
              <li>A team with the commitment to excellence to get your property back to normal as quickly as possible.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}