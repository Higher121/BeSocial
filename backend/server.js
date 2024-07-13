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
  authPlugin: 'mysql_native_password'  // Add this line if necessary


});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
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
