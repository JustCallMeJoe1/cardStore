/*

    Author: Joe Strickland
    Main Server file that establishes routes, loads NPM packages, and establishes common elements used throughout the application.
    Date: October 8th, 2022

*/

//Requires, load NPM packages
const express = require("express");
const morgan = require("morgan");
const mainRoutes = require("./routes/mainRoutes")
const pokemonRoutes = require("./routes/pokemonRoutes")
const yugiohRoutes = require("./routes/yugiohRoutes")
const magicRoutes = require("./routes/magicRoutes")
const digimonRoutes = require("./routes/digimonRoutes")
const finalFantasyRoutes = require("./routes/finalFantasyRoutes")
const userRoutes = require("./routes/userRoutes")

//Create express instance and establish information for app
const app = express()
const host = "localhost";
let port = 5000;

//MongoDB connection/setup information


//Mount application middleware functions to be used for various actions
app.use(express.static("resources"));          //Static folder holding all static files
app.use(express.json());                       //Parse data from json requests
app.use(express.urlencoded({extended: true})); //Parse data from the URL requests
app.use(morgan("tiny"));                       //Logger for client requests

//Session related setup (JWT token?)


//==============Set up initial Routing to different webpages throughout the web server============================

//General Site Navigation
app.use("/", mainRoutes)

//Card Related Navigation (Pokmon)
app.use("/pokemon", pokemonRoutes)

//Card Related Navigation (Yugioh)
app.use("/yugioh", yugiohRoutes)

//Card Related Navigation (Magic the gathering)
app.use("/magic", magicRoutes)

//Card Related Navigation (Digimon)
app.use("/digimon", digimonRoutes)

//Card Related Navigation (Final Fantasy)
app.use("/finalFantasy", finalFantasyRoutes)

//User related navigation
app.use("/users", userRoutes)

//Example server function
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3", "hi"]})
})

app.listen(port, host, () => {
    console.log(`Server started on ${host} with port ${port}.`);
})

