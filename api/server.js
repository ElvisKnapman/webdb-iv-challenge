const express = require("express");

const server = express();

const recipeRoutes = require("../routes/recipeRoutes.js");
const ingredientRoutes = require("../routes/ingredientsRoutes.js");

server.use(express.json());

server.use("/api/recipes", recipeRoutes);
server.use("/api/ingredients", ingredientRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up and running..." });
});

module.exports = server;
