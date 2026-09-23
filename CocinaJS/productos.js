// ====================================
// ARRAY DONDE SE ALMACENAN LOS PRODUCTOS
// ====================================

let productos = [];


// ====================================
// MÉTODO PARA AGREGAR
// ====================================

function agregarProducto(nombre, precio, cantidad, categoria) {

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };

    productos.push(producto);

    console.log("Producto agregado correctamente.");
}


// ====================================
// MÉTODO PARA LISTAR
// ====================================

function listarProductos() {

    console.log("\n===== CAFETERÍA - PRODUCTOS =====");

    if (productos.length === 0) {
        console.log("No hay productos registrados.");
        return;
    }

    productos.forEach((producto, index) => {

        console.log(
            `${index + 1}. ${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad} | Categoría: ${producto.categoria}`
        );

    });
}


// ====================================
// MÉTODO PARA EDITAR
// ====================================

function editarProducto(indice, nombre, precio, cantidad, categoria) {

    if (indice >= 0 && indice < productos.length) {

        productos[indice].nombre = nombre;
        productos[indice].precio = precio;
        productos[indice].cantidad = cantidad;
        productos[indice].categoria = categoria;

        console.log("Producto editado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// ====================================
// MÉTODO PARA ELIMINAR
// ====================================

function eliminarProducto(indice) {

    if (indice >= 0 && indice < productos.length) {

        productos.splice(indice, 1);

        console.log("Producto eliminado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// ====================================
// PRODUCTOS DE LA CAFETERÍA
// ====================================

// AGREGAR PRODUCTOS

agregarProducto("Café Americano", 35, 20, "bebida");

agregarProducto("Cappuccino", 55, 15, "bebida");

agregarProducto("Frappé de Chocolate", 65, 10, "bebida");

agregarProducto("Pastel de Chocolate", 50, 8, "postre");

agregarProducto("Galletas", 25, 30, "postre");


// ====================================
// LISTAR PRODUCTOS
// ====================================

listarProductos();


// ====================================
// EDITAR PRODUCTO
// ====================================

editarProducto(1, "Cappuccino Vainilla", 60, 18, "bebida");


// MOSTRAR PRODUCTOS DESPUÉS DE EDITAR

listarProductos();


// ====================================
// ELIMINAR PRODUCTO
// ====================================

eliminarProducto(3);


// MOSTRAR LISTA FINAL

listarProductos();


// ====================================
// SEGUNDA PARTE
// FILTER()
// ====================================


// BUSCAR PRODUCTOS BARATOS

function productosBaratos() {

    let baratos = productos.filter(producto => producto.precio < 50);

    console.log("\n===== PRODUCTOS BARATOS =====");

    baratos.forEach(producto => {
        console.log(
            `${producto.nombre} - $${producto.precio}`
        );
    });
}


// BUSCAR PRODUCTOS CAROS

function productosCaros() {

    let caros = productos.filter(producto => producto.precio >= 50);

    console.log("\n===== PRODUCTOS CAROS =====");

    caros.forEach(producto => {
        console.log(
            `${producto.nombre} - $${producto.precio}`
        );
    });
}


// BUSCAR BEBIDAS

function buscarBebidas() {

    let bebidas = productos.filter(
        producto => producto.categoria === "bebida"
    );

    console.log("\n===== BEBIDAS =====");

    bebidas.forEach(producto => {
        console.log(
            `${producto.nombre} - $${producto.precio}`
        );
    });
}


// BUSCAR POSTRES

function buscarPostres() {

    let postres = productos.filter(
        producto => producto.categoria === "postre"
    );

    console.log("\n===== POSTRES =====");

    postres.forEach(producto => {
        console.log(
            `${producto.nombre} - $${producto.precio}`
        );
    });
}


// ====================================
// FIND()
// ====================================


// BUSCAR UN PRODUCTO ESPECÍFICO

function buscarProducto(nombre) {

    let productoEncontrado = productos.find(
        producto => producto.nombre === nombre
    );

    console.log("\n===== BUSCAR PRODUCTO =====");

    if (productoEncontrado) {

        console.log(
            `Producto encontrado: ${productoEncontrado.nombre}`
        );

        console.log(
            `Precio: $${productoEncontrado.precio}`
        );

        console.log(
            `Cantidad: ${productoEncontrado.cantidad}`
        );

        console.log(
            `Categoría: ${productoEncontrado.categoria}`
        );

    } else {

        console.log("Producto no encontrado.");
    }
}


// ====================================
// EJECUTAR SEGUNDA PARTE
// ====================================

productosBaratos();

productosCaros();

buscarBebidas();

buscarPostres();

buscarProducto("Café Americano");