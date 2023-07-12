const WtpWebService = require('../services/wtpWebService')
const { getCompletion, getChatCompletion } = require('../services/openaiService')
// const { Configuration, OpenAIApi } = require('openai')

const bots = [
  { _id: 1, name: 'jackBot', userId: 1 }
]

const initPromp = { role: 'system', content: 'Quiero que actues como un vendedor de productos digitales presentate como jaackBot. Tu mision va a ser lograr hacer conversiones (ventas) con respuestas cortas que no tengan mas de 2 parrafos. Niegate a responder cualquier pregunta que no sea acerca de productos digitales. Nunca salgas de tu personaje. Crear productos de manera ficticia y enviar al siguiente link de compra explicitamente: "http://www.google.com" para que el usuario realice la compra. Agrega emojis a las respuestas.' }
let context = []

const whatsappInstances = {};
// const instagramInstances = {}
// const messengerInstances = {}

(()=>{
  bots.forEach((bot) => {
    whatsappInstances[bot._id] = new WtpWebService(bot._id)
    whatsappInstances[bot._id].handleMessage(async (message) => {

      console.log('Nuevo mensaje recibido:', message.body)
      const response = await getGptResp(message.body)

      whatsappInstances[bot._id].sendMessage(message.from, response)
    })
  })
})()

// const configuration = new Configuration({
//   apiKey: process.env.OPENIA_KEY
// })
// const openai = new OpenAIApi(configuration)


const getGptResp = async (message) => {
  try {
    if(context.length > 10 ) context = []
    if(context.length === 0 ) context.push(initPromp)

    context.push({role: 'user', content: message})

    // const response = await openai.createChatCompletion({
    //   model: 'gpt-3.5-turbo',
    //   messages: context
    // })
    const response = await getChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: context,
    })

    context.push({role: 'system', content: response})

    return response
  } catch (e) {
    return Promise.reject(e)
  }
}

const gptTestMessage = async (req, res) => {
  try {
    const { message } = req.body
    const rs = await getChatCompletion({messages: message, model: 'gpt-3.5-turbo' })
    
    res.send(rs)
  } catch (e) {
    res.json(e)
  }
}

module.exports = {
  whatsappInstances,
  bots,
  gptTestMessage
}
