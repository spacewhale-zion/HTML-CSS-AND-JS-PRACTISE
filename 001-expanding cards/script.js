document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel"); // Select all panels

  panels.forEach((panel) => {
      panel.addEventListener("click", () => {
          // Remove active class from all panels
          panels.forEach(p => p.classList.remove("active"));

          // Add active class to clicked panel
          panel.classList.add("active");
      });
  });
});
