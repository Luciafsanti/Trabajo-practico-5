const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "dataBase", "products.json");

/**
 * Lee el archivo products.json y devuelve los productos como un array de objetos.
 * @returns {Object[]} Un array de objetos (productos).
 */

const getProducts = () => {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
}

/**
 * Devuelve el ID de un nuevo proucto, siendo este mayor que el mayor de los ID guardados en el archivo products.json.
 * Si no hay productos (el array esta vacio), devuelve 0 y asigna el ID igual a 1.
 * @param {Object[]} products - Array de productos.
 * @returns {number} El ID del nuevo producto.
 */

const setProductId = () => {
    const products = getProducts();
    let maxId = Math.max(...products.map(p => p.id));
    if (maxId === -Infinity){
        maxId = 0;
    }
    const newProductId = maxId + 1;
    return newProductId;
}

/**
 * Añade un nuevo producto a la lista de productos.
 * @param {Object} newProduct - El nuevo producto a añadir.
 * @param {string} newProduct.productName - El nombre del producto.
 * @param {number} newProduct.productPrice - El precio del producto.
 * @param {number} newProduct.productStock - El stock del producto.
 */

const setProduct = (newProduct) => {
    const products = getProducts();
    newProduct.id = setProductId();
    products.push(newProduct);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

/**
 * Devuelve la lista de productos como una string, separada por una linea de 60 guiones.
 * Sirve para mostrar en pantalla los productos de forma ordenada.
 * @param {Object[]} products - Array de productos.
 * @param {string} separator - String para separar cada producto.
 * @returns {string} Lista de productos como string.
 */

const showProducts = () => {
    const products = [...getProducts()];
    let displayProducts = "";
    let separador = "-";
    for (i = 0 ; i<60; i++){
        separador += "-";
    }
    products.map(prod => {
        displayProducts += "\n" + `ID: ${prod.id}` + '\n' + `Producto: ${prod.productName}` + '\n' + `Precio: ${prod.productPrice}` + "\n" + `Stock: ${prod.productStock}` + "\n" + separador;
    })
    return displayProducts;
}

module.exports = {
    getProducts,
    setProduct,
    setProductId,
    showProducts
}