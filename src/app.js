const express = require("express");
const app = express();
const PORT = 3000;
const users = require("../controllers/userControllers");
const path = require("path");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send(`Escuachando puerto ${PORT}`);
});


app.get("/usuario", (req, res) => {
    res.render("usuario", {newUserLink:`http://localhost:${PORT}`});
});

app.post("/nuevo-usuario", (req, res) => {
    const user = req.body;
    users.setUser(user);
    res.render("newUser.ejs", {usuario: user});
});

const newUserLink = "/usuario";

app.get("/nuevo-producto", (req, res) => {
    res.render("newProduct");
});

app.get("/products", (req, res) => {
    res.render("products");
});

app.listen(PORT, () => {
    console.log(`Escuchando puerto http://localhost:${PORT}`);
});