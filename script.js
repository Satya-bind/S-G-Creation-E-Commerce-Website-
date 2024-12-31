const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Show the navbar when the bar is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Hide the navbar when clicking anywhere else on the screen
document.addEventListener('click', (event) => {
    // Check if the clicked target is not the bar or the navbar
    if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== bar) {
        nav.classList.remove('active');
    }
});
