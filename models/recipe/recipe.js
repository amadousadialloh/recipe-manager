const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingrediens: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  category: { type: String, default: "Category" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
