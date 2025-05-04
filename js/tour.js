document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.remove("active"));
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
