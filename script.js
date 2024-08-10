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

document.querySelector('.content').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.addEventListener('click', function() {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });
});