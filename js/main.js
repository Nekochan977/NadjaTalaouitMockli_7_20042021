"use strict";
import recipes from "./recipes.js";

//variables that can be declared at top

let ingredients = [];
let appliances = [];
let ustensils = [];
let inputs = document.querySelectorAll(".input");
let elements = document.querySelectorAll(".elements");
const ingredientsSelect = document.querySelector(".ingredientElts");
const applianceSelect = document.querySelector(".applianceElts");
const ustensilsSelect = document.querySelector(".ustensilsElts");

//------Getting the ingredients------
recipes.forEach((recipe) => {
  recipe.ingredients.forEach((allIngredients) => {
    ingredients.push(allIngredients.ingredient.toLowerCase());
  });
  appliances.push(recipe.appliance.toLowerCase());
  recipe.ustensils.forEach((allUstensils) => {
    ustensils.push(allUstensils.toLowerCase());
  });
});
// creating sets to get rid of duplicates
const uniqueSet = new Set(ingredients);
const applianceSet = new Set(appliances);
const ustensilsSet = new Set(ustensils);
//Put the set elements into a new array
const ingredientList = [...uniqueSet];
const applianceList = [...applianceSet];
const ustensilsList = [...ustensilsSet];

console.log(elements[1].getAttribute("appliances"));

//Functions to add html nodes

//turn 3 functions below to a single function using html data-attribute

const displayIngredients = (ingredientList, node) => {
  node.innerHTML = "";
  ingredientList.forEach((element) => {
    node.innerHTML += `<span class="ingredient-tag" data-name="ingredients">${element}</span>&nbsp;`;
  });
};
const displayAppliance = (applianceList, node) => {
  applianceList.forEach((element) => {
    node.innerHTML += `<span class="appliance-tag" data-name="appliance">${element}</span>&nbsp;`;
  });
};
const displayUstensils = (ustensilsList, node) => {
  ustensilsList.forEach((element) => {
    node.innerHTML += `<span class="ustensils-tag" data-name="ustensils">${element}</span>&nbsp;`;
  });
};

//display the ingredients in html
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);

console.log(document.querySelectorAll(".ingredient-tag").forEach((tag)=>{
    tag.getAttribute("ingredient")
}));

//Event listener on inputs //
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.value);
    let searchInput = e.target.value;
    const filteredIngredients = ingredientList.filter((ingredient) => {
      for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.includes(searchInput)) {
          console.log("toto");
          return true;
        }
        return false;
      }
    });
    const filteredAppliances = applianceList.filter((appliance) => {
        for (let i = 0; i < appliance.length; i++) {
          if (appliance.includes(searchInput)) {
            console.log("tata");
            return true;
          }
          return false;
        }
      });
    displayIngredients(filteredIngredients, ingredientsSelect);
    displayIngredients(filteredAppliances, applianceList);
  });
});

