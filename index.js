const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier-icon");

magnifierEl.addEventListener("click", function(){
    searchBarContainerEl.classList.toggle("active");
});