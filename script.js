/**
 * Custom JavaScript for Interactive Multi-Page Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Toggle ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
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
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200,
        });
        ScrollReveal().reveal('.heading', { origin: 'top' });
        ScrollReveal().reveal('.footer', { origin: 'bottom' });
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
        console.log("ScrollReveal library not found.");
    }

    // --- 4. Contact Form Modal Logic ---
    const contactForm = document.querySelector('#contactForm');
    const modal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button');

    // Only run this logic if the contact form and modal exist on the page (i.e., on index.html)
    if (contactForm && modal) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from submitting the traditional way
            modal.style.display = 'block'; // Show the modal
        });

        // Close modal when 'x' is clicked
        if (closeButton) {
            closeButton.onclick = function() {
                modal.style.display = 'none';
            }
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // --- Contact option button handlers ---
        const sendEmailBtn = document.getElementById('sendEmail');
        const sendWhatsAppBtn = document.getElementById('sendWhatsApp');
        const makeCallBtn = document.getElementById('makeCall');

        const myEmail = 'mbavharamadi@gmail.com';
        const myPhoneNumber = '27824035469'; // International format for WhatsApp/Tel

        // Email button
        if (sendEmailBtn) {
            sendEmailBtn.onclick = function() {
                const subject = document.getElementById('emailSubject').value || 'Portfolio Inquiry';
                const message = document.getElementById('emailMessage').value;
                // Construct the mailto link and open the user's default email client
                window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
                modal.style.display = 'none';
            }
        }

        // WhatsApp button
        if (sendWhatsAppBtn) {
            sendWhatsAppBtn.onclick = function() {
                const message = document.getElementById('emailMessage').value;
                const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;
                // Open WhatsApp in a new tab
                window.open(whatsappUrl, '_blank');
                modal.style.display = 'none';
            }
        }

        // Call button
        if (makeCallBtn) {
            makeCallBtn.onclick = function() {
                // Initiate a phone call
                window.location.href = `tel:+${myPhoneNumber}`;
                modal.style.display = 'none';
            }
        }
    }

    console.log("Portfolio script loaded successfully!");
});
