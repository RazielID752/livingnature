const btnMobile = document.getElementById("button-mobile");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
const linksMenu = document.querySelectorAll("nav-a");

function toggleMenu() {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuIcon.src = "img/menu-closer.svg";
    menuIcon.alt = "Menu aberto";
  } else {
    menuIcon.src = "img/menu-togle.svg";
    menuIcon.alt = "Menu fechado";
  }
}

btnMobile.addEventListener("click", toggleMenu);

linksMenu.forEach(link=>{
    link.addEventListener("click", closeMenuOnClick)
});
