const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt')
const usuarios = []

/* PASSPORT */

passport.use('register', new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, done) => {

  const { direccion, edad, telefono } = req.body

  const usuario = usuarios.find(usuario => usuario.username == username)
  if (usuario) {
    return done('already registered') || console.log("Redirect");
  }

  const user = {
    username,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    direccion,
    edad, 
    avatar: req.file.filename, 
    telefono 
  };
  console.log(user); 
  usuarios.push(user)
  return done(null, user)
}));

passport.use('login', new LocalStrategy((username, password, done) => {

  const user = usuarios.find(usuario => usuario.username == username)

  if (!user) {
    return done(null, false)
  }
  
  if (!bcrypt.compareSync(password, user.password)) {
    return done(null, false)
  }

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

const uploadFile = (req, res, next) => {
	const file = req.file;
	if (file) {
		next();
	} else {
		res.send("No has subido ningun archivo <a href='/register'>Registrarse</a>");
	}
};


module.exports = {auth, uploadFile}