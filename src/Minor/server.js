const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mpms_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/viewprojects.html');
  });
  
app.post('/',(req, res) => {
  const { Description, Availability, Category } = req.body;
  const details = { Description, Availability, Category };
  const sql = "INSERT INTO details(Description, Availability, Category) VALUES ('" + Description + "','" + Availability + "','" + Category + "')";

  db.query(sql, details, (err, result) => {
    if (err) throw err;
    console.log('New project added to database:', details);
    res.send('Project submitted successfully!');
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
