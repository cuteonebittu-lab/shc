import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { doctors } from './About';
import { getDoctorTimings, generateTimeSlots } from '../utils/appointmentUtils';
import Select from '../components/ui/Select'; // Import the custom Select component

// Form validation schema
const appointmentSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
  age: z.string().regex(/^\d+$/, 'Age must be a number').optional().or(z.literal('')),
  gender: z.enum(['Male', 'Female', 'Other', ''], { message: 'Please select a gender' }),
  mobileNumber: z.string().regex(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number'),
  emailAddress: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  preferredDoctor: z.string().min(1, 'Please select a doctor'),
  consultationType: z.enum(['In-Clinic Visit', 'Online Video Consultation', ''], { message: 'Please select a consultation type' }),
  preferredDate: z.string().refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Please select a future date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  additionalMessage: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const Appointment = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const preferredDoctor = watch('preferredDoctor');
  const [timeSlots, setTimeSlots] = useState<{ value: string; label: string }[]>([]);
  const consultationType = watch('consultationType'); // Watch for changes in consultation type

  useEffect(() => {
    if (preferredDoctor && consultationType) {
      const timings = getDoctorTimings(preferredDoctor, consultationType);
      if (timings) {
        const slots = generateTimeSlots(timings);
        setTimeSlots(slots);
      } else {
        setTimeSlots([]);
      }
      setValue('preferredTime', ''); // Reset preferred time when doctor or consultation type changes
    } else {
      setTimeSlots([]);
      setValue('preferredTime', '');
    }
  }, [preferredDoctor, consultationType, setValue]);

  const onSubmit = async (data: AppointmentFormData) => {
    // Format the message for WhatsApp
    const text = `Hello! I would like to book an appointment at your healthcare centre.
Full Name: ${data.fullName}
Age: ${data.age || 'N/A'}
Gender: ${data.gender || 'N/A'}
Mobile Number: ${data.mobileNumber}
Email Address: ${data.emailAddress || 'N/A'}
Preferred Doctor: ${data.preferredDoctor}
Consultation Type: ${data.consultationType}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Additional Message: ${data.additionalMessage || 'No additional notes'}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodedText}`, '_blank');
  };

  const doctorOptions = doctors.map(doctor => ({
    value: `${doctor.name} - ${doctor.title}`,
    label: `${doctor.name} - ${doctor.title}`,
  }));

  return (
    <>
      <Helmet>
        <title>Book Appointment | Saanvi Healthcare Centre</title>
        <meta 
          name="description" 
          content="Book your appointment at Saanvi Healthcare Centre with our expert General Physician or Ayurveda Specialist."
        />
        <meta name="keywords" content="Book doctor appointment, General Physician, Ayurveda Doctor, Saanvi Healthcare Centre" />
      </Helmet>

      {/* HERO */}
      <motion.section 
        className="pt-32 pb-12 bg-green-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-green-800">Book Your Appointment</h2>
        <p className="text-lg text-gray-700 mt-3">Choose your preferred doctor, date, and consultation type below.</p>
      </motion.section>

      {/* FORM SECTION */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">Patient Information</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                {...register('fullName')} 
              />
              {errors.fullName && (
                <p className="mt-1 text-red-600 text-sm">{errors.fullName.message}</p>
              )}
            </div>

            {/* Age & Gender */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input 
                  type="number" 
                  placeholder="Your age" 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  {...register('age')} 
                />
                {errors.age && (
                  <p className="mt-1 text-red-600 text-sm">{errors.age.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender</label>
                <select 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  {...register('gender')}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                {errors.gender && (
                  <p className="mt-1 text-red-600 text-sm">{errors.gender.message}</p>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                <input 
                type="tel" 
                placeholder="Enter your mobile number" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                {...register('mobileNumber')} 
              />
                {errors.mobileNumber && (
                  <p className="mt-1 text-red-600 text-sm">{errors.mobileNumber.message}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email (optional)" 
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  {...register('emailAddress')} 
                />
                {errors.emailAddress && (
                  <p className="mt-1 text-red-600 text-sm">{errors.emailAddress.message}</p>
                )}
              </div>
            </div>

            {/* Doctor Selection */}
            <Select
              label="Preferred Doctor"
              options={doctorOptions}
              {...register('preferredDoctor')}
              error={errors.preferredDoctor?.message}
            />

            {/* Consultation Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Consultation Type</label>
              <select 
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                {...register('consultationType')} 
              >
                <option value="">Select Type</option>
                <option>In-Clinic Visit</option>
                <option>Online Video Consultation</option>
              </select>
              {errors.consultationType && (
                <p className="mt-1 text-red-600 text-sm">{errors.consultationType.message}</p>
                )}
              </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                <input 
                type="date" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                {...register('preferredDate')} 
              />
                {errors.preferredDate && (
                  <p className="mt-1 text-red-600 text-sm">{errors.preferredDate.message}</p>
                )}
              </div>
              <Select
                label="Preferred Time"
                options={timeSlots}
                {...register('preferredTime')}
                error={errors.preferredTime?.message}
                disabled={!preferredDoctor || !consultationType}
                helpText={!preferredDoctor ? 'Please select a doctor to see available time slots.' : !consultationType ? 'Please select a consultation type to see available time slots.' : ''}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Additional Message / Health Concern</label>
              <textarea 
                rows={4} 
                placeholder="Briefly describe your concern..." 
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                {...register('additionalMessage')}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-green-700 text-white px-10 py-3 rounded-full font-semibold hover:bg-green-800 transition"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
              </button>
            </div>
          </form>
        </div>
      </motion.section>

      {/* GOOGLE MAP */}
      <section className="py-16 bg-green-100">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-green-800 mb-6">Visit Our Clinic</h3>
          <div className="flex items-center justify-center mb-4">
            <img src="/assets/images/shc_logo_exact.svg" alt="Saanvi Healthcare Centre Logo" className="h-12 mr-4" />
            <p className="text-gray-700">
              No.6 Saraswati Sadan CHS, Sec: 23, Plot- 211, Juinagar, Navi Mumbai
            </p>
          </div>

          {/* Replace with your actual Google Map embed */}
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965258.4184510203!2d71.7759363608222!3d19.083921509681474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11beda85711%3A0xa324137ba3c1c4da!2sSaanvi%20Healthcare%20Centre!5e0!3m2!1sen!2sus!4v1763526734859!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
