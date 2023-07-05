const { Client, LocalAuth, RemoteAuth } = require('whatsapp-web.js')
const { MongoStore } = require('wwebjs-mongo')
// const mongoose = require('mongoose')

const data = [
  { id: '1234' },
  { id: '9876' }
]

// const store = new MongoStore({ mongoose: mongoose })
let wtpWebInstances = {}

class WtpWebService {
  constructor(clientId) {
    this.client = new Client({
      authStrategy: new LocalAuth({
        dataPath: `./src/storage`,
        clientId
        // store: store,
        // backupSyncIntervalMs: 300000
      })
    })
    this.qrCode = ''

    this.client.on('qr', qr => {
      console.log(qr);
      this.qrCode = qr
    })

    this.client.on('ready', () => {
      console.log(`Client ${clientId} is ready!`)
    })

    this.client.on('message', message => {
      console.log('Nuevo mensaje recibido:', message.body)

      if (message.body === 'ping') {
        message.reply('pong')
      }
    })

    this.client.on('remote_session_saved', () => {
      console.log('Session saved remote storage')
    })
   
    this.client.initialize()
  }

  getQRCode() {
    return this.qrCode
  }

  getClient() {
    return this.client
  }

  sendMessage(number, message) {
    this.client.sendMessage(number, message)
  }

  // handleMessage(callback) {
  //   this.client.on('message', callback)
  // }
}

const createWtpWebInstance = (clientId) => {
  wtpWebInstances[clientId] = new WtpWebService(clientId)
}

const getWtpWebInstance = () => {
  return wtpWebInstances
}

const initInstances = () => {
  data.forEach((cli)=>{
    createWtpWebInstance(cli.id)
  })
}

module.exports = {
  WtpWebService,
  createWtpWebInstance,
  getWtpWebInstance,
  initInstances
}