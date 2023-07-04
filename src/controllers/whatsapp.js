const verifyToken = (req, res) => {
  res.send('verify token')
}

const receibeMessage = (req, res) => {
  res.send('receibe Message')

}

module.exports = {
  verifyToken,
  receibeMessage
}