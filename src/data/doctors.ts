import type { Doctor } from '../utils/appointmentUtils';

export const doctors: Doctor[] = [
  {
    name: 'Dhirendra Yadav',
    title: 'MBBS, MD General Medicine, CCDM (Diabetes)',
    specialty: 'General Medicine',
    experience: '15+ years',
    image: '/assets/dr-dhirendra-yadav.svg',
    description: 'Dhirendra Yadav is a highly experienced general physician with expertise in managing chronic diseases and preventive healthcare.',
    inClinicTimings: '7:00 pm to 9:30 pm',
    videoTimings: '6:00 pm to 7:00 pm',
  },
  {
    name: 'Sunitha Yadav',
    title: 'BAMS, MD Ayurveda Medicine, PGD in Clinical Nutrition and Dietetics',
    specialty: 'Ayurveda',
    experience: '12+ years',
    image: '/assets/dr-sunitha-yadav.svg',
    description: 'Sunitha Yadav specializes in traditional Ayurvedic treatments and has helped numerous patients achieve holistic wellness.',
    inClinicTimings: '10:00 am to 1:30 pm',
    videoTimings: '6:00 pm to 7:00 pm',
  },
];
