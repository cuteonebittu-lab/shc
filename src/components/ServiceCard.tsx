import React from 'react';
import EditableText from './EditableText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
interface ServiceCardProps {
  icon: string; 
  title: string;
  description: string;
  page?: string;
  section?: string;
  field?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  page = 'home', 
  section = 'services', 
  // field = 'service'
}) => {
  const serviceId = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
      <FontAwesomeIcon icon={icon.split(' ') as any} className="text-green-700 text-4xl mb-4" />
      <EditableText
        page={page}
        section={section}
        field={`${serviceId}-title`}
        defaultValue={title}
        tag="h4"
        className="text-xl font-semibold mb-2"
      />
      <EditableText
        page={page}
        section={section}
        field={`${serviceId}-description`}
        defaultValue={description}
        tag="p"
        className="text-gray-600"
        multiline={true}
      />
    </div>
  );
};

export default ServiceCard;
