var colors = [];
var pickedColor ;
var colorDisplay = document.querySelector("#colorDisplay");
var cubes = document.querySelectorAll(".square");
var messageDilay = document.querySelector("#message")
var h1ski = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var numbCubes ;
init();

function init () {

	setupButton();
    squaresSetup();
	reset();

   }

 function setupButton () {
 	for(var i = 0; i < modeButtons.length; i++){
	    modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		this.classList.add("selected");
		this.textContent === "Easy" ? numbCubes = 3: numbCubes = 6;

		reset();
	    });
	}
 }  

function squaresSetup () {
for (var i = 0; i < cubes.length; i++) {
	

	cubes[i].addEventListener("click", function() {
		var clickedCube = this.style.background;
		
		if(clickedCube === pickedColor ){
			messageDilay.textContent = "Correct";
			 resetB.textContent = "Play Again?"
           changedColor(clickedCube);
          h1ski.style.background = clickedCube;
         
		} else {
			this.style.background = "#232323";
			messageDilay.textContent = "Guess Again...";
		}
	});
}
}






function reset() {
	colors = generateRandomColors(numbCubes);

pickedColor = pickRandomColor();

colorDisplay.textContent = pickedColor;

resetB.textContent = "New Colors" ;
messageDilay.textContent = "";

for (var i = 0; i < cubes.length; i++) {
	if(colors[i]){
		cubes[i].style.display = "block";
	cubes[i].style.background  = colors[i];
} else {
	cubes[i].style.display = "none";
}
}
h1ski.style.background  = "steelblue";
}

resetB.addEventListener("click", function() {
	 reset();

})
 

function changedColor (cveta) {
for (var i = 0; i < cubes.length ; i++) {

	cubes[i].style.background = cveta;
}
}
 function pickRandomColor () {
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }
function generateRandomColors(num) {

	var arr = []
for(var i = 0; i < num; i++) {
	arr.push(randomColor())
}
         return arr;
}

function randomColor () {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256 );

	return "rgb(" + r + ", " + g + ", " + b + ")";

}