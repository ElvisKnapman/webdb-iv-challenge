const router = require("express").Router();

// recipes model
const Recipes = require("../recipes/recipe-model.js");

router.get("/", async (req, res) => {
  try {
    const result = await Recipes.getRecipes();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving recipes" });
  }
});

router.get("/:id/ingredients", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Recipes.getIngredientList(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server encountered error retrieving ingredients for recipe"
    });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Recipes.getInstructions(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Invalid ID" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving instructions" });
  }
});

router.get("/titles", async (req, res) => {
  try {
    const result = await Recipes.getRecipeNames();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server encountered error retrieving recipe titles" });
  }
});

module.exports = router;
