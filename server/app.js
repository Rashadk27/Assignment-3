
require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// connect the mongo
connectDB(process.env.MONGO_URI);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));



// view engine
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views'),        
  path.join(__dirname, 'assignments')   
]);


// routes
const assignmentRoutes = require('./routes/assignments');
app.use('/assignments', assignmentRoutes);

// home pg
app.get('/', (req, res) => {
  res.render('index'); 
});

module.exports = app;

