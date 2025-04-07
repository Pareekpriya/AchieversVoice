let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto Slide
let slideInterval = setInterval(nextSlide, 4000);

// Manual controls
document.getElementById('prevSlide').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

document.getElementById('nextSlide').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.getAttribute('data-index'));
    showSlide(currentSlide);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}



//  Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


<button onclick="scrollToTop()" class="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-circle shadow d-none" style="z-index: 1000;" id="backToTopBtn">
<i class="bi bi-arrow-up-short fs-3"></i>
</button>


const backToTopBtn = document.getElementById('backToTopBtn');
 function scrollToTop() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', function() {
if (window.pageYOffset > 200) {
  backToTopBtn.classList.remove('d-none');
} else {
  backToTopBtn.classList.add('d-none');
}
});


AOS.init({
duration: 1000,
once: true,
});