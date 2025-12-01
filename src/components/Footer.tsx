import EditableText from './EditableText';
import { CLINIC_ADDRESS } from '../config/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-8 text-center">
      <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Centre Logo" className="h-12 mx-auto mb-2" loading="lazy" />
      <EditableText
        page="footer"
        section="contact"
        field="address"
        defaultValue={CLINIC_ADDRESS}
        tag="p"
        className="text-sm mb-2"
      />
      <EditableText
        page="footer"
        section="copyright"
        field="text"
        defaultValue="© 2025 All Rights Reserved | SAANVI HEALTHCARE CENTRE"
        tag="p"
        className="text-sm mt-2"
      />
      <EditableText
        page="footer"
        section="tagline"
        field="text"
        defaultValue="Holistic Healing through Modern Medicine & Ayurveda"
        tag="p"
        className="text-xs text-green-200 mt-1"
      />
    </footer>
  );
};

export default Footer;
