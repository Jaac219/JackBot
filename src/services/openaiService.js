const axios = require('axios')

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

const getChatCompletion = async ({ messages, model }) => {
  try {
    const url = 'https://api.openai.com/v1/chat/completions'
    const body = {
      model,
      messages,
      temperature: 0.6
      // max_tokens: 50,
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