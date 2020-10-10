var LoP;
var LoT;
var ScreenWidth;
var ScreenHeight;
var Mohka;
function BoRayMaa(){
	ScreenWidth = screen.width;
	ScreenHeight = screen.height;
	LoP = window.innerWidth;
	LoT = window.innerHeight;
	window.resizeTo(ScreenWidth,ScreenHeight);
	

	MaaAboutMe();
//	verever();
	Lotani();
	
}

function MaaAboutMe(){
	var Notaeram = document.createElement("p");
	var Notaeram2 = document.createElement("p");
	var Notaeram3 = document.createElement("p");
	var Notaeram4 = document.createElement("p");
	var Notaeram5 = document.createElement("p");
	var Notaeram6 = document.createElement("p");
var Notaera = document.createTextNode(`meow`);

var Notaera2 = document.createTextNode(`meow`);

var Notaera3 = document.createTextNode(`meow`);

var Notaera4 = document.createTextNode(`meow`);

var Notaera5 = document.createTextNode(`meow`);

var Notaera6 = document.createTextNode(`meow
`);
Notaeram.appendChild(Notaera);
Notaeram2.appendChild(Notaera2);
Notaeram3.appendChild(Notaera3);
Notaeram4.appendChild(Notaera4);
Notaeram5.appendChild(Notaera5);
Notaeram6.appendChild(Notaera6);
var NotaeraMohka = document.getElementById("NotaeraMo");
NotaeraMohka.appendChild(Notaeram);
NotaeraMohka.appendChild(Notaeram2);
NotaeraMohka.appendChild(Notaeram3);
NotaeraMohka.appendChild(Notaeram4);
NotaeraMohka.appendChild(Notaeram5);
NotaeraMohka.appendChild(Notaeram6);

}



//Lotani
function Lotani(){
	maaTani();
	sentani(300);
	
}
function sentani(sensoam){
	soam = setInterval(tani,sensoam);
}
tanisen = 0;
function tani(){
	if (Taniklo.length == tanisen+1){
		tanisen = 0;
	}
	else{
		tanisen++;
	}
	document.title = Taniklo[tanisen];
}
var Taniklo = [];
function maaTani(){
	var TaniTaera = "Love@Magic@Beauty@Grace@Power@Destiny@Fate@Happiness@Optimism@Mysticism@Spirit@Creativity@Kindness@Intelligence@Generousity@Honor@Logic@Intuition@Greatness@Humility@Outgoingness@Wonder@Friendship@Cheerfulness@Welcoming@Care@Artsyness@Humor@Honesty@Cleverness@Brilliance@Heartfelt@charisma@community@smooth@symbiosis@prowess@mastery@immunity@strategy@pride@support@warm";
   Taniklo = TaniTaera.split("@");
}
//Lotani

//seallcorsa
function seallcorsamohka(corsamohkaji){
	corsamohkaji = corsamohkaji + "mohka.jpg";
	document.getElementById("BackgroundMohka").src = corsamohkaji;
	
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.9";	
}, 60);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.8";	
}, 120);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.7";	
}, 180);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.6";	
}, 240);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.5";	
}, 320);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.4";	
}, 480);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.3";	
}, 540);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.2";	
}, 600);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0.1";	
}, 660);
	setTimeout(function(){
    document.getElementById("Background").style.opacity = "0";	
}, 720);
	setTimeout(function(){
    document.getElementById("Background").src = corsamohkaji;
	document.getElementById("Background").style.opacity = "1.0";	
}, 720);
	
}
//seallcorsa



//vere
function vere(verezel){
        vereshh(verezel);
}
function meow(verezel){
        var vereli = document.getElementById("vere" + verezel);
		vereli.play();
		
		seallcorsamohka(verezel);
		maamohka(verezel);
}
function vereshh(moo){
	var elements = document.getElementsByTagName('audio');

for (var i = 0; i < elements.length; i++) {
    elements[i].pause();
	elements[i].currentTime = 0;
}
    meow(moo);
}
//vere

function maamohka(zel){
	
}

