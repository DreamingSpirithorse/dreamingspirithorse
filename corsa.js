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
var mmohka;
var premohka = "mohka";
function seallcorsamohka(corsamohkaji){
	corsamohkaji = corsamohkaji + "mohka";
	mmohka = document.getElementById(corsamohkaji);
	document.body.appendChild(mmohka);
	
}
//seallcorsa



//vere
function vere(verezel){
        vereshh(verezel);
}
var playing = "0";
function meow(verezel){
	playing = verezel;
        var vereli = document.getElementById("vere" + verezel);
		
		vereli.play();
		
	//	seallcorsamohka(verezel);
		maamohka(verezel);
		notaeramseall(verezel);
}

function vereshh(moo){
	if (playing != "0"){
	var elementa = document.getElementById("vere"+ playing);
    elementa.pause();
	elementa.currentTime = 0;
	}
    meow(moo);
}
//vere

function maamohka(zel){
	
}

		function notaeramseall(verezel){
		}