// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form validation
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (from.trim() === "" || to.trim() === "") {
    alert('Please fill in both "From" and "To" fields.');
    event.preventDefault(); // Prevent form submission
  }
});

// Smooth scrolling for navigation (if there are other sections/pages)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
