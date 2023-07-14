require('dotenv').config()
const { connect } = require('mongoose')

global['colors'] = require('colors')

const db = process.env.MONGODB_URI

connect(db).then(() => {
  const app = require('./src/app')
  
  app.listen(process.env.PORT || 4000, async () => {
    console.log('Listening in port:', process.env.PORT)
  })
})

// Entidades
// User - (Bot - Flow) - Acount - Provider

// Flow
// Intents - Intenciones
// Fallbacks - Volver a llamar la intencion
// Entities - entidades. ejm: @color: red, green, blue 