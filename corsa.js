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
	var Notaeram5 = document.createElement("p");
	var Notaeram6 = document.createElement("p");

var Notaera5 = document.createTextNode(`
Meow. Start of ze great notaera site. calling it brainstorm central atm.  so I obviously need my stuff streamable and purchaseable in nicelooking forms that generate real income and spread.  So Spotify API is on the learn-list.  Symbiosis with a friend also in need of spotify on website.
`);
var Notaera6 = document.createTextNode(`
The switchy title is fun.  it actually messes with SEO ~which I find silly.  I am thinking twitter api for a companion twitterbot would be good to learn too.
`);
Notaeram5.appendChild(Notaera5);
Notaeram6.appendChild(Notaera6);
var NotaeraMohka = document.getElementById("NotaeraMo");
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
