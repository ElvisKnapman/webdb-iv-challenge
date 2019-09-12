const router = require("express").Router();

// models
const Ingredients = require("../ingredients/ingredients-model.js");

router.get("/", async (req, res) => {
  try {
    const result = await Ingredients.getAllIngredients();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server encountered error retrieving list of ingredients"
    });
  }
});

router.get("/:id/recipes", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Ingredients.getAllRecipesByIngredient(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving recipes" });
  }
});

module.exports = router;
