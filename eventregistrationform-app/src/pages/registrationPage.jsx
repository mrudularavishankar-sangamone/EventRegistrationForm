import React, { useState } from 'react';
import '../App.css';
import { registerParticipant } from '../api/registration';

export default function RegistrationPage() {

  // new Date() creates a Date object for the current date/time.
  // toISOString() converts it to an ISO string: "2025-12-10T14:32:18.123Z".
  // split("T") separates the date and time into ["2025-12-10", "14:32:18.123Z"].
  // [0] selects only the date part ("2025-12-10").
  const date = new Date();
  const today = date.toISOString().split('T')[0];
  
  const [successMessage, setsuccessMessage] = useState('');
  const [error, setError] = useState('');

  const [formData, setformData] = useState({
    participantName: '',
    empID: '',
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
    
    setsuccessMessage('');
    setError('');

    if(formData.participantName === '' || formData.empID === '' || formData.orgName === '' || formData.designation === '' || formData.emailID === '' || formData.phoneNumber === '' || formData.eventName === '' || formData.eventID === '' || formData.eventDate === '' || formData.eventOrganizer === ''){
      setError('All fields are required');
      return;
    }

    try {
      const data = await registerParticipant(formData);
      setsuccessMessage(data.message || 'Registration successful!');

      // Auto-clear success message after 5 seconds
      setTimeout(() => setsuccessMessage(''), 5000);

      // reset form
      setformData({
        participantName: '',
        empID: '',
        orgName: '',
        designation: '',
        emailID: '',
        phoneNumber: '',
        eventName: '',
        eventID: '',
        eventDate: '',
        eventOrganizer: ''
      });
    } catch (err) {
      setError(err.message || 'Registration failed!');
      // Auto-clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
    }
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
    <div className = 'registration-page'>
      {successMessage && <div className = 'success-message'>{successMessage}</div>}
      {error && <div className = 'error-message'>{error}</div>}

      <form onSubmit = {handleSubmit}>
        <label> Name of the Participant:
          <input type = 'text' id = 'participantName' value = {formData.participantName} placeholder = 'Participant Name' onChange = {handleChange} required/> 
        </label>
        
        <label> Employee ID of the Participant: 
          <input type = 'text' id = 'empID' value = {formData.empID} pattern = '(?=.*\d)(?=.*[a-zA-Z]).+' placeholder = 'Employee ID' onChange = {handleChange} required/>   
        </label>
        
        <label> Name of the Organization: 
          <input type = 'text' id = 'orgName' value = {formData.orgName} placeholder = 'Organization' onChange = {handleChange}  required/>
        </label>
        
        <label> Designation of the Participant: 
          <input type = 'text' id = 'designation' value = {formData.designation} placeholder = 'Designation' onChange = {handleChange} required/>   
        </label>

        <label> Email Address of the Participant: 
        <input type = 'email' id = 'emailID' value = {formData.emailID} placeholder = 'youremail@abc.com' onChange = {handleChange} pattern = '^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' required/>   
        </label>
        <label> Phone Number of the Participant: 
        <input type = 'tel' id = 'phoneNumber' value = {formData.phoneNumber} pattern = '^\+[1-9]\d{1,14}$' placeholder = '+01234567890' minLength = {10} onChange = {handleChange} required/>   </label>
        
        <label> Name of the Event: 
        <input type = 'text' id = 'eventName' value = {formData.eventName} placeholder = 'Co-Pilot Seminar,Database Seminar,....' onChange = {handleChange} required/>   </label>
        
        <label> ID of the Event: 
        <input type = 'text' id = 'eventID' value = {formData.eventID} pattern = '(?=.*\d)(?=.*[a-zA-Z]).+' placeholder = 'Must be alphanumeric' onChange = {handleChange}  required/>  </label> 
        
        <label> Date of the Event: 
        <input type = 'date' min = {today} id = 'eventDate' value = {formData.eventDate} onChange = {handleChange} required/> </label>  
        
        <label> Name of the Event Organiser: 
        <input type = 'text' id = 'eventOrganizer' value = {formData.eventOrganizer} placeholder = 'Microsoft, Oracle,....'  onChange = {handleChange} required/>   </label>

        <button className = 'submitButton' type = 'submit'> Register </button>
        <button className = 'resetButton' type = 'reset'> Reset Form </button>
      
      </form>
    </div>
  )
}