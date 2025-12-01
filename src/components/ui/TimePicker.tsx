import { motion } from 'framer-motion';

interface TimeSlot {
  value: string;
  label: string;
  available?: boolean;
}

interface TimePickerProps {
  label?: string;
  error?: string;
  helpText?: string;
  value: string;
  onChange: (time: string) => void;
  timeSlots: TimeSlot[];
  required?: boolean;
  disabled?: boolean;
}

const TimePicker = ({
  label,
  error,
  helpText,
  value,
  onChange,
  timeSlots,
  required,
  disabled
}: TimePickerProps) => {
  const handleSelect = (timeSlot: TimeSlot) => {
    if (!timeSlot.available) return;
    onChange(timeSlot.value);
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {timeSlots.length > 0 ? (
          timeSlots.map((slot, index) => (
            <motion.button
              key={slot.value}
              type="button"
              onClick={() => handleSelect(slot)}
              disabled={disabled || !slot.available}
              aria-label={`Select ${slot.label}`}
              aria-pressed={slot.value === value}
              aria-disabled={disabled || !slot.available}
              className={`
                px-3 py-2 rounded-lg text-sm border
                ${slot.value === value ? 'bg-emerald-500 text-white border-emerald-500' : 'text-gray-700 border-gray-300'}
                ${disabled || !slot.available ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:bg-emerald-100 hover:border-emerald-300'}
                transition-all duration-200 ease-in-out
              `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.04 }
              }}
            >
              {slot.label}
            </motion.button>
          ))
        ) : (
          <div className="col-span-full text-sm text-gray-500 p-2 bg-gray-50 rounded-lg">
            {helpText || 'Please select a doctor and consultation type to see available times.'}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TimePicker;
