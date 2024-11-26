const express = require("express");
const router = express.Router();
const Recipe = require("../controllers/recipe");

router.post("/", Recipe.createRecipe);
router.get("/add", Recipe.add);
router.get("/index", Recipe.Index);
router.get("/show/:recipeId", Recipe.Show);
router.get("/new/:recipeId", Recipe.newRecipe);
router.put("/:recipeId", Recipe.updateRecipe);
router.delete("/:recipeId", Recipe.deleteRecipe);
module.exports = router;
