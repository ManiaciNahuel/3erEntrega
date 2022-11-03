const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport');
const MongoStore = require('connect-mongo');
const { routerP } = require('./src/routes/login');
const { auth } = require('./src/middlewares/index');
const { getFailLogin, getIndex } = require('./src/controllers/operations');

const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true}
require('dotenv').config()

/* DATABASE */
 const app = express()


/* MIDDLEWARE */

app.use(session({
  store: MongoStore.create({
      mongoUrl: 'mongodb+srv://Nahuel_Maniaci:nahue123@cluster0.qvotb9b.mongodb.net/new',
      mongoOptions: advancedOptions
  }),
  
  secret: 'secreto',
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 600000
  }
}))

app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session()); 
app.set('view engine', 'ejs');
app.use(express.static('public/images'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routerP)
routerP.get('/', auth, getIndex)
routerP.get('/login', auth, getFailLogin)



/* SERVER */

const PORT = process.env.PORT || 8080;
const serverMode =  "FORK";

/* MASTER */
if (serverMode == "CUSTER"){
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++){
      cluster.fork()
    }
  
    cluster.on('exit', worker => {
      logger.info('Worker', worker.process.pid, 'died', new Date().toLocaleString());
      cluster.fork()
    })
  }
  /* LISTEN */
  else {
    const server = app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT} - PID WORKER: ${process.pid}`)
    })
    server.on("error", error => logger.error(`Error en servidor: ${error}`))
  }

}else {
  const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} - PID WORKER: ${process.pid}`)
  })
  server.on("error", error => logger.error(`Error en servidor: ${error}`))
}
