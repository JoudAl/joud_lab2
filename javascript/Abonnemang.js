// Task 3
document.querySelectorAll(".chooseBtn").forEach((btn) => {
    btn.addEventListener("mouseenter", function( event ) { 
        event.target.style.borderColor = "white";
        event.target.style.backgroundColor = "white";
    }, false
)})
document.querySelectorAll(".chooseBtn").forEach((btn) => {
    btn.addEventListener("mouseleave", function( event ) {
        event.target.style.borderColor = "#23973c";
        event.target.style.backgroundColor = "#ff465e";
    }, false
)})