import {showAllNewsToDom, addNewCart, deleteCart, removeCart, editCart , prepareCategory} from "./funcs/shared.js";
    
window.addEventListener("load" , () => {
let liElems = document.querySelectorAll(".aside__item");
let addBtn = document.querySelector(".add__btn");

// Bind to window
window.removeCart = removeCart;

// Switch sections
liElems.forEach(elem => {
   elem.addEventListener("click",() => {
       document.querySelector(".aside-item--active").classList.remove("aside-item--active");
       document.querySelector(".news-sections--show").classList.remove("news-sections--show");
       elem.classList.add("aside-item--active");
       let id = elem.getAttribute("data-id");
       document.querySelector(id).classList.add("news-sections--show");
    });
});

// Choose color theme

// Load options value before adding new data
prepareCategory();

// Show datas in panel
showAllNewsToDom();

// Add new cart
addBtn.addEventListener("click",() => {
    alert("موفقیت آمیز")
    addNewCart();
 });

// Delete cart
deleteCart();

})