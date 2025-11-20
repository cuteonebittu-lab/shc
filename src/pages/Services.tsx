// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import EditableText from '../components/EditableText';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = {
  drDhirendra: [
    { icon: '🍬', title: 'Diabetes Management', description: 'Medical therapy, sugar monitoring, lifestyle & diet optimization.' },
    { icon: '❤️', title: 'Hypertension (High Blood Pressure)', description: 'BP management, medication adjustment, cardiac protection.' },
    { icon: '💧', title: 'Renal (Kidney) Impairment', description: 'Chronic kidney disease management, diet & drug monitoring.' },
    { icon: '💗', title: 'Cardiac Health', description: 'Cholesterol control, ECG evaluation, preventive cardiology.' },
    { icon: '🧠', title: 'Neurological Conditions', description: 'Migraine, stroke follow-up, neuropathy & nerve care.' },
    { icon: '🫁', title: 'Respiratory Disorders (Asthma, COPD)', description: 'Inhalation therapy, medication regulation, pulmonary rehab.' },
    { icon: '🔥', title: 'Digestive Disorders (GERD, IBS, Ulcers)', description: 'Evidence-based medicine with dietary modification.' },
    { icon: '🦴', title: 'Joint & Bone Disorders (Arthritis, Osteoporosis)', description: 'Pain management, physiotherapy integration.' },
    { icon: '🩺', title: 'General Health Check-ups', description: 'Preventive health screenings, vaccinations, medical reviews.' },
    { icon: '💉', title: 'Post-COVID Recovery & Fatigue', description: 'Immunity restoration, lung function support, energy tonics.' },
    { icon: '💊', title: 'Chronic Disease Management', description: 'Long-term care with integrated follow-up and medical supervision.' },
    { icon: '👵', title: 'Geriatric Care', description: 'Specialized care for elderly patients, focusing on age-related health issues.' }
  ],
  drSunitha: [
    { icon: '🌿', title: 'Detoxification Therapy', description: 'Complete body cleansing and rejuvenation treatments.' },
    { icon: '💆', title: 'Stress, Anxiety & Insomnia (Manasika Rogas)', description: 'Oil Drip Therapy, Nasal Administration, Oil Massage, herbal support.' },
    { icon: '🍎', title: 'Obesity & Weight Management', description: 'Herbal fat-burners, metabolic correction, yoga, and diet.' },
    { icon: '⚕️', title: 'Spine and nerve diseases', description: 'Ayurvedic treatments for back pain, sciatica, and neurological support.' },
    { icon: '🤰', title: 'Women’s Health (PCOD, Menstrual Disorders)', description: 'Hormonal balancing, fertility care, and prenatal therapies.' },
    { icon: '👶', title: 'Pediatric Care (Bal Chikitsa)', description: 'Immunity boosting and growth support with herbal tonics.' },
    { icon: '🦴', title: 'Joint & Bone Disorders (Sandhivata, Osteoarthritis)', description: 'Ayurvedic massage, medicated oils, and herbal formulations.' },
    { icon: '🔥', title: 'Digestive Disorders (Ajeerna, Acidity, IBS)', description: 'Herbal detox, gut balancing, and dietary correction.' },
    { icon: '💧', title: 'Renal & Urinary Disorders (Mutravaha Srotas)', description: 'Herbal diuretics, detoxification, and kidney care.' },
    { icon: '🌸', title: 'Skin & Hair Care (Psoriasis, Dandruff, Hair Fall)', description: 'Herbal packs, medicated oils, and internal cleansing.' },
    { icon: '🌞', title: 'Rejuvenation & Rasayana Therapy', description: 'Vitality, anti-aging, and immunity-building treatments.' },
    { icon: '🙌', title: 'Marma Therapy', description: 'Energy-point massage for deep relaxation and healing.' }
  ]
};

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Explore our General Medicine and Ayurveda services at Saanvi Healthcare Centre — blending modern care with traditional healing."
        />
      </Helmet>

      <motion.section 
        className="pt-28 pb-16 bg-green-50 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <EditableText
            page="services"
            section="hero"
            field="title"
            defaultValue="Our Medical & Ayurvedic Services"
            tag="h1"
            className="text-4xl font-bold text-green-800 mb-4"
          />
          <EditableText
            page="services"
            section="hero"
            field="description"
            defaultValue="Integrating modern diagnostics and Ayurveda's timeless wisdom to deliver holistic healing at our centre."
            tag="p"
            className="text-gray-700 text-lg"
          />
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <EditableText
            page="services"
            section="dr-dhirendra"
            field="title"
            defaultValue="🩺 Dr. Dhirendra (MBBS, MD)"
            tag="h2"
            className="text-3xl font-bold text-green-800 text-center mb-4"
          />
          <EditableText
            page="services"
            section="dr-dhirendra"
            field="specialty"
            defaultValue="Specialist in Internal Medicine & Chronic Disease Management"
            tag="p"
            className="text-center text-gray-600 mb-10"
          />
          <div className="grid md:grid-cols-3 gap-10">
            {services.drDhirendra.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <EditableText
                  page="services"
                  section={`dr-dhirendra-service-${index}`}
                  field="icon"
                  defaultValue={service.icon}
                  tag="span"
                  className="text-4xl mb-4 inline-block"
                />
                <EditableText
                  page="services"
                  section={`dr-dhirendra-service-${index}`}
                  field="title"
                  defaultValue={service.title}
                  tag="h3"
                  className="text-xl font-semibold mb-2"
                />
                <EditableText
                  page="services"
                  section={`dr-dhirendra-service-${index}`}
                  field="description"
                  defaultValue={service.description}
                  tag="p"
                  className="text-gray-600"
                  multiline={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-green-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <EditableText
            page="services"
            section="dr-sunitha"
            field="title"
            defaultValue="🌿 Dr. Sunitha (MD Ayurveda)"
            tag="h2"
            className="text-3xl font-bold text-green-800 text-center mb-4"
          />
          <EditableText
            page="services"
            section="dr-sunitha"
            field="specialty"
            defaultValue="Specialist in Ayurvedic Medicine, Panchakarma & Holistic Healing"
            tag="p"
            className="text-center text-gray-600 mb-10"
          />
          <div className="grid md:grid-cols-3 gap-10">
            {services.drSunitha.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <EditableText
                  page="services"
                  section={`dr-sunitha-service-${index}`}
                  field="icon"
                  defaultValue={service.icon}
                  tag="span"
                  className="text-4xl mb-4 inline-block"
                />
                <EditableText
                  page="services"
                  section={`dr-sunitha-service-${index}`}
                  field="title"
                  defaultValue={service.title}
                  tag="h3"
                  className="text-xl font-semibold mb-2"
                />
                <EditableText
                  page="services"
                  section={`dr-sunitha-service-${index}`}
                  field="description"
                  defaultValue={service.description}
                  tag="p"
                  className="text-gray-600"
                  multiline={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
