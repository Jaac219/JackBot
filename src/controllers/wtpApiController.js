const { text } = require('express')
const fs = require('fs')
const { sendWtpApiMessage } = require('../services/wtpApiService')
// const myConsole = new console.Console(fs.createReadStream('./logs.txt'))

// Endpoint habilitado para que meta se pueda sincronizar con mi app
const verifyToken = (req, res) => {
  try {
    const accessToken = "AJSDLFJASLDFASJDFLAKSFD"
    const token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

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

const sendMessage = async (req, res) => {
  try {
    const { message, number } = req.body
    const { data } = await sendWtpApiMessage(message, number)
    res.json(data)
  } catch (e) {
    console.log(e);
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
  receibeMessage,
  sendMessage
}