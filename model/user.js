const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "dataBase", "users.json");

/**
 * Lee el archivo users.json y devuelve los usuarios como un array de objetos.
 * @returns {Object[]} Un array de objetos (usuarios).
 */

const getUsers = () => {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
}

/**
 * Añade un nuevo usuario a la lista de usuarios.
 * @param {Object} newUser - El objeto de usuario a añadir.
 * @param {string} newUser.userId - El ID de usuario.
 * @param {string} newUser.name - El nombre del usuario.
 * @param {string} newUser.email - El email del usuario.
 */

const setUser = (newUser) => {
    const users = getUsers();
    const array = [];
    users.push(newUser);
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

module.exports = {
    getUsers,
    setUser
}