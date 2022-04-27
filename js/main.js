"use strict";
import recipes from "./recipes.js";

//variables that can be declared at top

let ingredients = [];
let appliances = [];
let ustensils = [];
// notre liste de tags générale
let tags = [];
// DOM elements
let inputs = document.querySelectorAll(".input");
const tagContainer =document.querySelector(".tag-container");
const ingredientsSelect = document.querySelector(".ingredientElts");
const applianceSelect = document.querySelector(".applianceElts");
const ustensilsSelect = document.querySelector(".ustensilsElts");
const mainSearchInput = document.querySelector('.searchbar-input');
  
////////////////////////////////////////////////////

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
const ingredientSet = new Set(ingredients);
const applianceSet = new Set(appliances);
const ustensilsSet = new Set(ustensils);
//Put the set elements into a new array
const ingredientList = [...ingredientSet];
const applianceList = [...applianceSet];
const ustensilsList = [...ustensilsSet];

////////////////////////////////////////////////////

//Functions to add html nodes

//turn 3 functions below to a single function using html data-attribute

const displayIngredients = (ingredientList, node) => {
  node.innerHTML = "";
  ingredientList.forEach((element) => {
    node.innerHTML += `<span class="ingredient-tag tag" data-name="ingredients">${element}</span>&nbsp;`;
  });
  handleAddTag(".ingredient-tag");
};
const displayAppliance = (applianceList, node) => {
  node.innerHTML = "";
  applianceList.forEach((element) => {
    node.innerHTML += `<span class="appliance-tag tag" data-name="appliance">${element}</span>&nbsp;`;
  });
  handleAddTag(".appliance-tag");
};
const displayUstensils = (ustensilsList, node) => {
  node.innerHTML = "";
  ustensilsList.forEach((element) => {
    node.innerHTML += `<span class="ustensils-tag tag" data-name="ustensils">${element}</span>&nbsp;`;
  });
  handleAddTag(".ustensils-tag");
};
////////////////////////////////////////////////////

//Function to or add tags in tag container and suppress tag from select container, or reverse
const displayTags = (tags, node) => {
  // suppress clicked element from it's array
  //display updated array
  // add tags in tag-container
  for(let i = 0; i < tags.length; i++) {
    if (ingredientList.includes(tags[i].name)){
      const removeTagIndex = ingredientList.findIndex(tag=> tag === tags[i].name);
      ingredientList.splice(removeTagIndex, 1);
      displayIngredients(ingredientList, ingredientsSelect);
    } else if (applianceList.includes(tags[i].name)){
      const removeTagIndex = applianceList.findIndex(tag=> tag === tags[i].name);
      applianceList.splice(removeTagIndex, 1);
      displayAppliance(applianceList, applianceSelect);
    } else if (ustensilsList.includes(tags[i].name)){
      const removeTagIndex = ustensilsList.findIndex(tag=> tag === tags[i].name);
      ustensilsList.splice(removeTagIndex, 1);
      displayUstensils(ustensilsList, ustensilsSelect);
    }
  }
  // create innerHTML that will be added in tag container through handleAddTag
  node.innerHTML = "";
  tags.forEach((tag)=>{
    node.innerHTML += `<div class="tagAndBtn"><span class="${tag.type}-tag tag" data-name="${tag.type}">${tag.name}</span>&nbsp; <button class="supressTagBtn"><i class="fa-regular fa-circle-xmark"></i></button></div>`;
  });
  //removes tag when clicked
  // add clicked element in it's array.name [to do]
  // display updated arrays []
  removeTags();
};
////////////////////////////////////////////////////

const handleAddTag = (tagSelector) => {
  const spanTags = document.querySelectorAll(tagSelector);
  spanTags.forEach(tag => {
    tag.addEventListener("click", () => {
      const name = tag.innerHTML;
      const type = tag.getAttribute("data-name");
      tags.push({ name, type });
      tagContainer.setAttribute("active", true);
      displayTags(tags, tagContainer);
    });
  })
};
////////////////////////////////////////////////////

const removeTags = () =>{
  const supressTagBtn =document.querySelectorAll(".supressTagBtn");
  supressTagBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      const tagContainerElt = btn.previousElementSibling;
      for(let i = 0; i < tags.length; i++) {
        if (tagContainerElt.innerHTML.includes(tags[i].name)) {
          const removeTagIndex = tags.findIndex(tag=> tag === tags[i].name);
          if (tags[i].type === "ingredients") {
            ingredientList.push(tags[i].name);
            displayIngredients(ingredientList, ingredientsSelect);
          } else if (tags[i].type === "appliances") {
            applianceList.push(tags[i].name);
            displayAppliance(applianceList, applianceSelect);
          } else if (tags[i].type === "ustensils") {
            console.log(tags[i].type, tags[i].name);
            ustensilsList.push(tags[i].name);
            displayUstensils(ustensilsList, ustensilsSelect);
          }
          tags.splice(removeTagIndex, 1);
          displayTags(tags, tagContainer);
        }
      }
    })
  })
}
////////////////////////////////////////////////////

//display the ingredients in html
// displayIngredients(ingredientList, ingredientsSelect);
// displayAppliance(applianceList, applianceSelect);
// displayUstensils(ustensilsList, ustensilsSelect);
////////////////////////////////////////////////////

//Event listener on inputs //
  //Filter inputs
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const type = input.getAttribute("data-type");
    let searchInput = e.target.value;
    if (type === "ingredients") {
      const filteredIngredients = ingredientList.filter((ingredient) => {
        for (let i = 0; i < ingredient.length; i++) {
          if (ingredient.includes(searchInput)) {
            return true;
          }
          return false;
        }
      });
      displayIngredients(filteredIngredients, ingredientsSelect);
    } else if (type === "appliances") {
      const filteredAppliances = applianceList.filter((appliance) => {
        for (let i = 0; i < appliance.length; i++) {
          if (appliance.includes(searchInput)) {
            return true;
          }
          return false;
        }
      });
      displayAppliance(filteredAppliances, applianceSelect);
    } else if (type === "ustensils") {
      const filteredUstensilss = ustensilsList.filter((ustensils) => {
        for (let i = 0; i < ustensils.length; i++) {
          if (ustensils.includes(searchInput)) {
            return true;
          }
          return false;
        }
      });
      displayUstensils(filteredUstensilss, ustensilsSelect);
    }
  });
});
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);

