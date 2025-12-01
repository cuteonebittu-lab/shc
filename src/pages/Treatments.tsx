import { Link } from 'react-router-dom';

const treatments = [
  {
    category: 'Chronic Conditions',
    conditions: [
      {
        name: 'Diabetes Management',
        description: 'Integrated approach combining modern medicine with Ayurvedic lifestyle modifications.',
        treatments: ['Blood sugar monitoring', 'Medication management', 'Dietary planning', 'Ayurvedic supplements'],
      },
      {
        name: 'Hypertension',
        description: 'Comprehensive care for blood pressure management using both modern and traditional methods.',
        treatments: ['Regular monitoring', 'Medication adjustment', 'Stress management', 'Herbal supplements'],
      },
      {
        name: 'Thyroid Disorders',
        description: 'Balanced treatment approach for thyroid conditions.',
        treatments: ['Hormone level monitoring', 'Medication management', 'Dietary guidance', 'Ayurvedic herbs'],
      },
    ],
  },
  {
    category: 'Digestive Health',
    conditions: [
      {
        name: 'IBS Treatment',
        description: 'Holistic management of Irritable Bowel Syndrome symptoms.',
        treatments: ['Dietary modifications', 'Stress management', 'Ayurvedic medicines', 'Lifestyle changes'],
      },
      {
        name: 'Acid Reflux',
        description: 'Combined approach to manage GERD and acid reflux.',
        treatments: ['Medication therapy', 'Dietary advice', 'Ayurvedic remedies', 'Lifestyle modifications'],
      },
      {
        name: 'Digestive Disorders',
        description: 'Comprehensive treatment for various digestive issues.',
        treatments: ['Diagnostic tests', 'Medical treatment', 'Herbal remedies', 'Dietary planning'],
      },
    ],
  },
  {
    category: 'Wellness & Prevention',
    conditions: [
      {
        name: 'Stress Management',
        description: 'Integrated approach to managing stress and anxiety.',
        treatments: ['Counseling', 'Meditation', 'Yoga therapy', 'Herbal support'],
      },
      {
        name: 'Weight Management',
        description: 'Personalized programs for healthy weight management.',
        treatments: ['Medical assessment', 'Dietary planning', 'Exercise guidance', 'Ayurvedic therapies'],
      },
    ],
  },
];

const Treatments = () => {
  return (
    <div className="flex flex-col">
      {/* Treatments Hero */}
  <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Conditions & Treatments</h1>
            <p className="text-lg text-gray-600">
              We offer comprehensive treatment plans that combine modern medical
              practices with traditional Ayurvedic approaches for various health
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      {treatments.map((category, index) => (
        <section
          key={index}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.conditions.map((condition, conditionIndex) => (
                <div
                  key={conditionIndex}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">{condition.name}</h3>
                  <p className="text-gray-600 mb-6">{condition.description}</p>
                  <h4 className="font-semibold mb-2">Treatment Includes:</h4>
                  <ul className="space-y-2">
                    {condition.treatments.map((treatment, treatmentIndex) => (
                      <li
                        key={treatmentIndex}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-green-800 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Personalized Care Section */}
  <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Personalized Treatment Approach
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every patient receives a customized treatment plan that takes into
              account their unique condition, medical history, and body
              constitution.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-green-800">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Thorough Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive evaluation using both modern diagnostics and
                  Ayurvedic examination
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-green-800">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customized Plan</h3>
                <p className="text-gray-600">
                  Tailored treatment combining modern medicine and Ayurvedic
                  therapies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-green-800">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Regular Monitoring</h3>
                <p className="text-gray-600">
                  Continuous assessment and adjustment of treatment plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a consultation with our experienced doctors to discuss your
            condition and treatment options.
          </p>
          <Link to="/appointment" className="btn">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
