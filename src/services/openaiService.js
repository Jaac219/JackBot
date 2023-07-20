const axios = require('axios')
// const { Configuration, OpenAIApi } = require('openai')

// const configuration = new Configuration({
//   apiKey: process.env.OPENIA_KEY
// })
// const openai = new OpenAIApi(configuration)

// const response = await openai.createChatCompletion({
//   model: 'gpt-3.5-turbo',
//   messages
// })

const httpOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENIA_KEY}`,
  },
}

const getCompletion = async ({ prompt, model }) => {
  try {
    const url = 'https://api.openai.com/v1/completions'
    const body = {
      model,
      prompt,
      // max_tokens: 500,
      // temperature: 0.5
    }

    const response = await axios.post(url, body, httpOptions)
    return response.data.choices[0].text
  } catch (e) {
    return Promise.reject(e)
  }
}

const getChatCompletion = async ({ messages, model = 'gpt-3.5-turbo' }) => {
  try {
    const url = 'https://api.openai.com/v1/chat/completions'
    const body = {
      model,
      messages,
      temperature: 0.5
    }

    const response = await axios.post(url, body, httpOptions)
    return response.data.choices[0].message.content
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  getCompletion,
  getChatCompletion
}