var $ = require('jQuery');
//	words for the changing word
//	these could be separated into different groups and shown depending on the time of day or some other parameter.
var word = [
	"learning",
	"a cup of tea",
	"a cup of coffee",
	"a coke",
	"a glass of water",
	"sleeping"
]

 //window.onload = update();


function update(){
	//	Get a random value from array array (like word[random number between 0-0.999.. * arraylength])
	var rand = word[Math.floor(Math.random() * myArray.length)];
	var colors = ['#ff0000', '#00ff00', '#0000ff'];
	var random_color = colors[Math.floor(Math.random() * colors.length)];
	document.getElementById("nestedSmall").style.color = random_color;
	document.getElementById("nestedSmall").innerHtml = "rand";
}
