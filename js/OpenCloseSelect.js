"use strict";

export function openCloseSelectElements() {
    const openTagsList = document.querySelectorAll(".open-btn");
    const closeTagsList = document.querySelectorAll(".close-btn");

    openTagsList.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            console.log(e.target.parentElement.nextElementSibling.children[0]);
            const tagsListContainer = e.target.parentElement.nextElementSibling.children[0];
            const open = e.target;
            const close = e.target.nextElementSibling;
            tagsListContainer.style.display ="flex";
            open.style.display ="none";
            close.style.display ="block"
        })
    })

    closeTagsList.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            const open = e.target.previousElementSibling;
            const close = e.target;
            const tagsListContainer = e.target.parentElement.nextElementSibling.children[0];
            tagsListContainer.style.display ="none";
            open.style.display ="block";
            close.style.display ="none"
        })
    })
}