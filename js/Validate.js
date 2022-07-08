"use strict";

export function validate(mainSearchInput){
    const input = document.getElementById("main-search");
    const mainSearchDiv = document.getElementById("searchBar");
    //console.log(mainSearchInput.value);
    if (mainSearchInput.value.length<3) {
        console.log(mainSearchInput.value);
        // errorOnInput.textContent = "you need a minimum of 3 characters";
        // errorOnInput.attributes.add("")
        // errorOnInput.setAttribute('data-error', 'merci de mettre 3 caractères minimum');
        // errorOnInput.setAttribute('data-error-visible', 'true');
        mainSearchDiv.setAttribute('data-error', 'merci de mettre 3 caractères minimum');
        input.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        mainSearchDiv.removeAttribute('data-error', 'merci de mettre 3 caractères minimum');
        input.setAttribute('data-error-visible', 'false');
        return true;
    }
    
}