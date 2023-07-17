const { Router } = require('express')
const router = Router()

/**
 * Import Routes
 */
const wtpApiRoutes = require('./wtpApiRoute')
const wtpWebRoutes = require('./wtpWebRoute')

/**
 * Import Middlewares
 */
const { verifyToken } = require('../middlewares/oauth')

/**
 * Import Controllers
 */
const { login } = require('../controllers/oauthController');
const { process } = require('../controllers/flowController')

/**
 * Define SubRoutes
 */
router.use('/wtpApi', [verifyToken], wtpApiRoutes)
router.use('/wtpWeb', [verifyToken], wtpWebRoutes)
router.post('/login', login)
router.post('/chat/test/flow/nlp', process)

module.exports = router