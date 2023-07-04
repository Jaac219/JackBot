const { text } = require('express')
const fs = require('fs')
const { sendMessage } = require('../services/whatsapp')
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

    if (messages != undefined) {
      const txt = getText(messages[0])
      const number = messages[0]['from']

      sendMessage(`El usuario dijo: ${txt}`, number)
    }

    res.send('EVENT_RECEIVED')
  } catch (e) {
    console.log(e);
    res.send('EVENT_RECEIVED')
  }
}

const getText = (messages) => {
  const type = messages['type']
  let txt = ''
  switch (type) {
    case 'text':
        txt = messages['text']['body']
      break;
    case 'interactive':
        const interactiveObj = messages['interactive']
        const typeInteractive = interactiveObj['type']

        txt = interactiveObj[typeInteractive]['title']
      break;
    default:
        console.log('Sin mensaje');
      break;
  }
  console.log('Txt entrante ----> ', txt)
  return txt
}

module.exports = {
  verifyToken,
  receibeMessage
}