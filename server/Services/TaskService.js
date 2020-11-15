const { model } = require('../Models/Task');
const Task = model;

module.exports = {
  all: () => {
    return Task.find();
  },
  find: (id) => {
    return Task.findById(id);
  },
  create: (input) => {
    return Task.create({
        title: input.title,
        description: input.description,
        unit: input.unit,
        priority: input.priority
      });
  }
};