const phoneScreen = document.getElementById('phoneScreen');
const slides = document.querySelectorAll('.slide');
const slideIndicators = document.getElementById('slideIndicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlideIndex = 0;

// Initialize indicators
function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(indicator);
    });
    updateIndicators();
}

// Update indicators to show active slide
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Show a specific slide
function showSlide(index) {
    currentSlideIndex = index;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlideIndex)}%)`;
    });

    updateIndicators();
    updateNavigationButtons();
}

// Go to next slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Go to previous slide
function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Go to specific slide
function goToSlide(index) {
    showSlide(index);
}

// Update navigation button states
function updateNavigationButtons() {
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
    prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
    nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
}

// Event Listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initial setup
createIndicators();
showSlide(0);

// Optional: Auto-advance slides
// setInterval(nextSlide, 5000); // Uncomment to auto-advance every 5 seconds
