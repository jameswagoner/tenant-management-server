const invoice = require('./routes/invoice');
const tenant = require('./routes/tenant');
const user = require('./routes/user');

const init = (server) => {
  // Use defined routes
  server.get('/', (req, res) => {
    res.status(200)
      .send('Silence is golden.')
  });

  server.use('/invoices', invoice);
  server.use('/tenants', tenant);
  server.use('/users', user);

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
      error: {
        message: err.message
      }
    });
  });
}

module.exports = {
  init: init
}
