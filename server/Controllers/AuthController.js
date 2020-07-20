const AuthService = require('../Services/AuthService');

module.exports = {
  login: AuthService.login,
  logout: AuthService.logout,
  refresh: AuthService.refresh
}
