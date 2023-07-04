const fs = require('fs')
// const myConsole = new console.Console(fs.createReadStream('./logs.txt'))

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
  try {
    const entry = req.body['entry'][0]
    const { value: { messages } } = entry['changes'][0]

    console.log(messages)

    res.status(400).send('EVENT_RECEIVED')
  } catch (e) {
    console.log(e);
    res.status(400).send('EVENT_RECEIVED')
  }
}

module.exports = {
  verifyToken,
  receibeMessage
}