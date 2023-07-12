const { Schema, model } = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const collectionName = 'user'

const schema = new Schema({
  _id: { type: String, default: uuidv4 },
  name: String
},
  {
    _id: false,
    versionKey: false,
    collection: collectionName
  }
)

module.exports = model(collectionName, schema)