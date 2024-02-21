const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3001;

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'asjanssen67@gmail.com',
    password: 'ginalFirl4202?',
    database: 'finalgirl_db'
};

// Create MySQL connection
const connection = mysql.createConnection(dbConfig);

// Connect to MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// API endpoint for creating user
app.post('/api/create-user', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    } else {
      console.log('User created successfully');
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
