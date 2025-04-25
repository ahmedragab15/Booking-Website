document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");

    const icon = question.querySelector("i");
    answer.classList.contains("active") ? (icon.style.transform = "rotate(180deg)") : (icon.style.transform = "rotate(0)");
  });
});
