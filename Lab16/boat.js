var sitID = "";

function start(){
	var situation = JSON.parse(get("boat.php"));
	var left = document.getElementById("left");
	process(situation);
}

function movePeasant(){
	var situation = JSON.parse(get("boat.php?present="+ sitID + "&option=peasant"));
	process(situation);
}

function moveWolf(){
	
	var situation = JSON.parse(get("boat.php?present="+ sitID + "&option=wolf"));
	process(situation);
}

function moveGoat(){
	var situation = JSON.parse(get("boat.php?present="+ sitID + "&option=goat"));
	process(situation); 
}

function moveCabbage(){
	var situation = JSON.parse(get("boat.php?present="+ sitID + "&option=cabbage"));
	process(situation);
}

function process(situation){
	left.innerHTML = "Левый берег: " + situation.left.join(", ");
	right.innerHTML = "Правый берег: " + situation.right.join(", ");
	console.log(situation);
	console.log(situation.id);
	sitID = situation.id;
}

start();