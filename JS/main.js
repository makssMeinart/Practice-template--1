const slides = document.querySelectorAll(".slider__item");
const btnPrev = document.querySelector(".slider-prev");
const btnNext = document.querySelector(".slider-next");

let index = 0;

// Current Slide
let currentSlide = n => {
   for (slide of slides) {
      slide.classList.remove("current");
   }
   slides[n].classList.add("current")
};

// slide Prev 
function slidePrev() {
   if (index == 0) {
      index = slides.length - 1;
   } else {
      index--;
   }
   currentSlide(index);
}

// Next Slide 
function slideNext() {
   if (index == slides.length - 1) {
      index = 0;
   } else {
      index++;
   }
   currentSlide(index);
}

// Btn clicks 
btnPrev.addEventListener("click", slidePrev)
btnNext.addEventListener("click", slideNext)

// toggle tabs
const toggleItems = document.querySelectorAll(".toggle-item");


toggleItems.forEach((item) => {
   item.addEventListener("click", () => {
      item.classList.toggle("active")
   })
})



// Burger 
let burgerBtn = document.querySelector(".header__burger");

burgerBtn.addEventListener("click", () => {
   document.querySelector(".menu-list").classList.toggle("active")
   burgerBtn.classList.toggle("active")
})