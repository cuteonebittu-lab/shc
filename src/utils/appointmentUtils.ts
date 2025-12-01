import { doctors } from '../data/doctors';

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

export const getDoctorTimings = (doctorName: string | undefined, consultationType: string): string | undefined => {
  if (!doctorName) return undefined; // Handle undefined doctorName

  // doctorName is provided by the select as "Name - Title" (or just name). Extract a candidate name
  const candidate = doctorName.includes(' - ') ? doctorName.split(' - ')[0].trim() : doctorName.trim();

  // Try several matching strategies to be robust against whitespace/casing/format differences
  let doctor = doctors.find(d => d.name === candidate);
  if (!doctor) doctor = doctors.find(d => d.name.toLowerCase() === candidate.toLowerCase());
  if (!doctor) {
    // fallback: find if candidate contains stored name or vice-versa (substr match)
    doctor = doctors.find(d => candidate.toLowerCase().includes(d.name.toLowerCase()) || d.name.toLowerCase().includes(candidate.toLowerCase()));
  }

  if (!doctor) return undefined;

  if (consultationType === 'In-Clinic Visit') {
    return doctor.inClinicTimings;
  } else if (consultationType === 'Online Video Consultation') {
    return doctor.videoTimings;
  }

  return undefined;
};

export const generateTimeSlots = (timings: string, intervalMinutes: number = 30): { value: string; label: string; available: boolean }[] => {
  if (!timings) return [];

  const [startTimeStr, endTimeStr] = timings.split(' to ');
  if (!startTimeStr || !endTimeStr) return [];

  const parseTime = (timeStr: string): Date | null => {
    const [time, ampm] = timeStr.toLowerCase().split(' ');
    const timeparts = time.split(':').map(Number);
    let hours = timeparts[0];
    const minutes = timeparts[1];

    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const startTime = parseTime(startTimeStr);
  const endTime = parseTime(endTimeStr);

  if (!startTime || !endTime) return [];

  const slots: { value: string; label: string; available: boolean }[] = [];
  const currentTime = startTime;

  while (currentTime.getTime() <= endTime.getTime()) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const slot = `${formattedHours}:${formattedMinutes} ${ampm}`;
    slots.push({ value: slot, label: slot, available: true });

    currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
  }

  return slots;
};
