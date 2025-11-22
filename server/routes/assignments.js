// importing xpress and create a router
const express = require('express');
const router = express.Router();

// Import the assignment model to interact with MongoDB
const Assignment = require('../models/Assignment');



// Route to list all assignments (sorted via  due date)
router.get('/', async (req, res) => {
  const list = await Assignment.find().sort({ dueDate: 1 });
  res.render('list', { assignments: list }); 
});

// Route to show the form for adding a new assignment
router.get('/add', (req, res) => res.render('add')); // Render add.ejs

// Route to create a new assignment in the database
router.post('/', async (req, res) => {
  await Assignment.create(req.body); 
  res.redirect('/assignments');      
});

// Route to show the form for editing an existing assignment
router.get('/edit/:id', async (req, res) => {
  const a = await Assignment.findById(req.params.id); 
  res.render('edit', { assignment: a });             
});

// Route to update an existing assignment in the database
router.post('/edit/:id', async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body); 
  res.redirect('/assignments');                                 
});

// Route to delete an assignment
router.post('/delete/:id', async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id); 
  res.redirect('/assignments');                       
});

// Export the router to be used in app.js
module.exports = router;
