const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  type: String,
  year: String,
  month: String,
  day: String,
  title: String,
  backgroundColor: String,
  color: String,
  userId: String
});

module.exports = mongoose.model('Todo', todoSchema);