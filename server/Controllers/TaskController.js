const TaskService = require('../Services/TaskService');

module.exports = {
  index: (req, res) => {
    TaskService.all()
      .then(tasks => res.json(tasks));
  },
  show: (req, res) => {
    TaskService.find(req.params.id)
      .then(task => {
        if (task) {
          res.json(task);
        } else {
          res.status(404).send();
        }
      });
  },
  store: (req, res) => {
    TaskService.create(req.params)
      .then(task => res.json(task));
  }
}
