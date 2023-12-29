const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "models", "products.json");

const getProducts = () => {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
}
const setProductId = () => {
    const products = getProducts();
    const maxId = Math.max(...products.map(p => p.id));
    const newProductId = maxId + 1;
    return newProductId;
}

const setProduct = (newProduct) => {
    const products = getProducts();
    newProduct.id = setProductId();
    products.push(newProduct);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}


module.exports = {
    getProducts,
    setProduct,
    setProductId
}