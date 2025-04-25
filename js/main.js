//? Sidebar Toggle
const hamMenu = document.querySelector(".ham-menu");
const sidebarNav = document.querySelector(".sidebar-nav");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  sidebarNav.classList.toggle("active");
});

//? Scroll To Top
const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  scrollY > 1000 ? scrollUp.classList.add("show") : scrollUp.classList.remove("show");
});

//? Search Tabs
const searchTabs = document.querySelectorAll(".search-tabs li");

searchTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    searchTabs.forEach((t) => t.classList.remove("selected"));
    tab.classList.add("selected");

    document.querySelectorAll(".search-inputs").forEach((input) => (input.style.display = "none"));
    document.querySelector(`.search-inputs[data-tab=${tab.textContent}]`).style.display = "block";

  });
});