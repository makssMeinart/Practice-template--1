// Var
const galleryItem = document.querySelectorAll(".gallery-item");
document.querySelector(".portfolio-menu").addEventListener("click", e => {
   if (e.target.tagName !== `BUTTON`) return false;

   let filterBtns = document.querySelectorAll(".portfolio-menu__btn");
   let filterValue = e.target.getAttribute("data-f");

   for (btn of filterBtns) {
      btn.classList.remove("active")
   }
   e.target.classList.add("active")

   // Function
   galleryItem.forEach((item) => {

      if (item.classList.contains(filterValue)) {
         item.classList.remove("hidden")
         console.log(filterValue)
      } else if (filterValue == "all") {
         for (item of galleryItem) {
            item.classList.remove("hidden");
         }
      } else {
         item.classList.add("hidden")
      }


   })
})


// Feedback Items Slider

const feedItems = document.querySelectorAll(".feedback-item");
const feedBtns = document.querySelectorAll(".feedback-btn");

let btnValue = feedBtns.forEach((item) => {
   item.addEventListener("click", (e) => {

      // Checking that we clicked on the button not the parent Element
      if (e.target.tagName !== `BUTTON`) return false;
      
      // Removing class .active from all the other btns
      for (btn of feedBtns) {
         btn.classList.remove("active")
      }

      // Giving clicked btn a .active class
      e.target.classList.add("active")

      // Putting the button data attribute value in to the variable
      let btnVal = e.target.dataset["num"];
      // Add All Slide - Items .hidden
      for(slide of feedItems) {
         slide.classList.add("hidden")
      } 
      // Showing / Adding the class to the right slide element by using btnVal value to show the right slide
      feedItems[btnVal - 1].classList.remove("hidden")

   })
})


// Data Attribute value 




// We have a massive of feedback items that we have to put class .hidden on.
// We have a massive of btns with each btn containing a data attribute value inside of it.