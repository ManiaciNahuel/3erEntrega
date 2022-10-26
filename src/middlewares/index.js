const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local');

const usuarios = []

/* PASSPORT */

passport.use('register', new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, done) => {

  const { direccion, edad, avatar, telefono } = req.body

  const usuario = usuarios.find(usuario => usuario.username == username)
  if (usuario) {
    return done('already registered') || console.log("Redirect");
  }

  const user = {
    username,
    password,
    direccion,
    edad, 
    avatar, 
    telefono 
  }
  
  usuarios.push(user)
  //console.log(user);
  return done(null, user)
}));

passport.use('login', new LocalStrategy((username, password, done) => {

  const user = usuarios.find(usuario => usuario.username == username)

  if (!user) {
    return done(null, false)
  }

  if (user.password != password) {
    return done(null, false)
  }

  user.contador = 0
  //console.log(user);
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const usuario = usuarios.find(usuario => usuario.username == username)
  done(null, usuario);
});

/* SERVER */


const auth = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.redirect("/login");
	}
};

module.exports = {auth}