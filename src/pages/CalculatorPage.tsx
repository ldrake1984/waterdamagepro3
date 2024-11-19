import React, { useState } from 'react';
import { Phone, Calculator } from 'lucide-react';

export default function CalculatorPage() {
  const [squareFootage, setSquareFootage] = useState('');
  const [waterType, setWaterType] = useState('clean');
  const [affectedAreas, setAffectedAreas] = useState<string[]>([]);
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    const baseRate = {
      clean: 3.5,
      gray: 5.5,
      black: 12.5
    }[waterType];

    const areaMultipliers = {
      walls: 1.5,
      flooring: 1.3,
      ceiling: 1.8,
      furniture: 1.4,
      appliances: 1.6
    };

    let multiplier = 1;
    affectedAreas.forEach(area => {
      multiplier *= areaMultipliers[area as keyof typeof areaMultipliers] || 1;
    });

    const total = Math.round(Number(squareFootage) * baseRate * multiplier);
    setEstimate(total);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Quick Water Damage Repair Cost Calculator
            </h1>
            <p className="text-xl text-white mb-8">
              Estimate your water damage repair costs with our professional calculator
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Affected Area (Square Feet)
                </label>
                <input
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter square footage"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Water Damage
                </label>
                <select
                  value={waterType}
                  onChange={(e) => setWaterType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="clean">Clean Water (Category 1)</option>
                  <option value="gray">Gray Water (Category 2)</option>
                  <option value="black">Black Water (Category 3)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Affected Areas
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['walls', 'flooring', 'ceiling', 'furniture', 'appliances'].map((area) => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={affectedAreas.includes(area)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setAffectedAreas([...affectedAreas, area]);
                          } else {
                            setAffectedAreas(affectedAreas.filter(a => a !== area));
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 capitalize">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateEstimate}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Estimate
              </button>

              {estimate !== null && (
                <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Estimated Cost</h3>
                  <p className="text-3xl font-bold text-blue-600">${estimate.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    This is a rough estimate. Contact us for a detailed assessment.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center space-y-6">
            <a
              href="tel:+1-800-400-9353"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 (800) 400-9353
            </a>
            <p className="block text-gray-600">
              Get a professional assessment for accurate pricing
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-8">How to Use Our Water Damage Repair Cost Calculator</h2>
            
            <div className="prose prose-lg">
              <p>
                Our Water Damage Repair Cost Calculator helps you estimate the potential costs of water damage restoration. Follow these steps to get an accurate estimate:
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Enter the Affected Area:</strong> Input the total square footage of the area affected by water damage.
                </li>
                <li>
                  <strong>Select Water Type:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Clean Water (Category 1): Fresh water from pipes</li>
                    <li>Gray Water (Category 2): Slightly contaminated water</li>
                    <li>Black Water (Category 3): Severely contaminated water</li>
                  </ul>
                </li>
                <li>
                  <strong>Check Affected Areas:</strong> Select all areas that have been impacted by water damage.
                </li>
                <li>
                  <strong>Get Your Estimate:</strong> Click "Calculate Estimate" to see the approximate cost.
                </li>
              </ol>

              <p className="mt-6">
                <strong>Note:</strong> This calculator provides a rough estimate based on average costs. For an accurate assessment, please contact our professional team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Water Damage Repair Cost Calculator: More About Costs</h2>
              
              <p>
                Water damage can strike unexpectedly, leaving homeowners with extensive repair needs and mounting costs. Understanding the restoration cost is essential for planning and budgeting. This guide explores the cost of water damage, factors affecting water damage repair cost, and how to use a 2024 cost calculator to estimate expenses.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. What is Water Damage and How Does it Affect Costs?</h3>
              <p>
                Water damage occurs when water intrudes into a property, causing harm to structures, furnishings, and electrical systems. The severity of the damage influences the cost of water damage repair, ranging from minor fixes to extensive overhauls.
              </p>
              
              <h4 className="font-bold mt-4 mb-2">Types of Water:</h4>
              <ul className="list-disc pl-6">
                <li>Clean water: Least expensive to clean, typically caused by leaks or overflowing sinks.</li>
                <li>Gray water: Slightly contaminated, from appliances or bathtubs.</li>
                <li>Black water: Highly hazardous, often from sewage backups or floods, leading to higher costs.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. How to Use a Cost Calculator for Water Damage Repair?</h3>
              <p>
                A cost calculator simplifies estimating the water damage restoration cost by considering factors like square footage, water type, and required services.
              </p>
              
              <h4 className="font-bold mt-4 mb-2">Steps:</h4>
              <ul className="list-disc pl-6">
                <li>Enter the affected square footage and type of water (e.g., gray water, black water).</li>
                <li>Add details about cleanup and repair costs for items like flooring or walls.</li>
                <li>Receive a tailored cost estimate based on industry standards.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. What are the Main Cost Factors for Water Damage Restoration?</h3>
              <p>Several factors influence the cost of water damage restoration, including:</p>
              <ul className="list-disc pl-6">
                <li>Extent of the damage: More severe damage leads to higher repair costs.</li>
                <li>Water source: Cleaning up black water incurs greater expenses.</li>
                <li>Materials affected: Damage to high-end finishes increases the total cost.</li>
              </ul>

              <h4 className="font-bold mt-4 mb-2">Additional Costs:</h4>
              <ul className="list-disc pl-6">
                <li>Mold remediation costs: Mold often accompanies water damage, adding to expenses.</li>
                <li>Costs for removing standing water: Specialized equipment is necessary for extraction.</li>
                <li>Costs for structural damage: Repairs to foundational elements can significantly increase the budget.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Understanding the Average Cost of Water Damage in 2024</h3>
              <p>
                As of September 2024, the average cost of water damage restoration is $3,000 to $8,000, depending on the factors outlined above.
              </p>
              <ul className="list-disc pl-6">
                <li>Clean water leaks: Around $1,500–$4,000.</li>
                <li>Gray water damage: $3,000–$6,000.</li>
                <li>Black water damage: $7,000 or more.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. How Do Water Damage Restoration Companies Estimate Costs?</h3>
              <p>
                Professional restoration companies rely on industry-standard methods and up-to-date cost data to provide accurate estimates. Their process includes:
              </p>
              <ul className="list-disc pl-6">
                <li>Assessing the extent of the water damage.</li>
                <li>Calculating the cost per square foot.</li>
                <li>Factoring in cleanup, water removal, and repairs.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. What is the Cost Per Square Foot of Water Damage Repair?</h3>
              <p>
                The cost per square foot for water damage restoration varies based on the water source and severity:
              </p>
              <ul className="list-disc pl-6">
                <li>Clean water: $3–$5 per square foot.</li>
                <li>Gray water: $4–$7 per square foot.</li>
                <li>Black water: $10–$15 per square foot.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">7. The Role of Water Source in Restoration Costs</h3>
              <p>The water source plays a significant role in determining restoration costs:</p>
              <ul className="list-disc pl-6">
                <li>Clean water: Easier to extract and less harmful, leading to lower costs.</li>
                <li>Gray water: Contains contaminants that require thorough cleaning and disinfection.</li>
                <li>Black water: Demands extensive cleanup and mold remediation, raising costs.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">8. What is the Cost of Cleanup After Water Damage?</h3>
              <p>The cost of cleanup depends on the severity of the damage and materials involved:</p>
              <ul className="list-disc pl-6">
                <li>Removing standing water: $500–$1,500, depending on equipment and labor.</li>
                <li>Dehumidification and drying: $1,000–$2,500.</li>
                <li>Cleanup of damaged materials like carpets or drywall: $1,500–$4,000.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">9. How Can You Minimize Higher Costs for Water Damage Repair?</h3>
              <p>To avoid higher costs, address water damage promptly by:</p>
              <ul className="list-disc pl-6">
                <li>Using a water alarm to detect leaks early.</li>
                <li>Investing in regular maintenance for pipes and appliances like water heaters.</li>
                <li>Hiring professionals to handle water removal and repairs efficiently.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">10. Why Choose Licensed Water Damage Professionals?</h3>
              <p>Hiring licensed professionals ensures that restoration involves:</p>
              <ul className="list-disc pl-6">
                <li>Expertise in dealing with damage caused by water.</li>
                <li>Proper equipment for water extraction and drying.</li>
                <li>Compliance with safety and building codes.</li>
              </ul>
              <p>
                Licensed water damage repair and restoration experts provide peace of mind and guarantee high-quality work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}