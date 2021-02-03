var arr = ["Nederland moet terug naar de Gulden.", "Er moet meer geld naar ontwikkelingshulp.", "De overheid moet afslanken", "De AOW leeftijd moet terug naar 67 jaar.", "Wiettellt moet worden gelegaliseerd.", "We moeten minder geld aan het leger uitgeven.", "Alle werkende moeten minder loonbelasting betalen.", "Er moet meer geld uitgegeven worden aan vluchtelingenopvang.", "Er moet minder geld uitgegeven worden aan de politie."];
var stemwijzer = document.getElementById("stemWijzer");
var stelling = document.createElement("h1");
var div = document.createElement("div")
var button1 = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
var button3 = document.createElement("BUTTON");

stemwijzer.appendChild(stelling);
stemwijzer.appendChild(div);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);

stelling.innerHTML = arr[0];
button1.innerHTML = "EENS";
button2.innerHTML = "ONEENS";
button3.innerHTML = "VOLGENDE";
button3.style.display = "none";

stelling.style.marginTop = "0px";
stemwijzer.style.textAlign = "center";
stemwijzer.style.height = "200px";
stemwijzer.style.backgroundColor = "white";

button1.style.backgroundColor = "lightgrey";
button2.style.backgroundColor = "lightgrey";
button3.style.backgroundColor = "lightgrey";

button1.addEventListener("click", btn1Click);
button2.addEventListener("click", btn2Click);
button3.addEventListener("click", btn3Click);

function btn1Click(){
	button1.style.backgroundColor = "white";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "inline";
}

function btn2Click(){
	button2.style.backgroundColor = "white";
	button1.style.backgroundColor = "lightgrey";
	button3.style.display = "inline";
}

function btn3Click(){

}

function stelling2(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[1];
}

function stelling3(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[2];
}

function stelling4(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[3];
}

function stelling5(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[4];
}

function stelling6(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[5];
}

function stelling7(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[6];
}

function stelling8(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[7];
}

function stelling9(){
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	stelling.innerHTML = arr[8];
}

function controle(){
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	stelling.innerHTML = "";
}

