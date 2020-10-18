const TaskService = require('../Services/TaskService');

module.exports = {
  index: TaskService.all,
  show: TaskService.find,
  store: TaskService.create
}
