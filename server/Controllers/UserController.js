const UserService = require('../Services/UserService');

module.exports = {
  index: UserService.all,
  show: UserService.find,
  store: UserService.create
}
