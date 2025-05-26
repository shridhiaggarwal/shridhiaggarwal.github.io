/* ==========================================  navlist toggle button  ========================================== */
let navListOpen = false;

function toggleNavigation() {
    const navToggleButton = document.querySelector(".navToggleButton");
    const navList = document.querySelector(".navList");
    const theme = document.documentElement.getAttribute('data-theme');

    if (!navToggleButton || !navList) return;

    if (window.innerWidth <= 768) {
        if (!navListOpen) {
            navList.style.display = "flex";
            navListOpen = true;
            if (navToggleButton.children[0]) {
                navToggleButton.children[0].src = theme === "dark" ? "Images/header/closeWhite.svg" : "Images/header/closeBlack.svg";
            }
        } else {
            navList.style.display = "none";
            navListOpen = false;
            if (navToggleButton.children[0]) {
                navToggleButton.children[0].src = theme === "dark" ? "Images/header/menuBar.svg" : "Images/header/menuBarBlack.svg";
            }
        }
    }
}

function handleNavListVisibility() {
    if (window.innerWidth > 768) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
        navListOpen = false;
    }
};

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const navToggleButton = document.querySelector(".navToggleButton");

    if (navToggleButton) {
        navToggleButton.addEventListener("click", toggleNavigation);
    }

    window.addEventListener("resize", handleNavListVisibility);
});