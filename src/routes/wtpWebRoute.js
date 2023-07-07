const { Router } = require('express')
const router = Router()

const { getWtpQrSession, sendWtpWebMessage } = require('../controllers/wtpWebController')
const { gptTestMessage } = require('../controllers/chatBotController')

require('../services/wtpWebService')

router.get('/qr', getWtpQrSession)
router.post('/send', sendWtpWebMessage)
router.post('/gptTest', gptTestMessage)

module.exports = router