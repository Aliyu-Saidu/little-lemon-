import React from "react";


const ConfirmedBooking = ({bookedDate, bookedTime, numberOfGuests, selectedOccasion }) => {
 return (
  <div className="confirmation-page">
   <h1>Booking Confirmation</h1>
   <p>Your booking has been successfully confirmed.</p>
   <div className="booking-details">
    <p>Booked Date: {bookedDate}</p>
    <p>Booked Time: {bookedTime}</p>
    <p>Number of Guests: {numberOfGuests}</p>
    <p>Selected Occasion: {selectedOccasion}</p>
   </div>
  </div>
 );
};

export default ConfirmedBooking;