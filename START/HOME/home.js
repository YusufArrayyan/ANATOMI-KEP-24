document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeDrawer = document.querySelector('.close-drawer');

    // Toggle drawer
    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    });

    // Close drawer with X button
    closeDrawer.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close drawer when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = '#1a2f5f';
        } else {
            navbar.style.background = '#244184';
        }
    });
});