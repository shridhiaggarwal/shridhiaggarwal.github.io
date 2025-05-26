/* ==========================================  stars background  ========================================== */
function stars() {
    let count = 30;
    const starsContainer = document.getElementById('stars');

    if (window.innerWidth <= 576) {
        count = 10; // Change the star count for mobile view
    }

    function createStar() {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * (window.innerWidth - 20));
        const y = Math.floor(Math.random() * (window.innerHeight - 20));
        const size = 4; //Math.random() * 5;
        star.style.left = x + 'px'; //Math.random() * 100 + '%';
        star.style.top = y + 'px'; //Math.random() * 100 + '%';
        star.style.height = 1 + size + 'px';
        star.style.width = star.style.height;
        star.style.animationDuration = (Math.random() * 2) + 2 + 's';
        starsContainer.appendChild(star);
    }

    function updateStars() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            const starContainers = document.querySelectorAll('#stars i');
            for (let i = 0; i < starContainers.length; i++) {
                starsContainer.removeChild(starContainers[i]);
            }
            for (let i = 0; i < count; i++) {
                createStar();
            }
        }
    }

    // Initial creation of stars
    updateStars();

    // Add event listener for window resize
    window.addEventListener('resize', updateStars);

}

// Function to hide stars container without deleting elements
function hideStars() {
    const starContainers = document.querySelectorAll('#stars i');
    for (let i = 0; i < starContainers.length; i++) {
        starContainers[i].style.display = 'none'; // Hide the stars instead of removing them
    }
}

// Function to show stars container
function showStars() {
    const starContainers = document.querySelectorAll('#stars i');
    for (let i = 0; i < starContainers.length; i++) {
        starContainers[i].style.display = 'block'; // show the stars instead of creating them
    }
}

// Initialize stars when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    stars(); // Call the stars function to create stars on page load
});