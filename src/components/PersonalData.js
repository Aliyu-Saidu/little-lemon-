import React, { useState} from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import Button from "./Button";



const PersonalData = ({bookedDate, bookedTime, numberOfGuests, selectedOccasion }) => {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
 });

 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
   ...prevFormData,
   [name]: value,
  }));
 };

 const handleSubmit = (event) => {
  event.preventDefault();
 };

 return (
  <article className="form">
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
   <form onSubmit={handleSubmit} method="post">
    <div>
     <label htmlFor="firstName">First Name</label>
     <input
     id="firstName"
     type="text"
     name="firstName"
     value={formData.firstName}
     onChange={handleChange}
     placeholder="First Name" />
    </div>

    <div>
     <label htmlFor="lastName">Last Name</label>
     <input
     id="lastName"
     type="text"
     name="lastName"
     value={formData.lastName}
     onChange={handleChange}
     placeholder="Last Name" />
    </div>

    <div>
     <label htmlFor="phoneNumber">Phone Number</label>
     <input
     id="phoneNumber"
     type="tel"
     name="phoneNumber"
     value={FormData.phoneNumber}
     onChange={handleChange}
     placeholder="Phone Number" />
    </div>

    <div>
     <label htmlFor="email">Email</label>
     <input
     id="email"
     type="email"
     name="email"
     value={formData.email}
     onChange={handleChange}
     placeholder="Email" />
    </div>

    <div>
     <label htmlFor="password">Password</label>
     <input
     id="password"
     type="password"
     name="password"
     value={formData.password}
     onChange={handleChange}
     placeholder="Password" />
    </div>

    <div>
     <button type="submit">Submit</button>
    </div>
   </form>
   <Link to = "/bookingpage">
    <Button>Prev</Button>
   </Link>
   <br />
   <Link to = "/">
    <Button>Back to Home Page</Button>
   </Link>
  </article>
 );
}

export default PersonalData;