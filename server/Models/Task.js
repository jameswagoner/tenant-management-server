const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = Schema({
  title: {
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
  priority: {
    required: true,
    type: String,
    default: 'normal',
    enum: ['low', 'normal', 'high', 'emergency']
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
