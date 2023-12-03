import React from "react";
import { Link } from 'react-router-dom';
import restauranfood from '../assets/restauranfood.jpg';
import Button from "./Button";
import LittleLemon from "./LittleLemon";

function Chicago () {
 return (
  <section className="banner">
   <div className="banner_wrapper">
   <img src = {restauranfood} alt = 'man' className="banner_img"/>
   <LittleLemon />
   <Link to = "/bookingpage" className="link">
    <Button>Reserve a Table</Button>
   </Link>
   </div>
  </section>
 );
}

export default Chicago;