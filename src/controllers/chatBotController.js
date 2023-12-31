const WtpWebService = require('../services/wtpWebService')
const { getCompletion, getChatCompletion } = require('../services/openaiService')
const { process } = require('./flowController')

const bots = [
  {
    _id: 1, name: 'jackBot', userId: 1,
    // accounts: [
    //   {_id: 1, key: 'whatsapp', provider: 'whatsapp-web'},
    //   {_id: 2, key: 'instagram', provider: 'api'},
    //   {_id: 3, key: 'messenger', provider: 'api'},
    //   {_id: 4, key: 'whatsapp', provider: 'api'}
    // ]
  }
]

const initPromp = { role: 'system', content: 'Quiero que actues como un vendedor de productos digitales presentate como jaackBot. Tu mision va a ser lograr hacer conversiones (ventas) con respuestas cortas que no tengan mas de 2 parrafos. Niegate a responder cualquier pregunta que no sea acerca de productos digitales. Nunca salgas de tu personaje. Crear productos de manera ficticia y enviar al siguiente link de compra explicitamente: "http://www.google.com" para que el usuario realice la compra. Agrega emojis a las respuestas.' }

const chatHistory = {}
const wtpWebInstances = {}
// const wtpApiInstances = {}
// const instagramInstances = {}
// const messengerInstances = {}

const turnOnBots = async () => {
  bots.forEach((bot) => {
    // Pending start flow for each robot
    wtpWebInstances[bot._id] = new WtpWebService(bot._id)
    wtpWebInstances[bot._id].handleMessage(async (message) => {
      try {
        const client = wtpWebInstances[bot._id].getClient()
        console.log(colors.bold.brightGreen('Nuevo mensaje recibido:'), message.body)
        
        const chat = await client.getChatById(message.from)
        await chat.sendStateTyping()
        
        let response = ''
        response = await process(message.body, message.from)
        // response = await createGptConversation(message.body, message.from)
        client.sendMessage(message.from, response)
      } catch (e) {
        console.log(colors.red(e.message))
        client.sendMessage(message.from, 'Tuvimos un problema, podrías repetir la pregunta.')
      }
    })
  })
}

const createGptConversation = async (message, historyId) => {
  try {
    if(!chatHistory[historyId]) chatHistory[historyId] = [initPromp]
    if(chatHistory[historyId].length > 10 ) chatHistory[historyId].splice(1, 2)

    chatHistory[historyId].push({role: 'user', content: message})

    const response = await getChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: chatHistory[historyId]
    })

    chatHistory[historyId].push({role: 'system', content: response})

    return response
  } catch (e) {
    chatHistory[historyId].pop()
    return Promise.reject(e)
  }
}

// EndPoint api rest for test message gpt
const gptTestMessage = async (req, res) => {
  try {
    const { message } = req.body
    // const rs = await getChatCompletion({messages: message, model: 'gpt-3.5-turbo' })
    const rs = await createGptConversation(message, 88412)
    
    res.send(rs)
  } catch (e) {
    res.json(e)
  }
};

turnOnBots()

module.exports = {
  wtpWebInstances,
  bots,
  gptTestMessage
}
