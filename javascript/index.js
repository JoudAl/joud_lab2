// Task 1
function setRandomImage() {
    const images = ["Home.png", "Home2.png"];
    const randomInteger = Math.floor((Math.random()*images.length));
    const img = document.createElement("img");
    img.src = `./images/${images[randomInteger]}`;
    document.getElementsByClassName("Homeimg")[0].appendChild(img);
}
// Task 2
function setRandomText() {
    const text = ["Now you get double the amount of surfing in all our most popular subscriptions!", 
    "Not for 3 months, not for 5 months, but exactly as long as you keep your subscription",
    "As always, of course without a commitment period"];
    const randomInteger = Math.floor((Math.random()*text.length));
    document.getElementById("random-text").innerText = text[randomInteger];
} 
// Task 4

// We're selecting all the elements with class name "images" and we'll set fadeTo animation in all those elements. Animation time is 300 ms
$( ".images" ).mouseenter(function() {
    $( ".images" ).fadeTo(300, 1)
}).mouseleave(function() {
    $( ".images" ).fadeTo(300, 0.5)
});

// We're selecting all the element with id name "random-click-button" and we'll set animate animation in that element. Animation time is 200 ms.
$( "#random-click-button" ).mouseenter(function() {
    $( "#random-click-button" ).animate({
      opacity: 0.8,
      fontSize: "13px"
    }, 200, function() {
      // Animation complete.
      console.log("animation completed");
    });
}).mouseleave(function() {
    $( "#random-click-button" ).animate({
        opacity: 1,
        fontSize: "12px"
      }, 200, function() {
        // Animation complete.
        console.log("animation completed");
      });
});

// We're calling the draggable function which is inside the jquery ui library and this object can move in the screen using mouse pointer.
$( "#draggable" ).draggable();

$(".images").fadeTo(300, 0.80);
document.getElementById("random-click-button").onclick = setRandomText;
setRandomText();
setRandomImage();

