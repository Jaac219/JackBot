const axios = require('axios')
const { WHATSAPP_META_URL: url, WHATSAPP_META_TOKEN: token } = process.env

const sendWtpApiMessage = async (message, number) => {
  try {

    // Esta pendiente crear templates para manejar tipos
    // y cuerpo de los mensajes
    const body = {
      'messaging_product': 'whatsapp',
      'to': number,
      'text': {
        'body': message
      },
      'type': 'text'
    }

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    return await axios.post(url, body, options)
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  sendWtpApiMessage
}