const express = require("express");
const router = express.Router();
const products = require("../model/product");

router.get("/", (req, res) => {
    const mostrarProductos = products.showProducts()
    res.render("products", {mostrarProductos: mostrarProductos});
});

router.get("/nuevo", (req, res) => {
    res.render("newProduct")
});

router.post("/nuevo-valid", (req, res) => {
    const newProduct = req.body;
    products.setProduct(newProduct);
    res.render("newProductValid", {producto: newProduct});
});

module.exports = router;