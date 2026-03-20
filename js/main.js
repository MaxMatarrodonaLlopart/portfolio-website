// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Tancar menú en fer clic a un enllaç
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Destacar enllaç actiu durant l'scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Smooth scroll per als enllaços interns
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Pàgina web de Max Matarrodona carregada!');

// CV dropdown toggle + accessibility
const cvBtn = document.querySelector('.cv-btn');
const cvDropdown = document.querySelector('.cv-dropdown');

if (cvBtn && cvDropdown) {
    cvBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = cvDropdown.classList.toggle('open');
        cvBtn.setAttribute('aria-expanded', String(!!isOpen));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!cvDropdown.contains(e.target)) {
            cvDropdown.classList.remove('open');
            cvBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cvDropdown.classList.remove('open');
            cvBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close when clicking one of the dropdown links
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            cvDropdown.classList.remove('open');
            cvBtn.setAttribute('aria-expanded', 'false');
            // Also close mobile nav if open
            if (menuToggle) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}