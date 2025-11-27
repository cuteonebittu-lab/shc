import { doctors } from '../pages/About';

export interface Doctor {
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
  inClinicTimings: string; // e.g., '7:00 pm to 9:30 pm'
  videoTimings: string;    // e.g., '6:00 pm to 7:00 pm'
}

export const getDoctorTimings = (doctorName: string, consultationType: string): string | undefined => {
  const doctor = doctors.find(d => d.name === doctorName.split(' - ')[0]);
  if (!doctor) return undefined;

  if (consultationType === 'In-Clinic Visit') {
    return doctor.inClinicTimings;
  } else if (consultationType === 'Online Video Consultation') {
    return doctor.videoTimings;
  }
  return undefined;
};

export const generateTimeSlots = (timings: string, intervalMinutes: number = 30): { value: string; label: string }[] => {
  if (!timings) return [];

  const [startTimeStr, endTimeStr] = timings.split(' to ');
  if (!startTimeStr || !endTimeStr) return [];

  const parseTime = (timeStr: string): Date | null => {
    const [time, ampm] = timeStr.toLowerCase().split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const startTime = parseTime(startTimeStr);
  const endTime = parseTime(endTimeStr);

  if (!startTime || !endTime) return [];

  const slots: { value: string; label: string }[] = [];
  let currentTime = startTime;

  while (currentTime.getTime() <= endTime.getTime()) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const slot = `${formattedHours}:${formattedMinutes} ${ampm}`;
    slots.push({ value: slot, label: slot });

    currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
  }

  return slots;
};
