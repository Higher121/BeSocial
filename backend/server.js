const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TMS@2024',
  database: 'social_media',
  authPlugin: 'mysql_native_password'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// User Signup
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/api/signup', async (req, res) => {
  const { fullName, countryCode, mobileNumber, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const sql = 'INSERT INTO user (u_name, country_code, mobile_number, u_email, u_password) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [fullName, countryCode, mobileNumber, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Signup error:', err);
        res.status(500).send({ error: 'Failed to sign up user.' });
        return;
      }
      res.status(201).send({ id: result.insertId, fullName, countryCode, mobileNumber, email });
    });
  } catch (error) {
    console.error('Hashing error:', error);
    res.status(500).send({ error: 'Failed to sign up user.' });
  }
});

// User Login
const bcrypt = require('bcrypt');

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user WHERE u_email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send({ error: 'Failed to login user.' });
      return;
    }

    if (result.length > 0) {
      const user = result[0];
      try {
        const match = await bcrypt.compare(password, user.u_password);
        if (match) {
          res.status(200).send({
            id: user.u_id,
            fullName: user.u_name,
            countryCode: user.country_code,
            mobileNumber: user.mobile_number,
            email: user.u_email
          });
        } else {
          res.status(401).send({ error: 'Invalid email or password.' });
        }
      } catch (error) {
        console.error('Password comparison error:', error);
        res.status(500).send({ error: 'Failed to login user.' });
      }
    } else {
      res.status(401).send({ error: 'Invalid email or password.' });
    }
  });
});


// Create a post
app.post('/api/posts', (req, res) => {
  const { title, content, imageUrl } = req.body;
  const post = { title, content, image_url: imageUrl };
  const sql = 'INSERT INTO posts SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, ...post });
  });
});

// Get all posts
app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts ORDER BY created_at DESC';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
