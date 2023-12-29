const express = require("express");
const router = express.Router();
const products = require("../controllers/productControllers");

router.get("/", (req, res) => {
    res.render("products");
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