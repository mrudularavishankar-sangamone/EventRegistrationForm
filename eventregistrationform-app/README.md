# Event Registration App

This ReactJS application allows users to register for events through an interactive form. It collects user information such as participant name, event name, and event date, validates input in real-time, and provides a smooth and responsive registration experience.

## Technologies Used:
- ReactJS - UI framework and interactivity
- HTML - Markup structure
- CSS - Styling

## Setup/Installation

### Prerequisites:
- Node.js (v14 or higher) and npm installed on your machine
- Git (to clone the repository)

### Steps:

1. Verify if npm is installed in your device/workspace(for Windows):
    - Before running the project, ensure that npm is installed on your system.
    - Open the Terminal in VSCode.
    - Run the following command:
      ```
      npm -v
      ```
    - If a version number is displayed (for example, 10.4.1), npm is already installed. You can skip Step 2.
    - If you see an error such as: 'npm' is not recognized as an internal or external command, then npm is not installed. Proceed to Step 2

2. Installing npm:
    - Download Node.js from 'https://nodejs.org/'.
    - Install Node.js by running the installer and follow the prompts.
    - Verify the installation by running the npm -v command in terminal.

3. Install the React package and its dependencies:
   ```
   npx create-react-app <app-name>
   ```
   P.S: The AppName should only contain lowercase alphabets

4. Changing the directory to the AppName:
   ```
   cd <app-name>
   ```

5. Start the development server:
   ```
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

6. Modify App.js file:
    - Delete the logo.svg import statement
    - Delete all the lines of code between the return() in App function
    - Add the following statements in the return()
      ```
      return(
        <div>
          <h1> Event Registration Form </h1>
        </div>
      );
      ```
    - Verify the output at `http://localhost:3000`. Now, the React Application is ready. 
     
7. Grouping the jsx files:
    - Create a folder called pages under src
    - Create a file called Page1.jsx under pages folder
    - Add the ```export default function Page1(){ }``` statement 
    - Add an empty return statement within Page1() function
      ```
      return(
        <div>
        </div>
      );
      ```

8. Include Page1.jsx reference in App.js:
    - Add ```import Page1 from './pages/Page1.jsx';``` statement
    - Add <Page1/> tag within the return() so that the contents of Page1.jsx shows up on the screen
      ```
      return (
        <div>
          <h1> Event Registration Form </h1>
          <Page1 />
        </div>
      );
      ```
    - Verify the output at `http://localhost:3000`.

9. Adding form elements to Page1.jsx file:
    - Add the following piece of code to generate a form within a return() statement
      ```
      <form>
        <label> Name of the Participant: 
          <input type = 'text' id = 'participantName' required/>
        </label>

        <label> Event Name: 
          <input type = 'text' id = 'eventName' required/>
        </label>

        <label> Event Date:
          <input type = 'date' id = 'eventDate' required/>
        </label>

        <button className = 'submit-button'> Submit </button>
        <button className = 'reset-button'> Reset </button>
      </form>
      ```
    - Enclose the form within div tags:
      ```
      return(
        <div>
           <form>
           .......
           </form>
        </div>
      )
      ```

10. Adding minimum value to the date field:
    - Add the following code before return() within Page1()
      ```
      const date = new Date();
      const today = date.toISOString().split('T')[0];
      ```
    - Add min attribute to the date input:
      ```
      <input type = 'date' id = 'eventDate' min = {today} required/>
      ```

11. Adding value attribute to all the input fields:
    ```
    <form>
        <label> Name of the Participant: 
          <input type = 'text' id = 'participantName' value = {formData.participantName} required/>
        </label>

        <label> Event Name: 
          <input type = 'text' id = 'eventName' value = {formData.eventName} required/>
        </label>

        <label> Event Date:
          <input type = 'date' id = 'eventDate' value = {formData.eventDate} required/>
        </label>

        <button className = 'submit-button'> Submit </button>
        <button className = 'reset-button'> Reset </button>
      </form>
    ```

12. Adding the type attribute to the buttons in the form
    ```
    <button className = 'submit-button' type = 'submit'> Submit </button>
    <button className = 'reset-button' type = 'reset'> Reset </button>
    ```

13. Adding formdata to the code to store the input values from the form
    - Import the useState in-built function from React
      ```
      import { useState } from 'react';
      ```
    - Declare and Initialize formdata
      ```
      const [formData, setformData] = useState({
        participantName: '',
        eventName: '',
        eventDate: ''
      });
      ```

14. Adding function to update the state of form:
    - The handleChange function is used to update the state of a form dynamically in a React component when the user types into input fields
      ```
      function handleChange(event){
       setformData({
          ...formData,
         [event.target.id]: event.target.value
        });
      }
      ```
    - Add onChange attribute for each of the input elements in order to handle the incoming form data
      ```
      <form>
        <label> Name of the Participant: 
          <input type = 'text' id = 'participantName' value = {formData.participantName} onChange = {handleChange}  required/>
        </label>

        <label> Event Name: 
          <input type = 'text' id = 'eventName' value = {formData.eventName} onChange = {handleChange} required/>
        </label>

        <label> Event Date:
          <input type = 'date' id = 'eventDate' value = {formData.eventDate} onChange = {handleChange} required/>
        </label>

        <button className = 'submit-button' type = 'submit'> Submit </button>
        <button className = 'reset-button' type = 'reset'> Reset </button>
      </form>
      ```

15. Adding logic to handle form submit:
    - Add the following function to handle the form submission
      ```
      async function handleSubmit (event){
        // Prevents the browser from refreshing the page when the form is submitted.
        // This keeps the React state intact and lets us handle the submission manually.
        event.preventDefault();

        const registrationInfo = {...formData};

        console.log('Form submitted:', registrationInfo);
      }
      ```
    - Add onSubmit attribute for form in order to handle the submit request
      ```
      <form onSubmit = {handleSubmit}>
        ....
      </form>
      ``` 