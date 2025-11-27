import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DoctorCard from '../components/DoctorCard';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

// Use DoctorCard component directly; no 'any' cast needed

export const doctors = [
  {
    name: 'Dhirendra Yadav',
    title: 'MBBS, MD General Medicine, CCDM (Diabetes)',
    specialty: 'General Medicine',
    experience: '15+ years',
    image: '/assets/dr-dhirendra-yadav.svg',
    description: 'Dhirendra Yadav is a highly experienced general physician with expertise in managing chronic diseases and preventive healthcare.',
    inClinicTimings: '7:00 pm to 9:30 pm',
    videoTimings: '6:00 pm to 7:00 pm', // Added video consultation timing
  },
  {
    name: 'Sunitha Yadav',
    title: 'BAMS, MD Ayurveda Medicine, PGD in Clinical Nutrition and Dietetics',
    specialty: 'Ayurveda',
    experience: '12+ years',
    image: '/assets/dr-sunitha-yadav.svg',
    description: 'Sunitha Yadav specializes in traditional Ayurvedic treatments and has helped numerous patients achieve holistic wellness.',
    inClinicTimings: '10:00 am to 1:30 pm',
    videoTimings: '6:00 pm to 7:00 pm', // Added video consultation timing
  },
];

const About = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>About Us | Saanvi Healthcare Centre</title>
        <meta name="description" content="Learn more about Saanvi Healthcare Centre — your trusted clinic for integrated General Medicine and Ayurveda care." />
      </Helmet>
      
      {/* About Hero */}
      <section className="pt-24 pb-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <EditableImage
                page="about"
                section="hero"
                field="logo"
                defaultSrc="/assets/images/shc_logo_exact.svg"
                alt="Saanvi Healthcare Logo"
                className="h-16 mr-4"
              />
              <EditableText
                page="about"
                section="hero"
                field="title"
                defaultValue="About Saanvi Healthcare Centre"
                tag="h1"
                className="text-4xl font-bold text-green-800"
              />
            </div>
            <EditableText
              page="about"
              section="hero"
              field="description"
              defaultValue="At our centre, we believe true health is a harmony of body, mind, and nature. Our clinic brings together the precision of modern medical science with the ancient wisdom of Ayurveda to provide complete, compassionate care for every individual."
              tag="p"
              className="text-lg text-gray-700 leading-relaxed"
              multiline={true}
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <EditableText
                page="about"
                section="mission"
                field="title"
                defaultValue="Our Mission"
                tag="h2"
                className="text-4xl font-extrabold text-gray-900 mb-6"
              />
              <EditableText
                page="about"
                section="mission"
                field="description"
                defaultValue="Our mission is to provide comprehensive healthcare by integrating modern medical practices with traditional Ayurvedic wisdom. We believe in holistic approach to healing, personalized treatment plans, and preventive healthcare."
                tag="p"
                className="text-lg text-gray-700 leading-relaxed mb-4"
                multiline={true}
              />
            </div>
            <div className="relative h-80 md:h-auto md:aspect-w-16 md:aspect-h-9 order-1 md:order-2 flex items-center justify-center">
              <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Logo" className="w-56 h-56 object-contain rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <EditableText
              page="about"
              section="doctors"
              field="title"
              defaultValue="Meet Our Dedicated Doctors"
              tag="h2"
              className="text-4xl font-extrabold text-gray-900 mb-4"
            />
            <EditableText
              page="about"
              section="doctors"
              field="description"
              defaultValue="Our team of experienced professionals is committed to providing you with the best integrated healthcare. Get to know the experts who will guide you on your journey to wellness."
              tag="p"
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              multiline={true}
            />
          </div>

          {/* Doctors grid: show side-by-side on md+ screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                specialization={doctor.specialty}
                qualifications={[doctor.title]}
                availability={doctor.inClinicTimings}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <EditableText
            page="about"
            section="why-choose"
            field="title"
            defaultValue="Why Choose Our Clinic?"
            tag="h2"
            className="text-3xl font-bold text-center mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <EditableText
                page="about"
                section="why-choose"
                field="feature1-title"
                defaultValue="Integrated Approach"
                tag="h3"
                className="text-xl font-semibold mb-4"
              />
              <EditableText
                page="about"
                section="why-choose"
                field="feature1-description"
                defaultValue="Best of both modern medicine and traditional Ayurveda for comprehensive healing."
                tag="p"
                className="text-gray-600"
              />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <EditableText
                page="about"
                section="why-choose"
                field="feature2-title"
                defaultValue="Personalized Care"
                tag="h3"
                className="text-xl font-semibold mb-4"
              />
              <EditableText
                page="about"
                section="why-choose"
                field="feature2-description"
                defaultValue="Tailored treatment plans based on individual needs and conditions."
                tag="p"
                className="text-gray-600"
              />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <EditableText
                page="about"
                section="why-choose"
                field="feature3-title"
                defaultValue="Modern Facility"
                tag="h3"
                className="text-xl font-semibold mb-4"
              />
              <EditableText
                page="about"
                section="why-choose"
                field="feature3-description"
                defaultValue="State-of-the-art infrastructure with traditional healing spaces."
                tag="p"
                className="text-gray-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <EditableText
            page="about"
            section="cta"
            field="title"
            defaultValue="Experience Our Holistic Approach to Health"
            tag="h2"
            className="text-3xl font-bold mb-6"
          />
          <EditableText
            page="about"
            section="cta"
            field="description"
            defaultValue="Book an appointment today and take the first step towards complete wellness."
            tag="p"
            className="text-lg text-gray-600 mb-8"
          />
          <Link to="/appointment" className="btn">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
