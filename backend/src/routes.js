const express = require("express");
const UserController = require("./controllers/UserController");
const routes = express.Router();

routes.get("/clients", UserController.index);
routes.post("/client", UserController.store);

module.exports = routes;
