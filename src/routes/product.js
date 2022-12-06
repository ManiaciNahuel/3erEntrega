const { Router } = require('express');
const { guardarProduct } = require('../negocio/opNegocio');
const ContenedorMg = require('../persistencia/containers/ContainerProductos');
const { guardarProd } = require('../persistencia/operaciones');
const routerProduct = Router()



const productos = new ContenedorMg

routerProduct.get('/productos', async (request, respuesta) => {
    respuesta.send(await productos.getAll())
    /* respuesta.render("index", { productos }) */
})

routerProduct.post('/productos', (req, res) => {
    const newObject = req.body
    productos.push(newObject)
    guardarProduct(newObject)
    res.redirect("/")
})

module.exports = { routerProduct };