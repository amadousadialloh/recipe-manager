const RecipeModel = require("../models/recipe/recipe.js");

const createRecipe = async (req, res, next) => {
  try {
    await RecipeModel.create(req.body);
    res.redirect("/recipes/index");
  } catch (err) {
    console.log(err.message);
    res.render("error.ejs", {
      message: "There was an issue adding your recipe. Please try again later",
    });
  }
};

const Index = async (req, res) => {
  try {
    const findRecipe = await RecipeModel.find();
    res.render("recipes/index.ejs", { findRecipe });
  } catch (err) {
    console.log(err.message);
    res.render("error.ejs", {
      message: "Something went wrong. Please try again later",
    });
  }
};
const add = async (req, res) => {
  res.render("recipes/add.ejs");
};

const Show = async (req, res) => {
  try {
    const showRecipe = await RecipeModel.findById(req.params.recipeId);
    res.render("recipes/show.ejs", {
      recipe: showRecipe,
    });
  } catch (err) {
    console.log(err.message);
    res.send("Error, please try again");
  }
};

const updateRecipe = async (req, res) => {
  await RecipeModel.findByIdAndUpdate(req.params.recipeId, req.body, {
    new: true,
  });
  res.redirect("index");
};

const deleteRecipe = async (req, res) => {
  await RecipeModel.findByIdAndDelete(req.params.recipeId);
  res.redirect("index");
};

const newRecipe = async (req, res) => {
  const findNewRecipe = await RecipeModel.findById(req.params.recipeId);
  res.render("recipes/new.ejs", {
    newRecipe: findNewRecipe,
  });
};

module.exports = {
  add,
  Index,
  Show,
  newRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
