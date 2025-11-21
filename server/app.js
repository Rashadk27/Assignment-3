
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
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('view engine', 'ejs');

// routes
const assignmentRoutes = require('./routes/assignments');
app.use('/assignments', assignmentRoutes);

// home pg
app.get('/', (req, res) => {
  res.render('index'); // render views
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
