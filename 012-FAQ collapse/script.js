const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqBlock = toggle.closest(".faq");
    if (faqBlock) {
      faqBlock.classList.toggle("active");
    }
  });
});
