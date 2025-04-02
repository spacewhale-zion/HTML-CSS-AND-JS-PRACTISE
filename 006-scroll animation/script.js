document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show"); // Add the animation class
                  observer.unobserve(entry.target); // Stop observing after it appears
              }
          });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  boxes.forEach((box) => observer.observe(box));
});
