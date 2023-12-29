const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send(`Escuachando puerto ${PORT}`);
});

const userRouter = require("../routes/usersRouter");
app.use("/usuario", userRouter);

const productsRouter = require("../routes/productsRouter");
app.use("/productos", productsRouter);

app.listen(PORT, () => {
    console.log(`Escuchando puerto http://localhost:${PORT}`);
});