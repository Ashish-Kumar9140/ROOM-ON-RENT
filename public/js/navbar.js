const button = document.getElementById("mobileMenuButton");
const menu = document.getElementById("mobileMenu");

if (button && menu) {
    button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}