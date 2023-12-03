import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import BookingForm from "../components/BookingForm";
import PersonalData from "../components/PersonalData";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import ConfirmedBooking from "../components/ConfirmedBooking";

const Main = () => {
 return (
  <>
   <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/about" element = {<About />} />
    <Route path = "/menu" element = {<Menu />} />
    <Route path = "/bookingpage/*" element = {<BookingPage />}>
     <Route index element = {<BookingForm />} />
     <Route path= "personaldata" element = {<PersonalData />} />
    </Route>
    <Route path="/confirmation" element = {<ConfirmedBooking />}></Route>
    <Route path = "/order-online" element = {<OrderOnline />} />
    <Route path = "/login" element = {<Login />} />
   </Routes>
  </>
 );
}

export default Main;