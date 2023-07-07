const WtpWebService = require('../services/wtpWebService')
const { Configuration, OpenAIApi } = require('openai')

const bots = [
  { _id: 1, name: 'jackBot', userId: 1 }
]

let context = []

const whatsappInstances = {};
// const instagramInstances = {}
// const messengerInstances = {}

(()=>{
  bots.forEach((bot) => {
    whatsappInstances[bot._id] = new WtpWebService(bot._id)
    whatsappInstances[bot._id].handleMessage(async (message) => {

      console.log('Nuevo mensaje recibido:', message.body)
      const rs = await getGptResp(message.body)

      whatsappInstances[bot._id].sendMessage(message.from, rs)
    })
  })
})()

const configuration = new Configuration({
  apiKey: process.env.OPENIA_KEY
})
const openai = new OpenAIApi(configuration)


const getGptResp = async (message) => {
  try {
    if(context.length > 20 ) context = []
    context.push({role: 'user', content: message})

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: context
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
  whatsappInstances,
  bots,
  gptTestMessage
}
