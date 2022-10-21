const { Router } = require('express');
const routerUser = Router()
const { getAll } = require('../controllers/passport')


routerUser.post('/', (req, res) => {
    res.json({ msg: 'Post user'})
})

routerUser.put('/', (req, res) => {
    res.json({ msg: 'Put user'})
})


module.exports = routerUser;