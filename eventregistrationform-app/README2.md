# Event Registration API

This README.md file gives step by step instruction to the user to create API for registration and changes that needs to be made to the frontend accordingly .

### Steps:

1.Creating register API:
  - Create a folder under src to group all the API files together
  - Create registration.js file under API folder.
  - Add the following lines of code to the registration.js file
    ```
    export async function registerParticipant(formData) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.error || 'Failed to register participant');
        }
    
        return data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
    ```

2.Adding the changes to frontend:
  - Add the code in Page1.jsx to the following:
    ```
    const [successMessage, setsuccessMessage] = useState('');
    const [error, setError] = useState('');   
    ```
  - Add the below code between div & form tags:
    ```
    {successMessage && <div>{successMessage}</div>}
    {error && <div>{error}</div>}
    ```
  - Add the following lines of code within the handleSubmit(event) function:
    ```
    setsuccessMessage('');
    setError('');

    if(formData.participantName === '' || formData.eventName === '' || formData.eventDate === ''){
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
        eventName: '',
        eventDate: '',
      });
    } catch (err) {

      setError(err.message || 'Registration failed!');

      // Auto-clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
    }
    ```
  - Import the registration.js file into Page1.jsx file. 
      ```
      import { registerParticipant } from '../api/registration';
      ```