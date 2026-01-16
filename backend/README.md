# Event Registration Backend

The backend setup handles the server-side logic and database operations for the event registration system. It processes requests from the frontend, manages the user data in a MySQL database, and ensures secure and efficient data handling.

## Technologies Used:
- Cors: Enables secure cross-origin requests
- Express: Simplifies server-side API development
- mysql2: Connects Node.js to MySQL
- Nodemon: Automatically restarts server on changes

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

3. Create a subfolder called backend inside the EventRegistrationForm project.

4. Navigate to the backend folder using ```cd backend``` command.

5. Run ```npm init -y``` to automatically generate a file that tracks the project name and the tools used in the project.

6. Verify if cors, express, mysql2 and nodemon are installed in your device/workspace(for Windows):
    - Before we start building the backend, ensure that the above dependencies are installed on your system.
    - Open the Terminal in VSCode.
    - Run the following command:
      ```
      npm list
      ```
    - If a version number is displayed for all the above dependencies, all the required dependencies are already installed. You can skip Step 7.
    - If you an empty list, then no dependecies are installed. Proceed to Step 7

7. Installing dependencies:
    - Run the following command to run the dependencies:
      ```
      npm install cors express mysql2 nodemon
      ```
    - Once, this command is completed, verify the installation by running the ```npm list``` command in terminal.

8. Create a file called server.js under backend folder to write our code for the server side.

9. Add the following line of code to package.json file under scripts:
   ```
   ,"start": "nodemon server.js"
   ```
   This helps start the backend server easily using ```npm start```

10. Import express, cors and mysql2 to server.js file:
    ```
    import express from 'express';
    import mysql from 'mysql2';
    import cors from 'cors';
    ```

11. Adding the following lines of code:
    - Create Express application instance by adding ``` const app = express(); ``` to the server.js file
    - Define port number on which the backend listens on
      ```
      const PORT = 3001;
      ```
    - Register the CORS middleware. Without this, the API might work in Postman but fail in the browser
      ```
      app.use(cors());
      ```
    - Allowing the server to read JSON data from incoming requests
      ```
      app.use(express.json());
      ```
      We access this data via req.body. Without the above line of code, req.body would be undefined.

12. Defining basic test route for the backend:
    - Creating a simple test route to verify that the backend is running correctly and can handle HTTP requests.
      ```
      app.get('/', function(req, res) {
        return res.json('Backend Server is running');
      });
      ```
      app.get('/') - Listens for HTTP GET requests at the root URL (/)
      req (request) - Contains information about the incoming request
      res (response) - Used to send a response back to the client
      res.json() - Sends a JSON response confirming the server status

13. Configuring the backend server to start listening for incoming requests on a specified port:
    - Add the Server Listener at the end of the server.js file:
      ```
      app.listen(PORT, function() {
        console.log(`Backend Server is running on http://localhost:${PORT}`);
      });
      ```
      app.listen(PORT, ...) - Starts the Express server and tells it to listen for incoming HTTP requests on the specified port.
      PORT - The port number where the backend server will run (e.g., 3001).
      function() - A callback function that executes once the server has started successfully.
      console.log(...) - Displays a confirmation message in the terminal indicating the server is running and accessible.

14. Start the backend server using the command:
   ```
   npm start
   ```
   The app will open in your browser at `http://localhost:3001`

15. Creating Schema in MySQL Workbench:
    - Open MySQL Workbench that was installed on the computer and open the Local instance that was created during the installation
    - Once the connection is successful, the Navigator is loaded.
    - Right Click on the Schemas section and select Create Schema option.
    - Give the new Schema a unique name and click on Apply button.
    - SQL Script window is displayed. Click on Apply button, followed by Finish button.

16. Creating a new table in the Schema:
    - In the Schemas section, click on the newly created Schema.
    - Right Click on the Tables subfolder.
    - Select Create table option. 
    - Give the new Table a unique name and add ParticipantName, EventName and EventDate columns to this table.
    - Click on Apply button.
    - SQL Script window is displayed. Click on Apply button, followed by Finish button.

17. Creating DB connection:
    - Add the following lines of code to establish DB connection from the EventRegistrationForm
      ```
      const db = mysql.createConnection({
        host: 'localhost',
        user: '<userName>',
        password: '<passwordGiven>',
        database: '<SchemaName>',
      });
      ```

18. Creating API to GET & POST data to the DB:
    - Add the following code to get data from the DB
      ``` 
      app.get('/list', function (req, res) {
        const sql = 'SELECT * FROM event_registration_db';
        db.query(sql, function (err, results) {
          if (err) return res.json(err);
          return res.json(results);
        });
      });
      ```
    - Add the following code to post data to the DB
      ``` 
      app.post('/register', function (req, res) {
        const sql = 'INSERT INTO `event_registration_db` (`ParticipantName`, `EmpID`, `OrgName`, `PartDesignation`, `EmailID`, `Phone`, `EventName`, `EventID`, `EventDate`, `EventOrg`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
          req.body.participantName,
          req.body.empID,
          req.body.orgName,
          req.body.designation,
          req.body.emailID,
          req.body.phoneNumber,
          req.body.eventName,
          req.body.eventID,
          req.body.eventDate,
          req.body.eventOrganizer,
        ];

        db.query(sql, values, function (err, results) {
          if (err) { return res.json(err); }
          return { res.json('Registration successful'); }
        });
      });
      ```
19. The following steps are included as part of Frontend. Please refer README2.md file from the frontend folder of the project.