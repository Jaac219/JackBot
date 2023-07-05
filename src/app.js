require('dotenv').config()

const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

// const { connect } = require('mongoose')
// const db = process.env.MONGODB_URI

const { initInstances } = require('./services/wtpWebService')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', routes)

// connect(db).then(()=>{
  app.listen(process.env.PORT || 4000, async()=>{
    console.log('Listening in port:', process.env.PORT)
  })
  initInstances()
// })