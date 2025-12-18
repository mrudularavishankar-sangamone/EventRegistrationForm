import React, { useState } from 'react';

export default function RegistrationPage() {

  // new Date() creates a Date object for the current date/time.
  // toISOString() converts it to an ISO string: "2025-12-10T14:32:18.123Z".
  // split("T") separates the date and time into ["2025-12-10", "14:32:18.123Z"].
  // [0] selects only the date part ("2025-12-10").
  const today = new Date().toISOString().split('T')[0];
  const maxDate = "2026-01-02";

  const [formData, setformData] = useState({
    participantName: '',
    orgName: '',
    designation: '',
    emailID: '',
    phoneNumber: '',
    eventName: '',
    eventID: '',
    eventDate: '',
    eventOrganizer: ''
  });

  async function handleSubmit (event){
    // Prevents the browser from refreshing the page when the form is submitted.
    // This keeps the React state intact and lets us handle the submission manually.
    event.preventDefault();

    const registrationInfo = {...formData};

    console.log('Form submitted:', registrationInfo);
    localStorage.setItem('registrationInfo', JSON.stringify(registrationInfo));
  }

  // Handle input changes dynamically:
  // 1. event.target.id gives the input's ID (e.g., "email" or "password").
  // 2. event.target.value is what the user typed.
  // 3. ...formData keeps the existing form data.
  // 4. [event.target.id]: event.target.value updates only that specific field.
  function handleChange(event){
    setformData({
      ...formData,
      [event.target.id]: event.target.value
    });
  }

  return (
    <div className="registration-page">

      <form onSubmit = {handleSubmit}>
        <label> Name of the Participant:
          <input type = 'text' id = 'participantName'  placeholder = 'Participant Name' onChange = {handleChange} required/> 
        </label>
        
        <label> Name of the Organization: 
          <input type = 'text' id = 'orgName' placeholder = 'Organization' onChange = {handleChange}  required/>
        </label>
        
        <label> Designation of the Participant: 
          <input type = 'text' id = 'designation' placeholder = 'Designation' onChange = {handleChange} required/>   
        </label>

        <label> Email Address of the Participant: 
        <input type = 'email' id = 'emailID' placeholder = 'youremail@abc.com' onChange = {handleChange} pattern="^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>   
        </label>
        <label> Phone Number of the Participant: 
        <input type = 'tel' id = 'phoneNumber' pattern="\d+" placeholder = '1234567890' minLength = {10} onChange = {handleChange} required/>   </label>
        
        <label> Name of the Event: 
        <input type = 'text' id = 'eventName' placeholder = 'Co-Pilot Seminar,Database Seminar,....' onChange = {handleChange} required/>   </label>
        
        <label> ID of the Event: 
        <input type = 'text' id = 'eventID' pattern = "(?=.*\d)(?=.*[a-zA-Z]).+" placeholder = 'Must be alphanumeric' onChange = {handleChange}  required/>  </label> 
        
        <label> Date of the Event: 
        <input type = 'date' min = {today} max = {maxDate} id = 'eventDate' onChange = {handleChange} required/> </label>  
        
        <label> Name of the Event Organiser: 
        <input type = 'text' id = 'eventOrganizer' placeholder = 'Microsoft, Oracle,....'  onChange = {handleChange} required/>   </label>

        <button className = "submitButton" type = "submit"> Register </button>
        <button className = "resetButton" type = "reset"> Reset Form </button>
      
      </form>
    </div>
  )
}