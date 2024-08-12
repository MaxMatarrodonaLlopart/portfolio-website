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

/*contact.html*/



/*^^^^^^^^contact.html^^^^^^^^*/

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

document.addEventListener('DOMContentLoaded', function() {
    const svgs = document.querySelectorAll('.media_container');

    svgs.forEach(svg => {
        const circle_linkedin = svg.querySelector('.media_container_circle');
        const rect_linkedin = svg.querySelector('.media_container_background');
        const circle_mail = svg.querySelector('.media_container_circle_mail');
        const rect_mail = svg.querySelector('.media_container_background_mail');

        svg.addEventListener('mouseenter', () => {
            gsap.to(circle_linkedin, { duration: 0.5, width: 296, ease: "back.out(1.7)" });
            gsap.to(rect_linkedin, { duration: 0.5, fill: "white", ease: "back.out(1.7)" });
            gsap.to(circle_mail, { duration: 0.5, width: 296, ease: "back.out(1.7)" });
            gsap.to(rect_mail, { duration: 0.5, fill: "white", ease: "back.out(1.7)" });
        });

        svg.addEventListener('mouseleave', () => {
            gsap.to(circle_linkedin, { duration: 0.5, width: 56, ease: "back.in(1.7)" });
            gsap.to(rect_linkedin, { duration: 0.5, fill: "white", ease: "back.in(1.7)" });
            gsap.to(circle_mail, { duration: 0.5, width: 56, ease: "back.in(1.7)" });
            gsap.to(rect_mail, { duration: 0.5, fill: "white", ease: "back.in(1.7)" });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
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