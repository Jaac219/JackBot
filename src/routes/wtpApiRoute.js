const { Router } = require('express')
const { receibeMessage, verifyToken, sendMessage } = require('../controllers/wtpApiController')
const router = Router()

router.get('/', verifyToken)
router.post('/', receibeMessage)
router.post('/send', sendMessage)

module.exports = router