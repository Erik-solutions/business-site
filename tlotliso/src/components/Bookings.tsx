import React, { useState } from 'react';


interface BookingCalendarProps{
    callendarOpen:boolean;
    closeCalendar:()=>void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ callendarOpen,closeCalendar }) => {
    
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [service,setService]=useState('web development');  
  const [phone,setPhone]=useState('');

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ];

  const availableServices =[
    'Web Design',
    'web Development',
    'software Engineering ',
    'IT Systems '

  ]

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
      closeCalendar();
      
      
    } else {
      alert('Please select a date and time.');
    }
  };

  //submit booking to server
  const bookingData = {
    name,
    email,
    service,
    phone,
    date: selectedDate,
    time: selectedTime,
  };

  const handleSubmitBooking = async () => {
    try {
      const response = await fetch('https://business-site-qqev.onrender.com/form/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const data = await response.json();
      console.log('Booking successful:', data);
      alert('Booking confirmed!');
      closeCalendar();
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again.');
    }
  };

  if (!callendarOpen) return null;
  
  
  return (

    <div className="bookings__container fixed inset-0 z-50 flex items-center
    justify-center  bg-opacity-50 py-4 
    transition-opacity duration-300">
     <div className=" py-4 book__container  rounded-lg border border-gray-200
     shadow-lg w-[80%] h-[100%] px-6 max-w-md relative">
      <h2 className="text-2xl font-bold ">Book an Appointment</h2>
      <label className="block  text-sm mb-2 font-medium text-red-500">
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

    
    {selectedDate && selectedTime && (
      <>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
          />
        </div> 

        <div>
          <label  className="block text-sm font-medium text-gray-700 mb-2"> Select Service</label>
           <select id="myDropdown" value={service} onChange={(e) => setService(e.target.value)}>
            {availableServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
      </select>
        </div>

         
         <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded  placeholder-red-400"
            placeholder="Enter your email"
          />
        </div> 
        
         <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone number:
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded  placeholder-red-400"
            placeholder="Enter your phone"
          />
        </div> 
        
        </div>
        
        
        
         </>
    )}
 
      <button
        onClick={ () => {handleBooking(); handleSubmitBooking();} }
        className="w-full bg-green-500 text-white p-2 
        rounded hover:bg-green-600 mt-0"
        
      >Confirm Booking</button>


        
      
    </div>  </div>  
  );
};

export default BookingCalendar;
