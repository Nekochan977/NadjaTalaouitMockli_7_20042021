"use strict";
import recipes from "./recipes.js";
import {openCloseSelectElements} from "./OpenCloseSelect.js";


//variables that can be declared at top


// notre liste de tags générale
let tags = [];
// DOM elements
let inputs = document.querySelectorAll(".input");
const mainSearchInput = document.querySelector(".searchbar-input");
const tagContainer = document.querySelector(".tag-container");
const ingredientsSelect = document.querySelector(".ingredientElts");
const applianceSelect = document.querySelector(".applianceElts");
const ustensilsSelect = document.querySelector(".ustensilsElts");
const recipesContainer = document.querySelector(".recipes-articles-container");

let ingredientList, applianceList,ustensilsList;

//Opens or close select elements
openCloseSelectElements();

////////////////////////////////////////////////////

//Retrieve ingredients/appliances/ustensils from recipes & push each types contents into seperated arrays
const getElements = (selectedRecipes)=>{
  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  selectedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((allIngredients) => {
      const tagExist = tags.find(tag=> tag.name===allIngredients.ingredient.toLowerCase());
      if(!tagExist){
        ingredients.sort().push(allIngredients.ingredient.toLowerCase());

      }
    });
    appliances.sort().push(recipe.appliance.toLowerCase());
    recipe.ustensils.sort().forEach((allUstensils) => {
      ustensils.push(allUstensils.toLowerCase());
    });
  });
  // creating sets to get rid of duplicates
  const ingredientSet = new Set(ingredients);
  const applianceSet = new Set(appliances);
  const ustensilsSet = new Set(ustensils);
  //Put the set elements into a new array
  ingredientList = [...ingredientSet];
  applianceList = [...applianceSet];
  ustensilsList = [...ustensilsSet];
}
getElements(recipes)

////////////////////////////////////////////////////
//Retrieve elements for recipes ingredient list
// Display Recipes on page
  
const getingredients=(recipe)=>{
  let itemStr ="";
  recipe.ingredients.forEach((ingredient)=>{
    
    itemStr +=`
      <li class="item">
        <span class="item-ingredient">${ingredient.ingredient} :</span> 
        <span class="item-quantity">${ingredient.quantity || ""}</span> 
        <span class="item-unit">${ingredient.unit || ""}</span>
      </li>
      `;
     
  })
  return itemStr;
}
const displayRecipes = (filteredRecipes)=>{
  let str ="";
  filteredRecipes.forEach(recipe => {
    str +=`
    <article class="card">
      <div class="image card-img-top"><span class="img"></span></div>
      <div class="article-content card-body">
        <div class="name-icon row">
          <h2 class="card-title recipe-name col-8">${recipe.name}</h2>
            <div class="timer col">
              <span class="timer-icon"><i class="far fa-light fa-clock"></i></span>
              <span class"time">${recipe.time} min</span>
            </div>
        </div>
        <div class="row ingredients-description-container container-fluid">
          <div class="ingredients-list col"> 
            <ul class="ingredients-list-items col">
              ${getingredients(recipe)}
            </ul>
          </div>
          <div class="description col"><p>${recipe.description}</p></div>
        </div>
      </div>
    </article>`;
  })
  recipesContainer.innerHTML = str;
}
displayRecipes(recipes);

////////////////////////////////////////////////////

//Functions to create select html nodes

//turn 3 functions below to a single function using html data-attribute

const displayIngredients = (ingredientList, node) => {
  node.innerHTML = "";
  ingredientList.forEach((element) => {
    node.innerHTML += `<span class="ingredient-tag tag col-3" data-name="ingredients">${element}</span>&nbsp;`;
  });
  handleAddTag(".ingredient-tag");
};
const displayAppliance = (applianceList, node) => {
  node.innerHTML = "";
  applianceList.forEach((element) => {
    node.innerHTML += `<span class="appliance-tag tag col-3" data-name="appliance">${element}</span>&nbsp;`;
  });
  handleAddTag(".appliance-tag");
};
const displayUstensils = (ustensilsList, node) => {
  node.innerHTML = "";
  ustensilsList.forEach((element) => {
    node.innerHTML += `<span class="ustensils-tag tag col-3" data-name="ustensils">${element}</span>&nbsp;`;
  });
  handleAddTag(".ustensils-tag");
};

////////////////////////////////////////////////////

//Removes element from select list and creates html node for tag container
const displayTags = (tags, node) => {

  for (let i = 0; i < tags.length; i++) {
    if (ingredientList.includes(tags[i].name)) {
      const removeTagIndex = ingredientList.findIndex(
        (tag) => tag === tags[i].name
      );
      ingredientList.splice(removeTagIndex, 1);
      displayIngredients(ingredientList, ingredientsSelect);
    } else if (applianceList.includes(tags[i].name)) {
      const removeTagIndex = applianceList.findIndex(
        (tag) => tag === tags[i].name
      );
      applianceList.splice(removeTagIndex, 1);
      displayAppliance(applianceList, applianceSelect);
    } else if (ustensilsList.includes(tags[i].name)) {
      const removeTagIndex = ustensilsList.findIndex(
        (tag) => tag === tags[i].name
      );
      ustensilsList.splice(removeTagIndex, 1);
      displayUstensils(ustensilsList, ustensilsSelect);
    }
  }
  
  node.innerHTML = "";
  tags.forEach((tag) => {
    node.innerHTML += `<div class="tagAndBtn ${tag.type}"><span class="${tag.type}-tag tag" data-name="${tag.type}">${tag.name}</span>&nbsp; <button class="supressTagBtn"><i class="fa-regular fa-circle-xmark"></i></button></div>`;
  });
  removeTags();
};
////////////////////////////////////////////////////
//add tag in tagContainer when clicked
const handleAddTag = (tagSelector) => {
  const spanTags = document.querySelectorAll(tagSelector);
  spanTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const name = tag.innerHTML;
      const type = tag.getAttribute("data-name");
      tags.push({ name, type });
      tagContainer.setAttribute("active", true);
      search(tags)
      displayTags(tags, tagContainer);
    });
  });
};
////////////////////////////////////////////////////
//display the ingredients/appliances/ustensils in html file
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);


////////////////////////////////////////////////////
mainSearchInput.addEventListener("change", (e) => {
  search(tags);
});

// l'appeler => ajout tag, remove tag ou input change mainSearchInput
const search = (tagsList) => {
 
  const searchInputValue = document.querySelector(".searchbar-input").value;
  const filteredRecipesBySearchInput = searchRecipeByInput(searchInputValue);
  const filteredRecipesByTags = searchRecipeByTags(tagsList, filteredRecipesBySearchInput);
  getElements(filteredRecipesByTags);

  displayIngredients(ingredientList, ingredientsSelect);
  displayAppliance(applianceList, applianceSelect);
  displayUstensils(ustensilsList, ustensilsSelect);
 
  displayRecipes(filteredRecipesByTags);

  if (recipesContainer.innerHTML === "") {
    alert("Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson »...");
    window.location.reload();
  }
};

//Modify main search algorythm with native loop
const searchRecipeByInput = (searchInputValue) => {
  const filteredRecipes = recipes.filter((recipe) => {
    const search = searchInputValue.toLowerCase();
    const recipeIngredientList = recipe.ingredients.filter((ingredient) => {
      if (ingredient["ingredient"].toLowerCase().includes(search)) {
        const filteredIngredients = ingredientList.filter((ingredient) => {
          for (let i = 0; i < ingredient.length; i++) {
            if (ingredient.includes(search)) {
              return true;
            }
            return false;
          }
        });
        
        return true;
      }
      return false;
    });

    if (recipe.appliance.toLowerCase().includes(search)) {
      const filteredAppliances = applianceList.filter((appliance) => {
        for (let i = 0; i < appliance.length; i++) {
          if (appliance.includes(search)) {
            return true;
          }
          return false;
        }
      });
      
    }

    const recipeUstensilList = recipe.ustensils.filter(ustensil =>{
      if(ustensil.toLowerCase().includes(search)) {
        const filteredUstensilss = ustensilsList.filter((ustensils) => {
          for (let i = 0; i < ustensils.length; i++) {
            if (ustensils.includes(search)) {
              return true;
            }
            return false;
          }
        });
        
      }
    })

    if (
      recipe.name.toLowerCase().includes(search) ||
      recipe.description.toLowerCase().includes(search) ||
      recipeIngredientList.length > 0 || recipeUstensilList.length > 0
    ) {
      return true;
    }
  });

  return filteredRecipes;
  
};

const searchRecipeByTags = (tagsList, filteredRecipesBySearchInput) => {
	const finalRecipes = filteredRecipesBySearchInput.filter(recipe => {
    
    	let isOK = true;
        tagsList.forEach(tag => { 
          if (isOK===false) {
            return false;
          }
          if (tag.type==="ingredients") {
            const found = recipe.ingredients.find(ingredient=>{
              if (ingredient["ingredient"].toLowerCase().includes(tag.name)) {
                return true;
              }
              return false;
            })
            isOK = found ? true : false;
          } 
          if(tag.type==="appliance") {
            const found = recipe.appliance.toLowerCase().includes(tag.name);
            isOK = found ? true : false;
          }
          if(tag.type==="ustensils") {
            const found = recipe.ustensils.find(ustensil=>{
              if(ustensil.toLowerCase().includes(tag.name)){
                return true
              }
              return false;
            })
            isOK = found ? true : false;
          }
         
        });
    	if (isOK === true) {
        	return true
        } else {
        	return false
        }
      });
    getElements(finalRecipes)
    return finalRecipes;
};
//removes tag when clicked from tag container
// add clicked element in it's array.name
// display updated arrays []
const removeTags = () => {
  const supressTagBtn = document.querySelectorAll(".supressTagBtn");
  supressTagBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
 
      const tagContainerElt = btn.previousElementSibling;
      for (let i = 0; i < tags.length; i++) {

        if (tagContainerElt.innerHTML.includes(tags[i].name)) {
          if (tags[i].type === "ingredients") {
            ingredientList.push(tags[i].name);
          } else if (tags[i].type === "appliance") {
            applianceList.push(tags[i].name);
          } else if (tags[i].type === "ustensils") {
            ustensilsList.push(tags[i].name);
          }
          tags = tags.filter((tag) => tag.name !== tags[i].name);
          displayTags(tags, tagContainer);
        }
      }
      search(tags)
    });
  });
};



////////////////////////////////////////////////////

//Filter inputs-select
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
