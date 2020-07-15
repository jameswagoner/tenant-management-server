const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    });
  } else {
    const token = authHeader.split(' ')[1];

    if (token) {
      return verify(token)
        .then(user => {
          res.user = user
          next()
        })
        .catch((err) => {
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        });
    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      });
    }
  }
}
