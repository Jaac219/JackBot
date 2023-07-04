const { Router } = require('express')
const { receibeMessage, verifyToken } = require('../controllers/whatsapp')
const router = Router()

router.get('/', verifyToken)
router.post('/', receibeMessage)

module.exports = router