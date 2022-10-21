const Router = require('express');
const passport = require('passport');
const isAuth = require('../middlewares/index.js')
const { getLogout, getFailLogin, getLogin, getRegister, getFailRegister, postLogin, getIndex} = require('../controllers/passport.js')

const routerP = Router()

routerP.post(
    '/login',
    passport.authenticate('login', 
    { failureRedirect: "/getFailLogin" }),
    postLogin
    )
    
routerP.get('/getFailLogin', getFailLogin)
routerP.post('/register',
    passport.authenticate('register', 
    {failureRedirect: "/getFailRegister", successRedirect: '/' }),
    postLogin
)
    
    //routerP.get('/getDatos', getDatos)
routerP.post("/redirect-login", (req, res) => res.redirect("/login"));
routerP.get('/register', getRegister)
routerP.get('/login', getLogin)
routerP.get('/logout', getLogout)

routerP.get('/getFailRegister', getFailRegister)

module.exports =  { routerP }; 