const {ContainerProductos} = require("./containers/ContainerProductos.js")

const contenedorPr = new ContainerProductos('productos.txt')

function listarProductos() {
    return contenedorPr.getAll()
}

module.exports = {listarProductos}


