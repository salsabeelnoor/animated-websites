//Select Elements from the DOM
const section = document.querySelector(".book-showcase");
const book = document.querySelector(".book");
const body = document.querySelector("body");

//Previous Rotation Value
let prev = 0;
//Calculation
let calc = 0;
//Drag secsitivity
const sensitivity = 2;

//Get the X position when the mouse is clicked down
section.addEventListener("mousedown", function (e) {
  //Get mouse X position
  const x = e.clientX;
  // Rotate the book on mousemove
  section.addEventListener("mousemove", rotate);
  function rotate(e) {
    calc = (e.clientX - x) / sensitivity;
    book.style.transform = `rotateY(${calc + prev}deg)`;
    //   Change Cursor To Grabbing Icon
    body.style.cursor = "grabbing";
  }
  //Save rotation value for next click event
  prev += calc;

  //Remove The Event and Cursor Icon On Mouse Release
  window.addEventListener("mouseup", function () {
    // Remove event listener
    section.removeEventListener("mousemove", rotate);
    // Reset cursor icon
    body.style.cursor = "default";
  });
});
