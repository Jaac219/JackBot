const WtpWebService = require('../services/wtpWebService')
const { Configuration, OpenAIApi } = require('openai')

const bots = [
  { _id: 1, name: 'jackBot', userId: 1 }
]

const initPromp = { role: 'system', content: 'Quiero que actues como un vendedor de productos digitales presentate como jaackBot. Tu mision va a ser lograr hacer conversiones. Niegate a responder cualquier pregunta que no sea acerca de productos digitales. Nunca salgas de tu personaje. Crear el producto de manera ficticia y enviar sl siguiente link de compra explicitament: "http://www.google.com" para que el usuario realice la compra' }
let context = []

const wtpWebInstances = {};
// const instagramInstances = {}
// const messengerInstances = {}

(()=>{
  bots.forEach((bot) => {
    wtpWebInstances[bot._id] = new WtpWebService(bot._id)
    wtpWebInstances[bot._id].handleMessage(async (message) => {

      console.log('Nuevo mensaje recibido:', message.body)

      wtpWebInstances[bot._id].sendMessage(message.from, "Dame un momento por favor ...")
      const rs = await getGptResp(message.body)

      wtpWebInstances[bot._id].sendMessage(message.from, rs)
    })
  })
})()

const configuration = new Configuration({
  apiKey: process.env.OPENIA_KEY
})
const openai = new OpenAIApi(configuration)


const getGptResp = async (message) => {
  try {
    if(context.length > 10 ) context = []
    if(context.length === 0 ) context.push(initPromp)

    context.push({role: 'user', content: message})

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: context,
      temperature: 0.6
    })

    const rs = response?.data?.choices[0].message.content
    context.push({role: 'system', content: rs})

    return rs
  } catch (e) {
    console.log(e)
    return e.toString()
  }
}

const gptTestMessage = async (req, res) => {
  try {
    const rs = await getGptResp('Hola!')
    res.json(rs)
  } catch (e) {
    console.log(e)
    res.json(e)
  }
}

module.exports = {
  wtpWebInstances,
  bots,
  gptTestMessage
}
