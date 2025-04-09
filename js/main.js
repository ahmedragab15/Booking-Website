let hamMenu = document.querySelector(".ham-menu");

let sidebarNav = document.querySelector(".sidebar-nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  sidebarNav.classList.toggle("active");
});

let scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  scrollY > 1000
    ? scrollUp.classList.add("show")
    : scrollUp.classList.remove("show");
});
