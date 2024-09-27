function darkMode(button) {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Add the spin class to the button
    button.classList.add("spin");

    // Remove the spin class after the animation ends (1 second)
    setTimeout(function () {
        button.classList.remove("spin");
    }, 1000); // Match this time to the animation duration
}
// Toggle the menu open/close
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}


