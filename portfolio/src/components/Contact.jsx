import "./body.css"
import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// npm i @emailjs/browser

export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bd41em7', 
      'template_lgbeiam', 
      form.current, 
      'cVGiHFVZNiSyFV3Lk'
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return(
    <>
      <h2 className="FontH2">contact</h2>
      <div className="ContactContainer">
      <form ref={form} onSubmit={sendEmail} className="FormContainer">     
      <input type="text" name="user_name" placeholder="Name" className="FontGeneral Box"/>
      <input type="email" name="user_email" placeholder="Email" className="FontGeneral Box"/>
      <textarea name="message" placeholder="Message" className="FontGeneral Box L"/>
      <input type="submit" value="Send" className="FontButton Button"/>
      </form>
      </div>
    </>
  )
}