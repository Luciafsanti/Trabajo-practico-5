const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "models", "products.json");

const getProducts = () => {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
}
const setProductId = () => {
    const products = getProducts();
    let maxId = Math.max(...products.map(p => p.id));
    if (maxId === -Infinity){
        maxId = 0;
    }
    const newProductId = maxId + 1;
    return newProductId;
}

const setProduct = (newProduct) => {
    const products = getProducts();
    newProduct.id = setProductId();
    products.push(newProduct);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

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