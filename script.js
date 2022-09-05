//////////SCROLL UP//////////
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");
  else scrollUp.classList.remove("show__scroll");
}
window.addEventListener("scroll", scrollUp);
//////////// menu animation /////////////////
let menu = document.querySelector(".navbar ul");
let hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function () {
  menu.classList.toggle("open");
});
