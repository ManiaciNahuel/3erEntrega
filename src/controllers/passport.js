// Routes login register
const passport = require('passport');


const getLogin = (req, res) => {
    if (req.isAuthenticated()) {
		const { username } = req.user;
        console.log(username);
		res.render("home");
	} else res.render("login");
}

const getRegister = (req, res) => {
    res.render('register')
}
const getIndex = (req, res) => {
    res.render('index')
}

const getFailRegister = (req, res) => {
    res.render('register-error');
}

const postLogin = (req, res) => {
	const { username } = req.user;
	res.render("index", { username });
};

const getFailLogin = (req, res) => {
    res.render('login-error');
}

const getLogout = (req, res) => {
    req.logout((error) => {
		if (error) next(error);
	});
    res.redirect('/')
}

module.exports = {getIndex, getLogin, getRegister, getLogout, getFailRegister, getFailLogin, postLogin}