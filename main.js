AOS.init();

const menu = document.querySelector("#menu");
const button = document.querySelector("#btn");
const button_img = document.querySelector("#button-img");


button.onclick=() =>{
    if (menu.classList.toggle("open")){
        button_img.src = "./img/NAV CLOSE.svg";
    } else{
        button_img.src = "./img/NAV-open.svg";
    }
}