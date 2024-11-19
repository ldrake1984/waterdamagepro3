import React from 'react';

export default function Disclaimer() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">General Information</h2>
              <p>The information provided on Water Damage Pro Services is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Professional Services</h2>
              <p className="mb-4">Our website provides information about water damage restoration services. While we strive to provide accurate cost estimates and service information, actual costs and services may vary based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Extent of damage</li>
                <li>Type of water damage</li>
                <li>Property conditions</li>
                <li>Local factors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cost Calculator</h2>
              <p>The Water Damage Repair Cost Calculator provides estimates based on average costs. Actual costs may vary significantly based on specific circumstances and location.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No Professional Advice</h2>
              <p>The information provided on this website should not be construed as professional advice. Always consult with a qualified professional before making any decisions about water damage restoration.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">External Links</h2>
              <p>Our website may contain links to external websites. We are not responsible for the content or privacy practices of these sites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Insurance Coverage</h2>
              <p>Information about insurance coverage is general in nature. Coverage depends on your specific policy and circumstances. Consult your insurance provider for details about your coverage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Emergency Services</h2>
              <p>In case of water damage emergencies, take immediate action to ensure safety and prevent further damage. Contact emergency services if necessary.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates</h2>
              <p>We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">For questions about this disclaimer, contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: legal@waterdamageproservices.com</li>
                <li>Phone: 1-800-WATER-PRO</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}