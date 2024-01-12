document.addEventListener("DOMContentLoaded", function () {
    // Function to handle navigation link clicks
    function navigateToPage(page) {
        // Assuming you have your pages in the same directory
        window.location.href = page;
    }

    // Add click event listeners to navigation links
    document.getElementById("aboutLink").addEventListener("click", function () {
        navigateToPage("about.html");
    });
    document.getElementById("homeLink").addEventListener("click", function () {
        navigateToPage("index.html");
    });
    document.getElementById("contactLink").addEventListener("click", function () {
        navigateToPage("contact.html");
    });

    document.getElementById("servicesLink").addEventListener("click", function () {
        navigateToPage("services.html");
    });
});