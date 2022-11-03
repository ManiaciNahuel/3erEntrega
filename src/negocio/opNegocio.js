const {listarProductos} = require('../persistencia/operaciones.js')

function listProductos() {
    return listarProductos()
}

module.exports = {listProductos}