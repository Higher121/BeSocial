const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = 'mongodb+srv://DeviLoper:Devil%40123@cluster0.aawm910.mongodb.net/Besocial?retryWrites=true&w=majority';
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;
client.connect()
  .then(() => {
    db = client.db('Besocial');
    console.log('MongoDB connected...');
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User Signup
app.post('/api/signup', async (req, res) => {
  const { fullName, countryCode, mobileNumber, email, password } = req.body;
  console.log('Signup request received:', req.body);  // Log incoming request data

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      fullName,
      countryCode,
      mobileNumber,
      email,
      password: hashedPassword
    };
    const result = await db.collection('UserData').insertOne(newUser);
    res.status(201).send({ id: result.insertedId, fullName, countryCode, mobileNumber, email });
  } catch (err) {
    console.error('Error signing up user:', err);
    res.status(500).send({ error: 'Failed to sign up user.' });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', req.body);  // Log incoming request data

  try {
    const user = await db.collection('UserData').findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).send({
        id: user._id,
        fullName: user.fullName,
        countryCode: user.countryCode,
        mobileNumber: user.mobileNumber,
        email: user.email
      });
    } else {
      res.status(401).send({ error: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).send({ error: 'Failed to login user.' });
  }
});

// create a post

app.post('/api/posts', (req, res) => {
  const { title, content, imageUrl } = req.body;
  console.log('Create post request received:', req.body);  // Log incoming request data

  const post = { title, content, imageUrl, createdAt: new Date() };
  db.collection('posts').insertOne(post, (err, result) => {
    if (err) {
      console.error('Error creating post:', err);
      res.status(500).send({ error: 'Failed to create post.' });
      return;
    }
    res.send({ _id: result.insertedId, ...post });
  });
});

//  get all posts

app.get('/api/posts', (req, res) => {
  db.collection('posts').find().sort({ createdAt: -1 }).toArray((err, posts) => {
    if (err) {
      console.error('Error fetching posts:', err);
      res.status(500).send({ error: 'Failed to fetch posts.' });
      return;
    }
    res.send(posts);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
