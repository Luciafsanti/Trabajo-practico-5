const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "models", "users.json");

const getUsers = () => {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
}

const setUser = (newUser) => {
    const users = getUsers();
    const array = [];
    users.push(newUser);
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
}

//addUser({
//    userId: "u1",
//    name: "Nombre 1",
//    email: "email@gmail.com"
//});


module.exports = {
    getUsers,
    setUser
}
//console.log(getUsers(), "\n", [ { userId: 'u1', name: 'Nombre 1', email: 'email@gmail.com' } ], "\n", getUsers() == [ { userId: 'u1', name: 'Nombre 1', email: 'email@gmail.com' } ])

//console.log(typeof(getUsers()));
//console.log(typeof([ { userId: 'u1', name: 'Nombre 1', email: 'email@gmail.com' } ]));
//console.log(typeof([]));