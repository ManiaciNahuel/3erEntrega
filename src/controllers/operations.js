// Routes login register
const {listProductos} = require("../negocio/opNegocio.js");


const productos = listProductos()


const getIndex = async (req, res) => {
    console.log(productos);
    const { username, password, direccion, avatar, edad, telefono } = req.user;
    await res.render('index', { productos, usuario: {username, password, direccion, avatar, edad, telefono}}) 
}

const getLogin = (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect("/")
    } else res.render("login");
} 

const getRegister = (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect("/")
    } else res.render('register');
}

const getFailRegister = (req, res) => {
    res.render('register-error');
}

const getFailLogin = (req, res) => {
    res.render('login-error');
}

const postLogout = (req, res) => {
    req.logout((error) => {
		if (error) next(error);
	});
    res.redirect('/')
}

module.exports = {getIndex, getLogin, getRegister, postLogout, getFailRegister, getFailLogin}