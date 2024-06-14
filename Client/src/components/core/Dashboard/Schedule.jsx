// CaseScheduler.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CaseScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const currentDate = new Date();

  // Calculate the maximum date (1 month from the current date)
  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + 1);

  const handleDateChange = (date) => {
    // Handle date change logic here
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    if (selectedDate) {
      alert(`Case scheduled for ${selectedDate.toLocaleString()}`);
    } else {
      alert('Please select a date and time for the case hearing.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='font-custom text-velvet-100 text-4xl font-bold'>Commercial Case Scheduler</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="MM/dd/yyyy h:mm aa"
        minDate={currentDate} // Set minimum date to the current date
        maxDate={maxDate} // Set maximum date to 1 month in the future
        filterDate={(date) => date > currentDate && date <= maxDate} // Disable dates beyond 1 month
        filterTime={(time) => time.getHours() >= 10 && time.getHours() <= 16} // Allow time between 10 AM to 4 PM

        className='border-2 border-black mt-5'
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Schedule Case
      </button>
      <div style={{ marginTop: '20px' }}>
        {selectedDate && (
          <p>Selected Date and Time: {selectedDate.toLocaleString()}</p>
        )}
      </div>
    </div>
  );
};

export default CaseScheduler;