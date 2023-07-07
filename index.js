require('dotenv').config()
const { connect } = require('mongoose')

const db = process.env.MONGODB_URI

connect(db).then(() => {
  const app = require('./src/app')
  
  app.listen(process.env.PORT || 4000, async () => {
    console.log('Listening in port:', process.env.PORT)
  })
})