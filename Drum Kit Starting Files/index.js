
$(document).ready(){
	alert('hola');
}
// SELECTORALL DEVUELVE UN ARREGLO POR ESO NECESITAMOS EL .LENGTH//
var botones = document.querySelectorAll(".drum").length;


for (var i = 0 ; i < botones; i++) {
	
	document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

	
	var buttonInnerHTML = this.innerHTML;

		
		makeSound(buttonInnerHTML);




		botonAnimation(buttonInnerHTML);



	});


}


document.addEventListener("keydown" , function(event){

	makeSound(event.key);

	botonAnimation(event.key);
});




function makeSound(key){
switch(key) {
		case "w":
			var tomAudio1 = new Audio('sounds/tom-1.mp3');
			tomAudio1.play();

		break;

		case "a":
			var tomAudio2 = new Audio('sounds/tom-2.mp3');
			tomAudio2.play();

		break;
			case "s":
			var tomAudio3 = new Audio('sounds/tom-3.mp3');
			tomAudio3.play();

		break;
			case "d":
			var tomAudio4 = new Audio('sounds/tom-4.mp3');
			tomAudio4.play();

		break;
			case "j":
			var crash = new Audio('sounds/crash.mp3');
			crash.play();

		break;
			case "k":
			var kick_bass = new Audio('sounds/kick-bass.mp3');
			kick_bass.play();

		break;
			case "l":
			var snare = new Audio('sounds/snare.mp3');
			snare.play();

		break;









		default: console.log(buttonInnerHTML);
		}

}




function botonAnimation(currentKey){
	
	var activeBoton = document.querySelector("." + currentKey)


	activeBoton.classList.add("pressed");

	setTimeout(function(){
activeBoton.classList.remove("pressed");
	},100);

}





/*function HouseKepper2 (name ,family) {
	this.name = name; 
	this.family = family;
	this.cleaning = function() {
		alert('hola');
	}
};


var house = new HouseKepper2('Ale' , ['pepe' , 'juan']);

	//var audio = new Audio('sounds/tom-1.mp3');
console.log(house.cleaning());

	//audio.play();
*/