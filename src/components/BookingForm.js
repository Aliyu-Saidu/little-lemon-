import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import ConfirmedBooking from "./ConfirmedBooking";
import '../App.css';
// import Button from "./Button";
// import Button from "./Button";

const BookingForm = ({ bookedTableTimes, availableTimeSlots, handleBookingSubmit }) => {
 // const navigate = useNavigate();

 // State variables for user input
 const specialOccassions = ['Date', 'Anniversary', 'Meeting', 'Birthday', 'Other'];
 const [selectedDate, setSelectedDate] = useState('');
 const [selectedTime, setSelectedTime] = useState('');
 const [numberOfGuests, setNumberOfGuests] = useState(1);
 const [selectedOccasion, setSelectedOccasion] = useState('');
 const [specialRequest, setSpecialRequest] = useState('');
 const [isFocused, setIsFocused] = useState(false);
 const [dateError, setDateError] = useState('');
 const [timeError, setTimeError] = useState('');
 const [guestsError, setGuestsError] = useState('');
 const [occasionError, setOccasionError] = useState('');
 const [requestError, setRequestError] = useState('');

 //Handle date selection
 const handleDateSelect = (e) => {
  setSelectedDate(e.target.value);
 };

 // Handle time selection
 const handleTimeSelect = (e) => {
  setSelectedTime(e.target.value);
 };

 // Handle number of guests selection
 const handleNumberOfGuestsChange = (e) => {
  setNumberOfGuests(parseInt(e.target.value));
 };

 // Handle special occasion selection
 const handleSpecialOccasionSelect = (e) => {
  setSelectedOccasion(e.target.value);
 };

 // Handle special request input
 const handleSpecialRequestInput = (e) => {
  setSpecialRequest(e.target.value);
 };

 // Handle Focus
 const handleFocus = () => {
  const selectedDateInput = document.getElementById('date');
  if(isFocused && selectedDate) {
   selectedDateInput.classList.remove('error-input');
   setDateError('');
   setIsFocused(false);
  }
 };

 // Handle Blur
 const handleBlur = () => {
  const selectedDateInput = document.getElementById('date');
  if(!isFocused && !selectedDate) {
   selectedDateInput.classList.add('error-input');
   setDateError('Please select a date.');
   setIsFocused(true)
  }
 };

 // Filter available time slots based on booked table times
 const filteredTimeSlots = availableTimeSlots.filter(
  (timeSlot) => !bookedTableTimes.includes(`${selectedDate} ${timeSlot}`)
 );

  // Validate user inputs before submitting the booking
 const handleSubmitBooking = (e) => {
  e.preventDefault();
  let isValid = true;

  // const selectedTimeInput = document.getElementById('time');
  // const numberOfGuestsInput = document.getElementById('guest');
  // const selectedOccasionInput = document.getElementById('occasion');
  // const specialRequestInput = document.getElementById('request');

  // Validate selected date
  if(!selectedDate) {
   setDateError('Please select a date.');
   isValid = false;
  } else {
   setDateError('');
  };

  // Validate selected time
  if (!selectedTime) {
   setTimeError('Please select a time.');
   isValid = false;
  } else if (!filteredTimeSlots.includes(selectedTime)) {
   setTimeError('Selected time slot is not available for the chosen date. Please choose another time.');
   isValid = false;
  } else {
   setTimeError('');
  };

  // Validate number of guests
  if (numberOfGuests < 1 || numberOfGuests > 12) {
   setGuestsError('Number of guests must be between 1 and 12.');
   isValid = false;
  } else {
   setGuestsError('');
  };

  //Validate selected occasion
  if (!selectedOccasion) {
   setOccasionError('please select an occasion.');
   isValid = false;
  } else {
   setOccasionError('');
  };

  // Validate special request
  if (!specialRequest) {
   setRequestError('Please enter a special request.');
   isValid = false;
  } else {
   setRequestError('');
  };

  // Submit the booking if all inputs are valid

  // if (selectedDate && selectedTime && numberOfGuests > 0 && selectedOccasion) {
  //  // Check if selected time is available for the selected date
  //  const isAvailable = filteredTimeSlots.includes(selectedTime);

   if (isValid) {
    // update booked table times using parent component's handleBookingSubmit function
    const bookedTime = `${selectedDate} ${selectedTime}`;
    handleBookingSubmit(bookedTime);

    // // Clear form fields after successful booking
    setSelectedDate('');
    setSelectedTime('');
    setNumberOfGuests(1);
    setSelectedOccasion('');
    setSpecialRequest('');

    alert('Your booking has been confirmed.');

   }
 };

 return (
  <section className="booking_form">
   <h1>Restaurant Booking Form</h1>
  <div className="time-date-wraper">

   <article className="date error-input-parent">
   <label htmlFor="date">Select Date:{<span>*</span>} </label>
   <input
   type = "date"
   id="date"
   value = {selectedDate}
   onFocus = {handleFocus}
   onBlur = {handleBlur}
   onChange = {handleDateSelect}
   />
   {dateError && <p className="error">{dateError}</p>}
   </article>

   <article className="time error-input-parent">
   <label htmlFor="time">Select time:{<span>*</span>}</label>
   <select
   id="time"
   value = {selectedTime}
   onChange = {handleTimeSelect}
   onBlur = {handleBlur}
   >
    <option>Select a time</option>
    {filteredTimeSlots.map((timeSlot) => (
     <option key = {timeSlot} value = {timeSlot}>
      {timeSlot}
     </option>
    ))}
   </select>
   {timeError && <p className="error">{timeError}</p>}
   <p>Booked Table Dates and Times: {bookedTableTimes.join(', ')} </p>
   </article>
   </div>

   <article className="guest error-input-parent">
   <label htmlFor="guest">Number of Guests:{<span>*</span>}</label>
   <input
   id="guest"
   type = "number" min = {1} max = {12}
   value = {numberOfGuests}
   onChange = {handleNumberOfGuestsChange}
   onBlur = {handleBlur}
   />
   {guestsError && <p className="error">{guestsError}</p>}
   </article>

   <article className="occasion error-input-parent">
   <label htmlFor="occasion">Special Occasion:{<span>*</span>}</label>
   <select
   id="occasion"
   value = {selectedOccasion}
   onChange={handleSpecialOccasionSelect}
   onBlur = {handleBlur}
   >
    <option>Select your favourite occasion</option>
    {specialOccassions.map((occasion) => (
     <option key={occasion} value={occasion}>
      {occasion}
     </option>
    ))}
   </select>
   {occasionError && <p className="error">{occasionError}</p>}
   </article>

   <article className="request error-input-parent">
   <label htmlFor="request">Special Request:{<span>*</span>}</label>
   <textarea
   id="request"
   value={specialRequest}
   onChange={handleSpecialRequestInput}
   onBlur = {handleBlur}
   />
   {requestError && <p className="error">{requestError}</p>}
   </article>
    <button onClick={handleSubmitBooking}>Book</button>
  </section>
 )
}

export default BookingForm;

/*
import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import AvailableTimes from "./AvailableTimes";
import '../App.css';
import Button from "./Button";

const BookingInfo = () => {
 // const [availableTimes, setAvailableTimes] = props;
 const [availableTimes] = useState([ // the state setter function is ignored because we dont need to update the availableTimes array.
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
 ]);
 const [bookedTimes, setBookedTimes] = useState([]);
 const [selectedTime, setSelectedTime] = useState('');

 const handleTimeSelect = (e) => {
  setSelectedTime(e.target.value);

  if (!bookedTimes.includes(e.target.value)) {
   setBookedTimes(prevTimes => [...prevTimes, e.target.value]);
  }
 }

 const availableSlot = availableTimes.filter(time => !bookedTimes.includes(time));

 const [formData, setFormData] = useState({
  // time: '',
  date: '',
  numberOfGuests: '',
  occasion: '',
  seatingLocation: '',
  specialRequest: '',
 });



 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

  const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Submitted');
   setSelectedTime('');
   setFormData({});
  }

  console.log('Booking submitted successfully: ', formData);

 return (
  <article className="form">
   <h2>Book your table</h2>
   <form method="post">

    <section className="inline">
     <div>
      <label htmlFor="time">Time:</label>
      <select id="time" name="time" value={selectedTime} onChange={handleTimeSelect}>
       <option>Select a time</option>
       {availableSlot.map((time) => (
        <option key={time} value={time}>
         {time}
        </option>
       ))}
      </select>
      <p>Booked times: {bookedTimes.join(', ')}</p>
     </div>

     <div>
      <label htmlFor="date">Date:</label>
      <input
       id="date"
       type="date"
       name="date"
       value={formData.date}
       onChange={handleChange} />
     </div>

    </section>

    <div>
    <label htmlFor="guests">Number of guests:</label>
     <input
      id = "guests"
      type="number"
      name="numberOfGuests"
      min = {1}
      max = {12}
      value={formData.numberOfGuests}
      onChange={handleChange}
      placeholder="Number of guests"
      />
    </div>

    <div>
    <label htmlFor="occasion">Special occasion:</label>
     <select id = "occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
      <option value="">Select an occasion</option>
      <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
      <option value="dating">Dating</option>
      <option value="meeting">Meeting</option>
     </select>
    </div>

    <div>
    <label htmlFor="seatingLocation">Seating location:</label>
     <select id = "seatingLocation" name="seatingLocation" value={formData.seatingLocation} onChange={handleChange}>
     <option value="">Select a location</option>
     <option value="outdoor">Outdoor</option>
     <option value="indoor">Indoor</option>
     </select>
    </div>

    <div>
    <label htmlFor="specialRequest">Request</label>
     <textarea
     id="specialRequest"
      name="specialRequest"
      value={formData.specialRequest}
      onChange={handleChange}
      placeholder="Special request" />
    </div>

    <div>
    <Link to = "personaldata" className="link">
    { <button type="submit">Next</button>}
    { <Button type = 'submit' onClick = {handleSubmit} >Next</Button>}
    </Link>
    <Button type = 'submit' onClick={handleSubmit}>Book</Button>
    </div>
   </form>
  </article>
 );
}

export default BookingInfo;


*/