// scrollToTop.js - scroll to UI and functionality

function scrollToTopClick() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // Check if the URL has a fragment identifier
    if (window.location.hash) {
        // If it does, reset the URL without the fragment identifier
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }
};

function handleWindowScroll() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function updateScrollToTopIcon(theme) {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const scrollIcon = scrollBtn?.querySelector('img');

    if (!scrollIcon) {
        console.warn('Scroll to top icon image not found');
        return;
    }

    if (theme === 'dark') {
        scrollIcon.src = 'https://img.icons8.com/external-flat-design-circle/64/external-Rocket-seo-and-web-flat-design-circle-2.png';
    } else {
        scrollIcon.src = 'Images/butterfly.png';
    }
}

// Initialize scroll to top when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", scrollToTopClick);
    }

    window.addEventListener("scroll", handleWindowScroll);
});