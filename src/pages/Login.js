import React from "react";
import { useState } from 'react';

function Login () {
 const [name, setName] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
  setName("");
  console.log("Form submitted!");
 }
 return (
  <main>
   <form onSubmit = {handleSubmit}>
    <fieldset>
     <div className="field">
      <label htmlFor="name">Name:</label>
      <input
       id = "name"
       type = "text"
       name = "user_name"
       placeholder="Name"
       value = {name}
       onChange = {(e) => setName(e.target.value)}
       />
     </div>
     <button disabled = {!name} type="submit" >Log in</button>
    </fieldset>
   </form>
  </main>
 )
}

export default Login;