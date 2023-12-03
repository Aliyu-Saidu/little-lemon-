import React from "react";
import Button from "./Button";


const Special = (props) => {
 const { image, name, price, description } = props;
 return (
  <article className="specials" >
   <img src = {image} alt = "" />
   <div className="special_items">
    <div className="items_header">
     <h3>{name}</h3>
     <span>{price}</span>
    </div>
     <p>{description}</p>
     <Button>Buy</Button>
   </div>
  </article>
 )
}

export default Special;