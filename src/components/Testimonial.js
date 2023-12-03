import React from "react";

const Testimonial = (props) => {
 const { image, clientName, starRating, says } = props;
 return (
  <article className="testimonials" >
   <img src = {image} alt = "" />
   <h3>{clientName}</h3>
   <span>{starRating}</span>
   <p>{says}</p>
  </article>
 )
}

export default Testimonial;