import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mr_db1',
});

app.get('/', function(req, res) {
  return res.json('Backend Server is running');
});

app.get('/list', function (req, res) {
  const sql = 'SELECT * FROM event_registration_db';
  db.query(sql, function (err, results) {
    if (err) return res.json(err);
    return res.json(results);
  });
});

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
    if (err) return res.json(err);
    return res.json('Registration successful');
  });
});

app.listen(PORT, function() {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
});