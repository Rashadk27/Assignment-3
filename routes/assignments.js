const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// List all (public page)
router.get('/', async (req, res) => {
  const list = await Assignment.find().sort({ dueDate: 1 });
  res.render('assignments/list', { assignments: list });
});

// New form
router.get('/new', (req, res) => res.render('assignments/new'));

// Create
router.post('/', async (req, res) => {
  await Assignment.create(req.body);
  res.redirect('/assignments');
});

// Edit form
router.get('/edit/:id', async (req, res) => {
  const a = await Assignment.findById(req.params.id);
  res.render('assignments/edit', { assignment: a });
});

// Update
router.post('/edit/:id', async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/assignments');
});

// Delete
router.post('/delete/:id', async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect('/assignments');
});

module.exports = router;
