/*

    Author: Joe Strickland
    Main Server file that establishes routes, loads NPM packages, and establishes common elements used throughout the application.
    Date: October 8th, 2022

*/

//Requires, load NPM packages
const express = require("express");
const morgan = require("morgan");

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


//Card Related Navigation


//User Related Navigation


//Example server function
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3", "hi"]})
})

app.listen(port, host, () => {
    console.log(`Server started on ${host} with port ${port}.`);
})

