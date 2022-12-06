const {listarProductos, guardarProd} = require('../persistencia/operaciones.js')

function listProductos() {
    return listarProductos()
}
function guardarProduct(producto) {
    return guardarProd(producto)
}

module.exports = {listProductos, guardarProduct}