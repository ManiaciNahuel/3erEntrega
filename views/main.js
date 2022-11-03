function render_products(data) {
    let html = data.map(function(product, index) {
        return (`<div>
            <article style="margin-bottom: 40px">
                    <img style="width: 90px; " src=${product.imagen} />
                    <h3>
                        ${product.nombre}
                    </h3>
                    <p>$
                        ${product.precio}
                    </p>
                </article>
                <br>
            `)
    }).join(" ");
    document.getElementById('product_container').innerHTML = html;
}

module.exports = {render_products}