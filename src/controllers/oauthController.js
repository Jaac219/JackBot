const jwt = require('jsonwebtoken')
const { v4: uuid4 } = require('uuid')

const login = (req, res) => {
  try {
    const { userOrEmail, password } = req.body
    const validation = userOrEmail === 'jaac219@gmail.com' && password === '1234'

    if (!validation) throw new Error('INVALID_USER_OR_PASSWORD')

    const payload = {
        id: uuid4(),
        name: 'test',
        userName: 'Test',
        email: 'jaac219@gmail.com'
    }

    const token =  jwt.sign(payload, 'secreto', { expiresIn: '24h' })
    
    res.status(200).json({ token })
  } catch (e) {
    console.log(e)
    res.status(400).json(e)
  }
}

module.exports = {
  login
}