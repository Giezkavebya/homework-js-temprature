// Background Color Change 
var colorInput = document.getElementById("colorInput");
const changeBtn = document.getElementById("change");

changeBtn.addEventListener("click", function changeBackground (color) {
    var color = colorInput.value;
    document.body.style.backgroundColor = color;
});
