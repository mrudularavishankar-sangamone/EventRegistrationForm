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
    - Add an empty return statement within Page1() function:
      ```
      return(
        <div>
        </div>
      );
      ```

8. Include Page1.jsx reference in App.js:
    - Add ```import Page1 from './pages/Page1.jsx';``` statement
    - Add <Page1/> tag within the return() so that the contents of Page1.jsx shows up on the screen.
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
    - Add the following piece of code to generate a form within a return() statement:
      ```
      <form>
        <label> Name of the Participant: 
          <input type = 'text' id = 'participantName' required/>
        </label>

        <label> Event Name: 
          <input type = 'text' id = 'eventName' required/>
        </label>

        <label> Event Date:
          <input type = 'date' id = 'eventDate' min = {today} required/>
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