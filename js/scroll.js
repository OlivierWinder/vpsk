  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function () {
      const nextSection = document.querySelector(".section2"); // Change "section2" to the ID of the next section
      const offset = 100; // Adjust this value to control the scroll offset

      // Calculate the target position by subtracting the offset from the section's top position
      const targetPosition = nextSection.getBoundingClientRect().top - offset;

      // Scroll to the adjusted target position with smooth behavior
      window.scrollBy({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });