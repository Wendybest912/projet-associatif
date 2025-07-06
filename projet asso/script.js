// Menu Burger
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Bascule l'état actif
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Empêche le défilement quand le menu est ouvert
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Ferme le menu quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

