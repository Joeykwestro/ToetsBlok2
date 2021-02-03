var arr = ["Nederland moet terug naar de Gulden.", "Er moet meer geld naar ontwikkelingshulp.", "De overheid moet afslanken", "De AOW leeftijd moet terug naar 67 jaar.", "Wiettellt moet worden gelegaliseerd.", "We moeten minder geld aan het leger uitgeven.", "Alle werkende moeten minder loonbelasting betalen.", "Er moet meer geld uitgegeven worden aan vluchtelingenopvang.", "Er moet minder geld uitgegeven worden aan de politie."];

var stemwijzer = document.getElementById("stemWijzer");
var stelling = document.createElement("h1");
var div = document.createElement("div")
var button1 = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
var button3 = document.createElement("BUTTON");

function createHTML(){
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
}
createHTML();

button1.addEventListener("click", btn1Click);
button2.addEventListener("click", btn2Click);

button3.addEventListener("click", btn3Click);
stelling.setAttribute("id", "stelling");
div.setAttribute("id", "buttons");
button1.setAttribute("id", "btnEens");
button2.setAttribute("id", "btnOneens");
button3.setAttribute("id", "btnVolgende");

button1.addEventListener("mouseover", hover1);
button2.addEventListener("mouseover", hover2);
button3.addEventListener("mouseover", hover3);

button1.addEventListener("mouseout", hover11);
button2.addEventListener("mouseout", hover22);
button3.addEventListener("mouseout", hover33);

var btn1Counter = 0;
var btn2Counter = 0;

function btn1Click(){
	button1.style.backgroundColor = "white";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "block";
	button3.style.marginLeft = "455px";
	button3.style.marginTop = "20px"
	button1.disabled = true;
	button2.disabled = false;
}

function btn2Click(){
	button2.style.backgroundColor = "white";
	button1.style.backgroundColor = "lightgrey";
	button3.style.display = "block";
	button3.style.marginLeft = "455px";
	button3.style.marginTop = "20px"
	button1.disabled = false;
	button2.disabled = true;
}

function btn3Click(){
	if(button1.style.backgroundColor == "white"){
		btn1Counter++;
		console.log(btn1Counter);
	}
	else if(button2.style.backgroundColor == "white"){
		btn2Counter++;
		console.log(btn2Counter);
	}
	else{}
	button1.style.backgroundColor = "lightgrey";
	button2.style.backgroundColor = "lightgrey";
	button3.style.display = "none";
	button1.disabled = false;
	button2.disabled = false;
	stelling2();
}

function stelling2(){
	stelling.innerHTML = arr[1];
	button3.addEventListener("click", stelling3);
}

function stelling3(){
	stelling.innerHTML = arr[2];
	button3.addEventListener("click", stelling4);
}

function stelling4(){
	stelling.innerHTML = arr[3];
	button3.addEventListener("click", stelling5);
}

function stelling5(){
	stelling.innerHTML = arr[4];
	button3.addEventListener("click", stelling6);
}

function stelling6(){
	stelling.innerHTML = arr[5];
	button3.addEventListener("click", stelling7);
}

function stelling7(){
	stelling.innerHTML = arr[6];
	button3.addEventListener("click", stelling8);
}

function stelling8(){
	stelling.innerHTML = arr[7];
	button3.addEventListener("click", stelling9);
}

function stelling9(){
	button3.innerHTML = "VOLTOOIEN";
	stelling.innerHTML = arr[8];
	button3.addEventListener("click", controle);
}

function controle(){
	buttons.style.display = "none";
	stelling.style.display = "none";
	var text = document.createElement("p");
	stemwijzer.appendChild(text);
	text.style.marginTop = "0px";

	if(btn1Counter >= 8){
		text.innerHTML = "U heeft " + btn1Counter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is D66";
	}
	else if(btn1Counter >= 5 & btn1Counter <= 7){
		text.innerHTML = "U heeft " + btn1Counter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is PvdA";
	}
	else if(btn1Counter >= 2 & btn1Counter <= 4){
		text.innerHTML = "U heeft " + btn1Counter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is VVD";
	}
	else if(btn1Counter == 1){
		text.innerHTML = "U heeft " + btn1Counter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is CDA";
	}
	else{
		text.innerHTML = "U heeft " + btn1Counter + " keer EENS gestemd. De partij die het beste bij uw voorkeur past is CDA";
	}
}

function hover1(){
	button1.style.backgroundColor = "white";
}

function hover2(){
	button2.style.backgroundColor = "white";
}

function hover3(){
	button3.style.backgroundColor = "white";
}

function hover11(){
	button1.style.backgroundColor = "lightgrey";
}

function hover22(){
	button2.style.backgroundColor = "lightgrey";
}

function hover33(){
	button3.style.backgroundColor = "lightgrey";
}