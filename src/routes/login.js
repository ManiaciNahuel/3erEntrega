const Router = require('express');
const passport = require('passport');
const { postLogout, getFailLogin, getLogin, getRegister, getFailRegister, getIndex, postProducto } = require('../controllers/operations')
const { upload } = require('../utils/multer.js')


const routerP = Router()


routerP.post("/upload", upload.single('avatar1'), (req, res) => {
    console.log("Uploaded");
    res.redirect("/")
})

routerP.post(
    '/login',
    passport.authenticate('login',
        { failureRedirect: "/getFailLogin" }),
    getIndex
)

routerP.get('/getFailLogin', getFailLogin)
routerP.post('/register',
    upload.single("avatar"),
    passport.authenticate('register',
        { failureRedirect: "/getFailRegister", successRedirect: '/' }),
    getIndex
)

//routerP.get('/getDatos', getDatos)
routerP.post("/redirect-login", (req, res) => res.redirect("/login"));
routerP.post('/logout', postLogout)
routerP.get('/register', getRegister)
routerP.get('/login', getLogin)
routerP.post('/productos', postProducto)
routerP.get('/getFailRegister', getFailRegister)

module.exports = { routerP }; 