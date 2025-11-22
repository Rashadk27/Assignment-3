let mongoose = require('mongoose');

let assignmentModel = mongoose.Schema({
    title: String,
    course: String,
    dueDate: Date,
    createdAt: { type: Date, default: Date.now }
}, { collection: "assignments" });

module.exports = mongoose.model('Assignment', assignmentModel);
