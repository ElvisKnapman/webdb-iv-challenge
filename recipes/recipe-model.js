const db = require("../data/db-config.js");

const getRecipes = () => {
  return db("recipes");
};

const getIngredientList = id => {
  return db("recipes")
    .select("i.name", "ri.quantity")
    .join("recipes_ingredients AS ri", "ri.recipe_id", "recipes.id")
    .join("ingredients AS i", "i.id", "ri.ingredient_id")
    .where({ "recipes.id": id });
};

module.exports = {
  getRecipes,
  getIngredientList
};
