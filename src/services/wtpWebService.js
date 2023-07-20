const { Client, LocalAuth, RemoteAuth } = require('whatsapp-web.js')
const qrcodetr = require('qrcode-terminal');
class WtpWebService {
  constructor(clientId) {
    this.qrCode = ''
    this.isReady = false
    

    this.client = new Client({
      authStrategy: new LocalAuth({
        dataPath: `./src/storage`,
        clientId
      })
    })

    this.init(clientId)
  }

  init(clientId){
    this.client.on('qr', qr => {
      qrcodetr.generate(qr, {small: true});
      this.qrCode = qr
    })

    this.client.on('ready', () => {
      console.log(`Client ${clientId} is ready!`)
      this.isReady = true
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

  handleMessage(callback) {
    this.client.on('message', callback)
  }
}

module.exports = WtpWebService