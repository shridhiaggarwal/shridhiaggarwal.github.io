/* ==========================================  show more projects and less projects  ========================================== */
document.addEventListener("DOMContentLoaded", function () {
    const showHideButton = document.getElementById("showHideButton");
    const hiddenProjects = document.querySelectorAll(".projectBox.hidden");
    let projectsVisible = false;

    // Function to toggle the visibility of hidden projects
    function toggleHiddenProjects() {
        hiddenProjects.forEach((project) => {
            project.classList.toggle("hidden");
        });

        // Update button text based on visibility
        if (projectsVisible) {
            showHideButton.textContent = "Show More Projects";
        } else {
            showHideButton.textContent = "Show Less Projects";
        }

        projectsVisible = !projectsVisible;
    }

    // Add a click event listener to the "Show More" button
    showHideButton.addEventListener("click", toggleHiddenProjects);
});

//update logo icon based on theme
function updateLogoIcon(theme) {
    const logoBtn = document.getElementById('logo');
    const logoIcon = logoBtn?.querySelector('img');

    if (!logoIcon) {
        console.warn('logo icon image not found');
        return;
    }

    if (theme === 'dark') {
        logoIcon.src = 'Images/logo.png';
    } else {
        logoIcon.src = 'Images/logoLight.png';
    }
}


// header box shadow after scrolling past 100vh
// function addHeaderShadow() {
//     const header = document.querySelector('header');

//     if (!header) return;

//     if (window.scrollY >= 200) {
//         header.style.boxShadow = '0 10px 30px -10px #020c1bb3';
//     } else {
//         header.style.boxShadow = 'none';
//     }
// }

/* ========================================== dynamic footer year  ========================================== */
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;