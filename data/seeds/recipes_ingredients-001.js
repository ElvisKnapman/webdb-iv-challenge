exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 3.5 },
        { recipe_id: 2, ingredient_id: 1, quantity: 4.5 },
        { recipe_id: 2, ingredient_id: 2, quantity: 2 }
      ]);
    });
};
