
const express = require("express");
const routes = express.Router();

const mainController = require("../controllers/MainController");

routes.get("/main/:nombre", mainController.create);

module.exports = routes;
