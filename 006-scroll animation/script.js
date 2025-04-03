const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show"); // Add animation class
    } else {
      box.classList.remove("show"); // Remove animation when scrolled up
    }
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes(); // Run once to check already visible elements
