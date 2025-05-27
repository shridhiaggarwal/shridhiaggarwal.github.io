// Theme toggle functionality
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Get saved theme from localStorage or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);

        // Add event listener to theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        const html = document.documentElement;
        const themeIcon = document.getElementById('themeIcon');

        // Set the data-theme attribute
        html.setAttribute('data-theme', theme);

        // Update the icon based on current theme
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.src = 'Images/header/sun.svg'; // Show sun icon in dark mode
                themeIcon.alt = 'Light mode';
                showStars(); // Call stars function if it exists
            } else {
                themeIcon.src = 'Images/header/moon.svg'; // Show moon icon in light mode
                themeIcon.alt = 'Dark mode';
                hideStars(); // Call createStars function if it exists
            }
        }

        // Save theme preference
        localStorage.setItem('theme', theme);
        updateScrollToTopIcon(theme); // Update scroll to top icon based on theme
        updateLogoIcon(theme); // Update logo icon based on theme
        updateNavListIcon(theme); // Update navigation icon based on theme
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme');
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});