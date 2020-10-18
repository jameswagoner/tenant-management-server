const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = Schema({
  summary: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  unit: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String,
    default: 'new',
    enum: ['new', 'in progress', 'complete']
  },
  notes: [{
    type: Schema.Types.ObjectID,
    ref: 'Note'
  }],
  assignee: {
    type: Schema.Types.ObjectID,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports.model = mongoose.model('Task', Task);
