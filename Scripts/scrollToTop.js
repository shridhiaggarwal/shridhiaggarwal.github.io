/* ==========================================  scroll-to-top button  ========================================== */
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

// Initialize scroll to top when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", scrollToTopClick);
    }

    window.addEventListener("scroll", handleWindowScroll);
});