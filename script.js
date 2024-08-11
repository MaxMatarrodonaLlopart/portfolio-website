gsap.from(".navigation_links", {
    duration: 1,
    opacity: -2,
    delay: 0.5,
    y: -80
});

gsap.from("nav", {
    duration: 1,
    opacity: -2,
    y: -80
});

gsap.from(".logo_animation", {
    duration: 1,
    opacity: -2,
    delay: 0.5,
    x: -80
});

/*about-me.html*/



/*^^^^^^^^about-me.html^^^^^^^^*/

document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const navigationLinks = document.querySelector('.navigation_links');

    hamburgerMenu.addEventListener('click', function() {
        navigationLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger_icon')
    const navLinks = document.querySelector('.navigation_links');

    hamburgerIcon.addEventListener('mouseleave', function() {
        navLinks.classList.remove('active');
    });

    hamburgerIcon.addEventListener('mouseenter', function() {
        navLinks.classList.add('active');
    });

    navLinks.addEventListener('mouseleave', function() {
        navLinks.classList.remove('active');
    });

    navLinks.addEventListener('mouseenter', function() {
        navLinks.classList.add('active');
    });
});

document.querySelector('.content').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.addEventListener('click', function() {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
});