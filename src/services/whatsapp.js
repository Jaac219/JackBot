const axios = require('axios')
const { WHATSAPP_META_URL: url, WHATSAPP_META_TOKEN: token } = process.env

const sendMessage = async (message, number) => {
  try {
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

    const rs = await axios.post(url, body, options)
    console.log('Axios res ---> ', rs);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  sendMessage
}