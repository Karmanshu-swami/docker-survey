const mongoose = require('mongoose');

const student = mongoose.Schema({
    name: String, 
    surname: String,
    email: String,
    course: String,
    liking: String,
    difficulty: String,
    experience: String,
    feedback: String
});

module.exports = mongoose.model('student', student);