import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Droplets, Calculator } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Water Damage Pro</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/water-damage-repair-cost-calculator" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Calculator className="h-4 w-4 mr-2" />
              Water Damage Cost Calculator
            </Link>
          </div>

          <div className="flex items-center">
            <a
              href="tel:+1-800-400-9353"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Phone className="h-4 w-4 mr-2" />
              +1 (800) 400-9353
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}