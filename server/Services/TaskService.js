const { model } = require('../Models/Task');
const Task = model;

module.exports = {
  all: (req, res) => {
    Task.find()
      .then(tasks => {
        res.status(200).json({
          tasks: tasks
        })
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  },
  find: (req, res) => {
    Task.findById(req.params.task)
      .then(task => {
        if (task) {
          res.status(200).json(task)
        } else {
          res.status(404).json();
        }
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  },
  create: (req, res) => {
    Task.create({
        title: req.params.title,
        description: req.params.description,
        unit: req.params.unit,
        priority: req.params.priority
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        res.status(err.status || 500);
        res.json({
          error: err
        });
      });
  }
};