const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    age: Number,
    nationality: String
})

module.exports = mongoose.model('Student', studentSchema);