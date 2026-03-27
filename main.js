document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    // Initialize Vanta.js Network Background
    if (typeof VANTA !== 'undefined' && document.getElementById('vanta-bg')) {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8b6cf6, /* primary-purple */
            backgroundColor: 0xf3f0ff, /* light-lavender */
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    }

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if(mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            const navAuth = document.querySelector('.nav-auth');
            
            this.classList.toggle('active');
            if(navMenu) navMenu.classList.toggle('active');
            if(navAuth) navAuth.classList.toggle('active');
        });
    }
});
