//dynamic footer year
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

//update external link icon based on theme
function updateExternalIcon(theme) {
    const externalLinkImage = document.getElementById('externalLinkImage');
    if (!externalLinkImage) {
        console.warn('project external icon not found');
        return;
    }

    if (theme === 'dark') {
        externalLinkImage.src = 'Images/externalLink.svg';
    } else {
        externalLinkImage.src = 'Images/externalLinkBlack.svg';
    }
}

function updateLogoIcon(theme) {
    const logoImage = document.getElementById('logoImage');
    if (!logoImage) {
        console.warn('Logo image not found');
        return;
    }

    if (theme === 'dark') {
        logoImage.src = 'Images/logoDarkTheme.png';
    } else {
        logoImage.src = 'Images/logoLightTheme.png';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setCurrentYear();
});

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