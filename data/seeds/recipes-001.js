exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Spaghetti", instructions: "There are none" },
        { name: "Lasagna", instructions: "Too many" }
      ]);
    });
};
