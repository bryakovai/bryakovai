var currentNumber=0;
function shiftLeft(){
	currentNumber++;
	var c=document.getElementById("divPic").childNodes;
	for (i=0; i<c.length; i++){
		if (c[i].currentSrc!="undefined"){
			c[i].style.display="none";
		}
	}
	console.log(currentNumber);
	console.log(c);
}
function shiftRight(){
	currentNumber--;
	console.log(currentNumber);
}