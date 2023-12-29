const express = require("express");
const router = express.Router();
const users = require("../controllers/userControllers");

router.get("/", (req, res) => {
    res.render("usuario");
});

router.post("/nuevo", (req, res) => {
    const user = req.body;
    users.setUser(user);
    res.render("newUser.ejs", {usuario: user});
});


module.exports = router;