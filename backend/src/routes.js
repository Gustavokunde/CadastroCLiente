const express = require("express");
const UserController = require("./controllers/UserController");
const routes = express.Router();

routes.get("/", UserController.index);
routes.post("/clients", UserController.store);
routes.delete("/clients/:id", UserController.delete);
routes.put("/clients/:id", UserController.update);

module.exports = routes;
