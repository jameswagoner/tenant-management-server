const authorized = require('./Middleware/Authenticated');
const AuthController = require('./Controllers/AuthController');

const tenant = require('./routes/tenant');
const task = require('./routes/task');
const user = require('./routes/user');

const init = (server) => {
  // Use defined routes
  server.get('/', (req, res) => {
    res.status(200)
      .send('Silence is golden.')
  });

  server.post('/login', AuthController.login);
  server.get('/logout', authorized, AuthController.logout);

  server.use('/tenants', authorized, tenant);
  server.use('/tasks', authorized, task);
  server.use('/users', authorized, user);

  // Use 404 route
  server.use((req, res, next) => {
    const error = new Error('Not found at all');
    error.status = 404;
    next(error);
  });

  // Use error route
  server.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      error: err
    });
  });
}

module.exports = {
  init: init
}
