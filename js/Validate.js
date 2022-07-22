"use strict";

export function validate(mainSearchInput){
    const input = document.getElementById("main-search");
    const mainSearchDiv = document.getElementById("searchBar");
    if (mainSearchInput.value.length<3) {
        console.log(mainSearchInput.value);
        mainSearchDiv.setAttribute('data-error', 'merci de mettre 3 caractères minimum');
        input.setAttribute('data-error-visible', 'true');
        return false;
    } else {
        mainSearchDiv.removeAttribute('data-error', 'merci de mettre 3 caractères minimum');
        input.setAttribute('data-error-visible', 'false');
        return true;
    }
    
}