const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
}, {
    root: null, // Use the viewport as the viewport.
    rootMargin: '-50px 0px -50px 0px', // Center the observed area within the viewport.
    threshold: 0.5, // Your desired threshold value.
});

const hiddenCards = document.querySelectorAll('.hidden');
hiddenCards.forEach((el) => observer.observe(el));
const navbar = document.querySelector('.navs');


function makeOpeque(){
    navbar.classList.toggle('bgwhite');
}