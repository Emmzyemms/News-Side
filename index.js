// hamburgar menu click

const myHamburgar = document.querySelector("#hamburger");
const myMenu = document.querySelector("#menu");

myHamburgar.addEventListener("click", () => {
  myHamburgar.classList.toggle("active");
  myMenu.classList.toggle("active");
});


