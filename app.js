
require('dotenv').config();           
const express = require('express');
const path = require('path');
const connectDB = require('./config/db'); 

const app = express();


connectDB(process.env.MONGO_URI);


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());                         
app.use(express.static(path.join(__dirname, 'public'))); 


app.set('view engine', 'ejs');



const assignmentRoutes = require('./routes/assignments');
app.use('/assignments', assignmentRoutes);


app.get('/', (req, res) => {
  res.render('index'); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
