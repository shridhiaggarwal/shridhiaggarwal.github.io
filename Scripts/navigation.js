// navigation.js - Navigation UI controls
let navListOpen = false;

function toggleNavigation() {
    const navToggleButton = document.querySelector(".navToggleButton");
    const navList = document.querySelector(".navList");
    const navToggleIcon = navToggleButton?.querySelector('img');
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';

    if (!navToggleButton || !navList || !navToggleIcon) return;

    if (window.innerWidth <= 768) {
        if (!navListOpen) {
            navList.style.display = "flex";
            navListOpen = true;
        } else {
            navList.style.display = "none";
            navListOpen = false;
        }
        updateNavListIcon(theme);
    }
}

function handleNavListVisibility() {
    const navList = document.querySelector(".navList");
    if (!navList) return;

    if (window.innerWidth > 768) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
        navListOpen = false;
    }
    updateNavListIcon();
};

function updateNavListIcon(theme) {
    const navToggleButton = document.querySelector(".navToggleButton");
    const navToggleIcon = navToggleButton?.querySelector('img');

    if (!navToggleButton || !navToggleIcon) return;

    if (navListOpen) {
        if (navToggleIcon) {
            navToggleIcon.src = theme === "dark" ? "Images/header/closeWhite.svg" : "Images/header/closeBlack.svg";
        }
    } else {
        if (navToggleIcon) {
            navToggleIcon.src = theme === "dark" ? "Images/header/menuBar.svg" : "Images/header/menuBarBlack.svg";
        }
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const navToggleButton = document.querySelector(".navToggleButton");

    if (navToggleButton) {
        navToggleButton.addEventListener("click", toggleNavigation);
    }

    window.addEventListener("resize", handleNavListVisibility);
});