const db = require("../data/db-config.js");

const getAllIngredients = () => {
  return db("ingredients");
};

const getAllRecipesByIngredient = id => {
  return db("ingredients as i")
    .select("i.name")
    .join("recipes_ingredients as ri", "ri.ingredient_id", "i.id")
    .where({ "i.id": id });
};

module.exports = {
  getAllIngredients,
  getAllRecipesByIngredient
};
