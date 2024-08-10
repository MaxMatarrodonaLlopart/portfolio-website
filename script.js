document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
});

document.querySelector('.content').addEventListener('click', function() {
    this.classList.toggle('active');
});