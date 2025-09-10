// Simple Slider
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");

if (slides.length > 0) {
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }

  showSlide(0); // init first slide
}
