import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import EditableText from '../components/EditableText';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-gray-800 font-sans">
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-green-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <EditableText
            page="home"
            section="hero"
            field="title"
            defaultValue="Holistic Healing through Modern Medicine & Ayurveda"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
          />
          <EditableText
            page="home"
            section="hero"
            field="description"
            defaultValue="Experience the best of both worlds — scientific precision with natural wellness."
            tag="p"
            className="text-lg text-gray-700 mb-6"
          />
          <Link to="/appointment" className="inline-block bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">Book Appointment</Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:flex items-center">
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Logo" className="rounded-2xl shadow-lg w-64 h-64 object-contain" />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <div className="flex items-center mb-4">
<<<<<<< HEAD
              <img src="/assets/images/shc_logo_exact.svg" alt="Holistic Healthcare Logo" className="h-12 mr-4" />
=======
>>>>>>> 43d6f935580b1dfe8369dacca4b7e18ee72a4cb7
              <EditableText
                page="home"
                section="about"
                field="title"
                defaultValue="Welcome to Saanvi Healthcare Centre"
                tag="h3"
                className="text-3xl font-bold text-green-800"
              />
            </div>
            <EditableText
              page="home"
              section="about"
              field="description1"
              defaultValue="Led by Dr. Dhirendra Yadav (MD, Internal Medicine) and Dr. Sunitha Yadav (MD, Ayurveda Medicine), our centre brings together the strengths of modern diagnostics and Ayurvedic wisdom to offer holistic, patient-focused care."
              tag="p"
              className="text-gray-700 mb-4"
              multiline={true}
            />
            <EditableText
              page="home"
              section="about"
              field="description2"
              defaultValue="Our mission is to heal both body and mind — through compassion, experience, and a blend of science and tradition."
              tag="p"
              className="text-gray-700 mb-6"
              multiline={true}
            />
            <Link to="/about" className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition">Know More</Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <EditableText
            page="home"
            section="services"
            field="title"
            defaultValue="Our Key Services"
            tag="h2"
            className="text-4xl font-bold text-green-800 mb-10"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="fa-solid fa-user-md"
              title="General Medicine"
              description="Comprehensive care for diabetes, hypertension, thyroid, and lifestyle disorders."
            />
            <ServiceCard
              icon="fa-solid fa-candy-cane"
              title="Diabetes and Complications"
              description="Specialized management for diabetes, including prevention and treatment of complications."
            />
            <ServiceCard
              icon="fa-solid fa-heartbeat"
              title="Cardio & Lifestyle Care"
              description="Specialized management for heart, blood pressure, and metabolic conditions."
            />
            <ServiceCard
              icon="fa-solid fa-lungs"
              title="Respiratory Illness"
              description="Diagnosis and treatment for asthma, bronchitis, and other lung conditions."
            />
            <ServiceCard
              icon="fa-solid fa-brain"
              title="Nervous System Disorders"
              description="Care for neurological conditions like migraines, neuropathy, and stroke recovery."
            />
            <ServiceCard
              icon="fa-solid fa-medkit"
              title="Liver Care"
              description="Comprehensive management for liver diseases and promoting liver health."
            />
            <ServiceCard
              icon="fa-solid fa-water"
              title="Renal Disorders"
              description="Treatment and management of kidney diseases and urinary tract issues."
            />
            <ServiceCard
              icon="fa-solid fa-venus-mars"
              title="Sexual Health"
              description="Confidential consultations and treatments for various sexual health concerns."
            />
            <ServiceCard
              icon="fa-solid fa-leaf"
              title="Ayurveda Consultation"
              description="Authentic Ayurvedic treatments for holistic wellness and disease prevention."
            />
            <ServiceCard
              icon="fa-solid fa-female"
              title="Women's Health"
              description="Comprehensive solutions for PCOD, thyroid, hormonal balance, and wellness."
            />
            <ServiceCard
              icon="fa-solid fa-hand-sparkles"
              title="Skin & Hair Care"
              description="Natural therapies for radiant skin, healthy hair, and inner vitality."
            />
            <ServiceCard
              icon="fa-solid fa-utensils"
              title="Diet and Nutrition"
              description="Personalized diet plans for a healthier lifestyle."
            />
            <ServiceCard
              icon="fa-solid fa-weight"
              title="Weight Management"
              description="Effective strategies for sustainable weight loss and maintenance."
            />
            <ServiceCard
              icon="fa-solid fa-hands-helping"
              title="Marma Therapy"
              description="Energy-point massage for deep relaxation and healing."
            />
            <ServiceCard
              icon="fa-solid fa-bone"
              title="Spine and Joint Disorders"
              description="Specialized treatments for back pain, arthritis, and other musculoskeletal conditions."
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default Home;
