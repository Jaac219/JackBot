const WtpWebService = require('../services/wtpWebService')
const { getWtpWebInstance } = require('../services/wtpWebService')

const instances = getWtpWebInstance()
// const clients = Object.keys(instances)

// if (clients.length > 0) {
//   console.log('------> Intoooo')
//   clients.forEach((cl) => {
//     // Definir la acción para manejar los mensajes entrantes
//     instances[cl].handleMessage(message => {
//       console.log('Nuevo mensaje recibido:', message.body)

//       if (message.body === 'ping') {
//         message.reply('pong')
//       } else {
//         message.reply('Lo siento, no entiendo ese comando.')
//       }
//     })
//   })
// }

const getWtpQrSession = (req, res) => {
  try {
    const { id } = req.session
    const qr = instances['9876'].getQRCode()
    console.log(qr)
    res.send(qr)
  } catch (e) {
    console.log(e)
  }
}

const sendWtpWebMessage = (req, res) => {
  try {
    instances['9876'].sendMessage(`573107464006@c.us`, 'hello from testing')
    res.send('ready')
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getWtpQrSession,
  sendWtpWebMessage
}