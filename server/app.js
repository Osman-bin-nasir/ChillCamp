const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./config/passport');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');
const cors = require('cors');
require('dotenv').config(); // ✅ load .env

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session config
app.use(session({
  secret: process.env.SESSION_SECRET ,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: false,//set this true in production with https
    httpOnly: true
  }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// this middleware for debugging
app.use((req, res, next) => {
  console.log('Request:', req.method, req.path);
  console.log('Session ID:', req.sessionID);
  console.log('User authenticated:', req.isAuthenticated());
  console.log('User:', req.user ? req.user.username : 'No user');
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/campgrounds', campgroundRoutes);
app.use('/api/campgrounds/:id/reviews', reviewRoutes);
// Root
app.get('/', (req, res) => {
  res.json({ message: 'ChillCamp API is running!!!' });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
