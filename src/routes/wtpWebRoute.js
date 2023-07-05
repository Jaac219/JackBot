const { Router } = require('express')
const router = Router()

const { getWtpQrSession, sendWtpWebMessage } = require('../controllers/wtpWebController')

require('../services/wtpWebService')

router.get('/qr', getWtpQrSession)
router.post('/send', sendWtpWebMessage)

module.exports = router