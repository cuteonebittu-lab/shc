import { Helmet } from 'react-helmet-async';
import EditableText from '../components/EditableText';
import GoogleMap from '../components/GoogleMap';
import { CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL, CLINIC_TIMINGS, CLINIC_WHATSAPP } from '../config/constants';

const contactInfo = {
  address: CLINIC_ADDRESS,
  phone: CLINIC_PHONE,
  email: CLINIC_EMAIL,
  timings: CLINIC_TIMINGS,
  whatsapp: CLINIC_WHATSAPP
};

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Contact Us | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Get in touch with Saanvi Healthcare Centre. Visit our clinic or contact us for appointments and consultations." 
        />
      </Helmet>

      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <EditableText
            page="contact"
            section="hero"
            field="title"
            defaultValue="Contact Us"
            tag="h2"
            className="text-4xl font-bold text-green-800 mb-6"
          />
          <EditableText
            page="contact"
            section="hero"
            field="description"
            defaultValue="We're here to assist you with your health journey. Reach us anytime during working hours."
            tag="p"
            className="text-gray-700 mb-8"
          />

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="location">📍</span> Address: <EditableText page="contact" section="info" field="address" defaultValue={contactInfo.address} tag="span" className="inline" />
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="phone">📞</span> Phone: <EditableText page="contact" section="info" field="phone" defaultValue={contactInfo.phone} tag="span" className="inline" />
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="email">✉️</span> Email: <a href="mailto:saanvihealthcarecentre@gmail.com" className="text-blue-600 hover:underline"><EditableText page="contact" section="info" field="email" defaultValue={contactInfo.email} tag="span" className="inline" /></a>
            </p>
            <p className="mb-4 text-lg text-gray-800">
              <span role="img" aria-label="time">⏰</span> Timings: <EditableText page="contact" section="info" field="timings" defaultValue={contactInfo.timings} tag="span" className="inline" />
            </p>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Find Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our clinic in Juinagar, Navi Mumbai. We're conveniently located and easily accessible.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <GoogleMap className="w-full" />
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href={`https://maps.app.goo.gl/m1qetsREyBZhYUcb7`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              <span className="mr-2">📍</span>
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
