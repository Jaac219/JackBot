const jwt = require('jsonwebtoken')
const { v4: uuid4 } = require('uuid')

const users = [
  {_id: 1, name: 'johan', userName: 'jaac2191', email: 'jaac219@gmail.com', password: 'asd123'},
  {_id: 2, name: 'sebastina', userName: 'sepa2180', email: 'dev11@codecraftdev.com', password: 'asd123'},
  {_id: 3, name: 'diego', userName: 'digo5345', email: 'dev17@codecraftdev.com', password: 'asd123'}
]

const login = (req, res) => {
  try {
    const { userOrEmail, password } = req.body
    const user = users.find((val) => {
      if(val.userName === userOrEmail || val.email === userOrEmail){
        if(val.password === password) return val
      }
    })

    if (!user) throw new Error('INVALID_USER_OR_PASSWORD')
    
    const { _id, name, userName, email } = user
    const payload = {
      _id,
      name,
      email,
      userName
    }

    const token =  jwt.sign(payload, 'secreto', { expiresIn: '24h' })
    
    res.status(200).json({ token })
  } catch (e) {
    console.log(colors.red(e.message))
    res.status(400).json(e.toString())
  }
}

module.exports = {
  login
}