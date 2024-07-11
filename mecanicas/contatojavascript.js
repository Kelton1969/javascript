document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate form submission
    setTimeout(function() {
        document.getElementById('message-success').classList.remove('hidden');

        // Clear the form
        document.getElementById('contact-form').reset();
        
        // Remove the success message after 3 seconds
        setTimeout(function() {
            document.getElementById('message-success').classList.add('hidden');
        }, 3000);
    }, 1000); // Simulate a 1 second delay for submission
});

// Add input focus effect
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#2a9df4';
    });
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
