import React from "react";
import { specials } from "./specials";
import Special from "./Special";
// import Button from "./Button";


function SpecialMenu () {
 return (
  <section className="special_menu">
   <div className="menu_header">
   <h2>This Weeks Special!</h2>
   <button className="btn">Online Menu</button>
   </div>
   <div className="menu_content">
   {specials.map(special => {
    return <Special key = {special.name} {...special} />
   })}
   </div>
  </section>
 );
}

export default SpecialMenu;