import React from 'react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-8 text-center">
      <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Centre Logo" className="h-12 mx-auto mb-2" />
      <EditableText
        page="footer"
        section="contact"
        field="address"
        defaultValue="Saanvi Healthcare Centre, No.6 Saraswati Sadan CHS, Sec: 23, Plot- 211, Juinagar, Navi Mumbai"
        tag="p"
        className="text-sm mb-2"
      />
      <EditableText
        page="footer"
        section="copyright"
        field="text"
        defaultValue="© 2025 All Rights Reserved | Holistic Healing through Modern Medicine & Ayurveda"
        tag="p"
        className="text-sm mt-2"
      />
    </footer>
  );
};

export default Footer;
