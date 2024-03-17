const mysql = require('mysql2');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'ginalFirl4202?',
    database: 'finalgirl_db'
};

const connection = mysql.createConnection(dbConfig);

app.post('/api/create-user', (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    const query = 'INSERT INTO users (username, password, current_chapter) VALUES (?, ?, ?)';
    const initialChapter = 1;
    connection.query(query, [username, hashedPassword, initialChapter], (error, results) => {
      if (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        console.log('User created successfully');
        res.status(200).json({ message: 'User created successfully' });
      }
    });
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
