const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers
    const session = jwt.verify(authorization, 'secreto')
    req.session = session
    next()
  } catch (e) {
    res.status(400).json(e)
  }
}

module.exports = {
  verifyToken
}