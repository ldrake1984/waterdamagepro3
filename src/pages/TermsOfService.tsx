import React from 'react';

export default function TermsOfService() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p>By accessing and using Water Damage Pro Services, you accept and agree to be bound by these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <p className="mb-4">We provide water damage restoration and related services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Water damage restoration</li>
                <li>Flood damage repair</li>
                <li>Mold remediation</li>
                <li>Emergency water removal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Agreements</h2>
              <p>All services are subject to a separate service agreement that will be provided before work begins. Pricing, scope, and timeline will be detailed in this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due upon completion of services</li>
                <li>We accept major credit cards and insurance payments</li>
                <li>Financing options may be available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Warranties and Guarantees</h2>
              <p>We provide warranties on our workmanship. Specific warranty terms will be provided in your service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Liability Limitations</h2>
              <p>Our liability is limited to the scope of work detailed in your service agreement. We are not responsible for pre-existing conditions or damages not caused by our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Insurance Claims</h2>
              <p>We work with insurance companies but are not responsible for claim approvals or coverage decisions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
              <p>Please provide 24-hour notice for service cancellations. Emergency services may have different cancellation terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">For questions about these terms, contact us:</p>
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