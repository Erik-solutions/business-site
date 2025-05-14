import React, { useState } from 'react';

interface BookingCalendarProps{
    callendarOpen:boolean;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ callendarOpen }) => {
    
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Implement booking logic here
      alert(`Booked for ${selectedDate} at ${selectedTime}`);
    } else {
      alert('Please select a date and time.');
    }
  };

  if (!callendarOpen) return null;
  
  
  return (

    <div className="fixed inset-0 z-50 flex items-center
    justify-center bg-black bg-opacity-50 py-4 
    transition-opacity duration-300">
     <div className="bg-white py-4  rounded-lg 
     shadow-lg w-[80%] h-[100%] px-6 max-w-md relative">

    
      <h2 className="text-2xl font-bold ">Book an Appointment</h2>
      <label className="block  text-sm mb-2 font-medium text-gray-700">
        Select a Date:
      </label>
      <input
        type="date"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        onChange={handleDateChange}
      />

      {selectedDate && (
        <>
          <label className="block mb-6 text-sm font-medium text-gray-700">
            Select a Time:
          </label>
          <div className=" grid grid-cols-3 grid-auto-rows-[80px] gap-6 mb-6">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-1  w-[4.8rem] text-xs rounded border ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </>
      )}

      <button
        onClick={handleBooking}
        className="w-full bg-green-500 text-white p-2 
        rounded hover:bg-green-600 mt-0"
      >
        Confirm Booking
      </button>
    </div>  </div>  
  );
};

export default BookingCalendar;
