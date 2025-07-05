/**
 * Custom JavaScript for Interactive Multi-Page Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Toggle ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark'); // Toggles between hamburger and 'X' icon
            navbar.classList.toggle('active');   // Toggles the 'active' class to show/hide the nav
        };
    }

    // --- 2. Close Mobile Menu when a link is clicked ---
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-xmark');
                navbar.classList.remove('active');
            }
        });
    });


    // --- 3. Scroll Reveal Animations ---
    // Check if ScrollReveal is defined (it's loaded from a CDN)
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
            // reset: true, // Uncomment to make animations repeat on every scroll
        });

        // Defining general animations that can apply to any page
        ScrollReveal().reveal('.heading', { origin: 'top' });
        ScrollReveal().reveal('.footer', { origin: 'bottom' });

        // Page-specific animations
        if (document.querySelector('.home')) {
            ScrollReveal().reveal('.home-content', { origin: 'left' });
            ScrollReveal().reveal('.home-img', { origin: 'right' });
        }
        if (document.querySelector('.services-container')) {
            ScrollReveal().reveal('.service-box', { origin: 'bottom', interval: 200 });
        }
        if (document.querySelector('.skills-container')) {
            ScrollReveal().reveal('.skill-box', { origin: 'bottom', interval: 200 });
        }
        if (document.querySelector('.timeline-container')) {
            ScrollReveal().reveal('.timeline-item', { origin: 'bottom', interval: 200 });
        }
        if (document.querySelector('.contact form')) {
            ScrollReveal().reveal('.contact form', { origin: 'bottom' });
        }

    } else {
        console.log("ScrollReveal library not found. Please check the CDN link.");
    }

    console.log("Portfolio script loaded successfully!");
});
