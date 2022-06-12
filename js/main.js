"use strict";
import recipes from "./recipes.js";

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
const openTagsList = document.querySelectorAll(".open-btn");
const closeTagsList = document.querySelectorAll(".close-btn");
let ingredientList, applianceList,ustensilsList;

////////////////////////////////////////////////////

//------Retrieve ingredients/appliances/ustensils from recipes & push each types contents into seperated arrays-----
const getElements = (selectedRecipes)=>{
  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  selectedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((allIngredients) => {
      ingredients.sort().push(allIngredients.ingredient.toLowerCase());
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

//Functions to add html nodes

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

//Function to or add tags in tag container and suppress tag from select container, or reverse
const displayTags = (tags, node) => {
  // suppress clicked element from it's array (Change to filter instead of remove later)
  //display updated array
  // add tags in tag-container
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
  // create innerHTML that will be added in tag container through handleAddTag
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
      displayTags(tags, tagContainer);
      console.log(("toto"));
      search(tags)
    });
  });
};
////////////////////////////////////////////////////

//removes tag when clicked
// add clicked element in it's array.name [to do]
// display updated arrays []
const removeTags = () => {
  const supressTagBtn = document.querySelectorAll(".supressTagBtn");
  supressTagBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tagContainerElt = btn.previousElementSibling;
      for (let i = 0; i < tags.length; i++) {
        if (tagContainerElt.innerHTML.includes(tags[i].name)) {
          //const removeTagIndex = tags.findIndex(tag=> tag.name === tags[i].name);
          if (tags[i].type === "ingredients") {
            ingredientList.push(tags[i].name);
            displayIngredients(ingredientList, ingredientsSelect);
          } else if (tags[i].type === "appliance") {
            applianceList.push(tags[i].name);
            displayAppliance(applianceList, applianceSelect);
          } else if (tags[i].type === "ustensils") {
            ustensilsList.push(tags[i].name);
            displayUstensils(ustensilsList, ustensilsSelect);
          }
          tags = tags.filter((tag) => tag.name !== tags[i].name);
          displayTags(tags, tagContainer);
        }
      }
    });
  });
  displayRecipes(recipes);
};

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
  console.log(ingredientList);
  displayIngredients(ingredientList, ingredientsSelect);
  displayAppliance(applianceList, applianceSelect);
  displayUstensils(ustensilsList, ustensilsSelect);
  //console.log(filteredRecipesBySearchInput, filteredRecipesByTags);
  // ==> recipe qui correspond aux tags et à la recherche principale

  displayRecipes(filteredRecipesByTags);
  if (recipesContainer.innerHTML === "") {
    alert("Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson »...");
    window.location.reload();
  }
};

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
        //console.log("message");
        
        return true;
      }
      return false;
    });

    // console.log(recipe.appliance.toLowerCase().includes(searchInputValue));
    //console.log(recipe.appliance.toLowerCase().includes(search));
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
  //console.log(ingredientList);
  return filteredRecipes;
  
};

const searchRecipeByTags = (tagsList, filteredRecipesBySearchInput) => {
	const finalRecipes = filteredRecipesBySearchInput.filter(recipe => {
    
    	let isOK = true;
        tagsList.forEach(tag => { 
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
   
    return finalRecipes;
};

const getingredients=(recipe)=>{
  let itemStr ="";
  recipe.ingredients.forEach((ingredient)=>{
    //console.log(ingredient.ingredient);
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
    //console.log(recipe.ingredients.forEach((ingredient)=>{console.log(ingredient.ingredient);}));
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
//display the ingredients/appliances/ustensils in html file
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);

//ACTIVATE SELECT

openTagsList.forEach(btn=>{
  //console.log(btn);
  btn.addEventListener("click", (e)=>{
    const open = e.target;
    const close = e.target.nextElementSibling;
    const tagsListContainer = e.target.parentElement.nextElementSibling;
    tagsListContainer.style.display ="flex";
    open.style.display ="none";
    close.style.display ="block"
    
  })
})
closeTagsList.forEach(btn=>{
  //console.log(btn);
  btn.addEventListener("click", (e)=>{
    const open = e.target.previousElementSibling;
    const close = e.target;
    const tagsListContainer = e.target.parentElement.nextElementSibling;
    tagsListContainer.style.display ="none";
    open.style.display ="block";
    close.style.display ="none"
    
  })
})
