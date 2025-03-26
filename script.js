<script>
  // Close navbar when clicking outside
  document.addEventListener("click", function (event) {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Check if the click is outside the navbar
    if (!navbarToggler.contains(event.target) {
      // If the navbar is open, close it
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Simulate a click on the toggler button
      }
    }
  });
</script>