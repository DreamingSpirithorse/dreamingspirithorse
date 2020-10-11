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
var Notaera = document.createTextNode(`Ay Dee Aych Dee`);

var Notaera2 = document.createTextNode(`I aced tests and did two homework assignments in all of school that I remember.  I was basically grounded for my entire childhood after starting school, and never did that fix anything ~it just made me entirely separate from all genetic family and never look back.  My interests have spanned such a wide area and I switch so often that with the songs I make, for example, no single human of any niche can like every energy of songs I produce.  But I view the multifocus aspect as addressable later.  The debilitating issue is the 'not doing things'.  When nonmedicated, I have the intent to do things.  I think 'all I have to do is walk over there and lift this thing', and then I watch my thoughts say 'nah' and continue on my way.  If medicated, I would just do the thing.  It feels like somewhere in my dopaminergic or adrenergic system there is somewhere that is supposed to be producing a 9 or 10 to do the things I am thinking to do ~but it is producing an 8 instead.  I, and thankfully those around me, have seen me medicated and so when I am not, my mind doesn't have to develop excuses and reasons for my seeming laziness.  Oh and the unreliability.  I have many times been viewed eventually as a lier various places ~eventually I learned to just not say what I was thinking to do because it happened so rarely.`);

var Notaera3 = document.createTextNode(`So when nonmedicated, it isn't just one task that requires 9 and the 8 causes it to not happen ~it's like 90% of tasks fall below the doable level.  Interestingly, the initial triggering thought still happens.  I still get the 'oh look that thing is on it's side, I should right it'.  And I know I should and it isn't like it's heavy.  But I know I wont do it.  There can be excuses or not.  I have watched my mind with this happen often enough to understand that specifics of excuses don't really matter ~the thing wont happen.  My mind doesn't actually generate excuses any more.  I just feel when 'no'.  Thankfully I don't have to invent excuses and explanations for those around me either ~I believe this basically pushes negativity into selfimage and results in links between adhd and depression.  If I never got my initial diagnosis and prescription right before college (no accident I then went to college), I would have nothing to compare to, and could easily view myself as just worthless and that it was some attribute of my self causing me to not do the things ~instead of it being a chemical thing where 9 is 8 instead of 9 or higher ~and that actually when chemicals are correct, i am helpful, productive... And instead of desperately sadly trying to reach up and exaggerate the few good things I do, reaching down from a comfortable state of having achieved so many good things that I am selecting which to share from among many.  It really is no comparison ~unless maybe a binary comparison.  A friend used the words 'night and day' to describe me.  I'm typing this nonmedicated because my medical card went missing while between doctors.  It's been now a week+ that I haven't made a simple phone call.`);

var Notaera4 = document.createTextNode(`Multistep processes with distinct steps are for some reason MUCH harder ~they require a MUCH larger push than 'add one more shovel of grass to the roof every time I walk by'.  And almost never does an entire step of any process reach completion all at once.  This makes tasks with multiple steps that have to be completed all at once basically impossible.  There is also some aspect of ~maybe the neurons for a specific task are not powerful enough and the signal is too low.  And the above sentence exemplfies it.  I initially was thinking to type one thing, and instead of delete it and type what the thought was interupted with, I kept both.  This happens in all sorts of things.  I actually watch as I raise dosage to my 30mg: 0mg I don't even start things.  Then 10mg I am able to start things, but very unreliably, and (20mg I would be 50%+ of homework completed). ha, just adding the thoughts in the order they come to show how hard it is.  I still have more to say about 10mg ~but my thoughts are on 20mg already.  Anyway, the core principle is I watch if I step up to my normal dose: interuptions become less and less.  Where a task would have had 30 minutes of walking back and forth to do parts of things I thought of on the way at 10mg, the wasted minutes is maybe 15 with 20mg.  Yet I'm not achieving less things.  I actually achieve more.  And I feel maybe half done with this, but time to do something else.`);

var Notaera5 = document.createTextNode(`It isn't something forceable either.  My mind just doesn't go beyond the above at this current time.  Works like this for everything.`);

var Notaera6 = document.createTextNode(`~me
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

