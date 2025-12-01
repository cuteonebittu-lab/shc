import { useNavigate } from 'react-router-dom';
import { CLINIC_WHATSAPP } from '../config/constants';

const WhatsAppButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a 
        href={`https://wa.me/${CLINIC_WHATSAPP}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition" 
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      <button 
        onClick={() => navigate('/contact')}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition" 
        title="Call Now"
      >
        <i className="fas fa-phone text-2xl"></i>
      </button>
    </div>
  );
};

export default WhatsAppButton;