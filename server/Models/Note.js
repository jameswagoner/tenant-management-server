const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectID,
    ref: 'User'
  }
});

module.exports.model = mongoose.model('Note', Note);