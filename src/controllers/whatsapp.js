const verifyToken = (req, res) => {
  try {
    const accessToken = "AJSDLFJASLDFASJDFLAKSFD"
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    console.log(accessToken, token, challenge)

    if(challenge && token === accessToken) res.send(challenge)
    else res.status(400).send()
  } catch (e) {
    res.status(400).send()
  }
}

const receibeMessage = (req, res) => {
  res.send('receibe Message')

}

module.exports = {
  verifyToken,
  receibeMessage
}