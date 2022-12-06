const ContenedorMg = require("./containers/ContainerProductos.js");
const { ContainerProductos } = require("./containers/ContainerProductos.js")

const contenedorPr = new ContenedorMg

function listarProductos() {
    return contenedorPr.getAll()
}

function guardarProd(producto) {
    /* contenedorPr.upload(producto).then(
        resp => {
            console.log(resp);
            return resp;
        }
    ) */
    return console.log("guardar");
}

module.exports = { listarProductos, guardarProd }


