import React from "react";
import { testimonials  } from "./testimonials";
import Testimonial from "./Testimonial";
import LittleLemon from "./LittleLemon";
import greeksaladc from '../assets/greeksaladc.jpg';
// import bruchetta from '../assets/bruchetta.jpg';

const CustomerSay = () => {
 return (
  <>
  <h2 className="header_testimonials">Testimonials</h2>
  <section className="customer_say">
    {testimonials.map(testimonial => {
     return <Testimonial key = {testimonial.clientName} {...testimonial} />
    })}
  </section>
  <div className="bottom_msg">
  <LittleLemon />
  <img src = {greeksaladc} alt = "" />
  </div>
  
  </>
  );
}


export default CustomerSay;