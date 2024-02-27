const slides = document.querySelectorAll(".slide");
const kitRow = document.querySelectorAll(".kit-row.slide");
const kitCol = document.querySelectorAll(".kit-col");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goNext = () => {
  if (counter != slides.length - 1) {
    counter++;
    slideİmg();
  } else {
    counter = 0;
    slideİmg();
  }
};

const goPrev = () => {
  if (counter != 0) {
    counter--;
    slideİmg();
  } else {
    counter = slides.length - 1;
    slideİmg();
  }
};

const slideİmg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
