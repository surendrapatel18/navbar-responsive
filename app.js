
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// function toggleMenu() {
//     const navLinks = document.getElementById('navLinks');
//     navLinks.classList.toggle('active');
// }