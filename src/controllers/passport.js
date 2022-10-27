// Routes login register
const passport = require('passport');


const getLogin = (req, res) => {
    if (req.isAuthenticated()) {
		const { username, password, direccion, avatar } = req.user;
		res.render('index', { usuario: {username, password, direccion, avatar} })
	} else res.render("login");
} 

const getRegister = (req, res) => {
    if (req.isAuthenticated()) {
		const { username, password, direccion, avatar } = req.user;
		res.render('index', { usuario: {username, password, direccion, avatar} })
	} else res.render('register');
}

const getIndex = (req, res) => {
    const { username, password, direccion, avatar } = req.user;
	res.render('index', { usuario: {username, password, direccion, avatar} })
}

const getFailRegister = (req, res) => {
    res.render('register-error');
}

const postLogin = (req, res) => {
	const { username, password, direccion, avatar } = req.user;
    res.render('index', { usuario: {username, password, direccion, avatar} })
};

const postRegister = (req, res) => {
	const { username, password, direccion, avatar } = req.user;
    res.render('index', { usuario: {username, password, direccion, avatar} })
};

const getFailLogin = (req, res) => {
    res.render('login-error');
}

const postLogout = (req, res) => {
    req.logout((error) => {
		if (error) next(error);
	});
    res.redirect('/')
}

module.exports = {getIndex, getLogin, getRegister, postRegister, postLogout, getFailRegister, getFailLogin, postLogin}