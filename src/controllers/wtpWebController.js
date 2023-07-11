const { wtpWebInstances: instances, bots } = require('./chatBotController')

const getWtpQrSession = (req, res) => {
  try {
    const { botId } = req.body
    const { _id } = req.session

    if (!bots.some((vl)=>vl.userId==_id && vl._id == botId)) 
      throw new Error('INVALID_BOT')

    const qr = instances[botId].getQRCode()
    res.send(qr)
  } catch (e) {
    res.status(400).send(e.toString())
  }
}

const sendWtpWebMessage = (req, res) => {
  try {
    const { botId, number, message } = req.body
    const { _id } = req.session

    if (!bots.some((vl)=>vl.userId==_id && vl._id == botId)) 
      throw new Error('INVALID_BOT')

    if(!instances[botId].isReady) throw new Error('INSTANCE_ISNOT_READY')

    instances[botId].sendMessage(`${number}@c.us`, message)
    res.send('ready')
  } catch (e) {
    res.status(400).send(e.toString())
  }
}

module.exports = {
  getWtpQrSession,
  sendWtpWebMessage
}