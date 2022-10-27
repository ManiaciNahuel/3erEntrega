const Router = require('express');
const passport = require('passport');
const {auth, uploadFile} = require('../middlewares/index.js')
const { postLogout, getFailLogin, getLogin, getRegister, getFailRegister, postLogin, getIndex, postRegister} = require('../controllers/passport.js')
const {upload} = require('../utils/multer.js')


const routerP = Router()


routerP.post("/upload", upload.single('avatar1'), (req, res) => {
  console.log("Uploaded");
  res.redirect("/")
} )

routerP.post(
    '/login',
    passport.authenticate('login', 
    { failureRedirect: "/getFailLogin" }),
    postLogin
    )
    
routerP.get('/getFailLogin', getFailLogin)
routerP.post('/register',
    upload.single("avatar"),
    uploadFile,
    passport.authenticate('register', 
        {failureRedirect: "/getFailRegister", successRedirect: '/' }),
    postRegister
)
    
    //routerP.get('/getDatos', getDatos)
routerP.post("/redirect-login", (req, res) => res.redirect("/login"));
routerP.post('/logout', postLogout)
routerP.get('/register', getRegister)
routerP.get('/login', getLogin)

routerP.get('/getFailRegister', getFailRegister)
 
module.exports =  { routerP }; 