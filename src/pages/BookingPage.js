import React, { useReducer } from "react";
import { Routes, Route} from 'react-router-dom';
import BookingForm from "../components/BookingForm";
import PersonalData from "../components/PersonalData";




// Define the initial state of the booking information
const initializeTimes = {
 bookedTableTimes: [], // Array to store the times of booked tables
 availableTimeSlots: [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
 ],
};

// Custome reducer function to handle state updates
const bookingReducer = (state, action) => {
 switch (action.type) {
  case 'BOOK_RESERVATION': // Action type for booking a reservation

  // Update booked table times with the newly booked time
  const updatedBookedTableTimes = [...state.bookedTableTimes, action.bookedTime];

  // Filter out the booked time slot from available time slots
  const updatedAvailableTimeSlots = state.availableTimeSlots.filter(
   (timeSlot) => timeSlot !== action.bookedTime
  );

  // Return the updated state
  return {
   ...state,
   bookedTableTimes: updatedBookedTableTimes,
   availableTimeSlots: updatedAvailableTimeSlots,
  };

  default:
   // Return the current state if no matching action type is found
   return state;
 }
};

//BookingContainer component to manage the overall booking process
const BookingPage = () => {
 // use the bookingReducer to manage the state
 const [state, dispatch] = useReducer(bookingReducer, initializeTimes);

 // Handle booking submission by receiving the booked time from BookingInfo
 const handleBookingSubmit = (bookedTime) => {
  // Dispatch an action to update the state with the booked time
  dispatch({ type: 'BOOK_RESERVATION', bookedTime });
 };

 // Render the BookingForm component with the current state
 return (
   <main className="booking_page">
   {/* <h1>Bookin Table</h1> */}
   <Routes>
    <Route index element = {
    <BookingForm
    bookedTableTimes = {state.bookedTableTimes} // Pass booked table times as props
    availableTimeSlots = {state.availableTimeSlots} // Pass available time slots as props
    handleBookingSubmit = {handleBookingSubmit} // Pass booking submission handler
    />} />
    <Route path = "personaldata" element = {<PersonalData />} />
   </Routes>
  </main>
 );
};


export default BookingPage;

/*
=================================================================================================

// const updateTimes = () => {
//  // to handle state change
//  // for now to return availableTimes
// }

// const initializeTimes = () => {
//  // to create initial state for the availableTimes
// }

// Now change availableTimes to a reducer using useReducer function and provide the above two functions
// as parameters.

// Now go to the BookingForm component and update it to dispatch the state change when the date form field
// is changed. TIP: include the newly selected date in the dispatch parameter.

function BookingPage () {
 // const [availableTimes, setAvailableTimes] = useState([
 //  'Select a time',
 //  '17:00',
 //  '18:00',
 //  '19:00',
 //  '20:00',
 //  '21:00',
 //  '22:00',
 // ]);

 return (
  <main>
   <h1>Bookin Table</h1>
   <Routes>
    <Route index element = {<BookingInfo />} />
    <Route path = "personaldata" element = {<PersonalData />} />
   </Routes>
  </main>
 );
}

export default BookingPage;
*/