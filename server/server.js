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
    const query = 'INSERT INTO users (username, password, current_chapter, current_prompt) VALUES (?, ?, ?, ?)';
    const initialChapter = 1;
    const initialPrompt = 0;
    connection.query(query, [username, hashedPassword, initialChapter, initialPrompt], (error, results) => {
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

app.get('/api/login', (req, res) => {
  const { username, password } = req.query;

  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error retrieving user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (!result) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      res.status(200).json({ message: 'Login successful', user });
    });
  })
});

app.get('/api/current-prompt/:username', (req, res) => {
  const { username } = req.params;

  const query = 'SELECT current_chapter, current_prompt FROM users WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error retrieving current prompt:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { current_chapter, current_prompt } = results[0];
    res.status(200).json({ currentChapter: current_chapter, currentPrompt: current_prompt });  
  });
});

app.put('/api/update-current-prompt/:username', (req, res) => {
  const { username } = req.params;
  const { currentPrompt } = req.body;

  const query = 'UPDATE users SET current_prompt = ? WHERE username = ?';
  connection.query(query, [currentPrompt, username], (error, results) => {
    if (error) {
      console.error('Error updating current prompt:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json({ message: 'Current prompt updated successfully' });
  });
});

app.put('/api/update-chapter/:username', (req, res) => {
  const { username } = req.params;

  const query = 'UPDATE users SET current_chapter = current_chapter + 1, current_prompt = 0 WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error updating user chapter:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User chapter updated successfully' });
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
