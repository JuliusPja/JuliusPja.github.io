import "./body.css"
import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// npm i @emailjs/browser

export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  // Access form elements by name and retrieve their values
  const userName = form.current.user_name.value;
  const userEmail = form.current.user_email.value;
  const message = form.current.message.value;


  // Conditional rules
  
    if (userName === ''){
      alert('missing name')
    }
    else if (userEmail === ''){
      alert('missing email')
    }
    else if (message === ''){
      alert('missing message')
    }
    else{
    emailjs.sendForm(
      'service_bd41em7', 
      'template_lgbeiam', 
      form.current, 
      'cVGiHFVZNiSyFV3Lk'
      )
      .then((result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
      }, (error) => {
          alert(error.text);
      });
    };
  };
  
  return(
    <>
    { }
      <h2 className="FontH2">contact</h2>
      <div className="ContactContainer">
      <form ref={form} onSubmit={sendEmail} className="FormContainer">     
      <input id="user_name" type="text" name="user_name" placeholder="Name" className="FontGeneral Box"/>
      <input id="user_email" type="email" name="user_email" placeholder="Email" className="FontGeneral Box"/>
      <textarea id="message" name="message" placeholder="Message" className="FontGeneral Box L"/>
      <input type="submit" value="Send" className="FontButton Button"/>
      </form>
      </div>
    </>
  )
}