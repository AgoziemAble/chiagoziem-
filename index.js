let menuWindow = document.querySelector(".menu-window");
let OpenMenu = document.querySelector(".open-menu");
let CloseMenu = document.querySelector(".close-menu");
let container = document.querySelector(".container");

OpenMenu.addEventListener("click", (Event) =>  {
    OpenMenu.style.display = "none";
    CloseMenu.style.display = "block";
    menuWindow.style.display = "block"
    container.style.opacity = "30%"
})


CloseMenu.addEventListener("click", (Event) => {
    CloseMenu.style.display = "none";
    OpenMenu.style.display = "initial";
    menuWindow.style.display = "none";
    container.style.opacity = "initial"
})

let body = document.querySelector(".body");
body.addEventListener("click", (Event) => {
    CloseMenu.style.display = "none";
    OpenMenu.style.display = "initial";
    menuWindow.style.display = "none";
    container.style.opacity = "initial"
})
console.log ("HI");