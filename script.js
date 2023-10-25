// Add a loading tag to the page
const loadingTag = document.createElement("p");
loadingTag.textContent = "Loading...";
document.body.appendChild(loadingTag);

// Wait for the page to fully load before applying JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Remove the loading tag
  loadingTag.remove();

  // Get the Consulting link and its dropdown content
  const consultingLink = document.querySelector(".nav-links .dropdown > a"); // Corrected variable name
  const dropdownContent = document.querySelector(".nav-links .dropdown .dropdown-content");

  // Add a click event listener to the Consulting link
  consultingLink.addEventListener("click", function(e) { // Corrected variable name
      e.preventDefault(); // Prevent the link from navigating

      // Toggle the visibility of the dropdown content
      dropdownContent.classList.toggle("show");
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(e) {
      if (!e.target.matches(".nav-links .dropdown > a")) {
          dropdownContent.classList.remove("show");
      }
  });
});
