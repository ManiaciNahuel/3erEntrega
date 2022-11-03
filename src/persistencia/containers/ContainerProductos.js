const fs = require("fs");


class ContainerProductos{
    constructor(file){
        this.productos = file;
    }

    async save(producto){
        let id = this.productos.length + 1;
        producto.id = id;
        this.productos.push(producto)
    }

    getAll(){
        try {
            const file = fs.readFileSync(this.productos, 'utf-8')
            return JSON.parse(file)
        } catch(error) {
            return "no file";
        }
    }

    getById(id){
        // retorna producto con id 
    }
}

module.exports = {ContainerProductos};