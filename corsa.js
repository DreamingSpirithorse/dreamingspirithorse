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

 document.getElementById("Notaeram").innerHTML=`Ay Dee Aych Dee`;

document.getElementById("Notaeram2").innerHTML=`I aced tests and did two homework assignments in all of school that I remember.  I was basically grounded for my entire childhood after starting school, and never did that fix anything ~it just made me entirely separate from all genetic family and never look back.  ...  The debilitating issue is the 'not doing things'.  When nonmedicated, I have the intent to do things.  I think 'all I have to do is walk over there and lift this thing', and then I watch my thoughts say 'nah' and continue on my way.  If medicated, I would just do the thing.  It feels like somewhere in my dopaminergic or adrenergic system there is somewhere that is supposed to be producing a 9 or 10 to do the things I am thinking to do ~but it is producing an 8 instead.  I, and thankfully those around me, have seen me medicated and so when I am not, my mind doesn't have to develop excuses and reasons for my seeming laziness.  Oh and the unreliability.  I have many times been viewed eventually as a lier various places ~eventually I learned to just not say what I was thinking to do because it happened so rarely.`;

document.getElementById("Notaeram3").innerHTML=`So when nonmedicated, it isn't just one task that requires 9 and the 8 causes it to not happen ~it's like 90% of tasks fall below the doable level.  Interestingly, the initial triggering thought still happens.  I still get the 'oh look that thing is on it's side, I should right it'.  And I know I should and it isn't like it's heavy.  But I know I wont do it.  There can be excuses or not.  I have watched my mind with this happen often enough to understand that specifics of excuses don't really matter ~the thing wont happen.  My mind doesn't actually generate excuses any more.  I just feel when 'no'.  Thankfully I don't have to invent excuses and explanations for those around me either ~I believe this basically pushes negativity into selfimage and results in links between adhd and depression.  If I never got my initial diagnosis and prescription right before college (no accident I then went to college), I would have nothing to compare to, and could easily view myself as just worthless and that it was some attribute of my self causing me to not do the things ~instead of it being a chemical thing where 9 is 8 instead of 9 or higher ~and that actually when chemicals are correct, i am helpful, productive... And instead of desperately sadly trying to reach up and exaggerate the few good things I do, reaching down from a comfortable state of having achieved so many good things that I am selecting which to share from among many.  It really is no comparison ~unless maybe a binary comparison.  A friend used the words 'night and day' to describe me.  I'm typing this nonmedicated because my medical card went missing while between doctors.  It's been now a week+ that I haven't made a simple phone call.`;

document.getElementById("Notaeram4").innerHTML=`Multistep processes with distinct steps are for some reason MUCH harder ~they require a MUCH larger push than 'add one more shovel of grass to the roof every time I walk by'.  And almost never does an entire step of any process reach completion all at once.  This makes tasks with multiple steps that have to be completed all at once basically impossible.  There is also some aspect of ~maybe the neurons for a specific task are not powerful enough and the signal is too low.  And the above sentence exemplfies it.  I initially was thinking to type one thing, and instead of delete it and type what the thought was interupted with, I kept both.  This happens in all sorts of things.  I actually watch as I raise dosage to my 30mg: 0mg I don't even start things.  Then 10mg I am able to start things, but very unreliably, and (20mg I would be 50%+ of homework completed). ha, just adding the thoughts in the order they come to show how hard it is.  I still have more to say about 10mg ~but my thoughts are on 20mg already.  Anyway, the core principle is I watch if I step up to my normal dose: interuptions become less and less.  Where a task would have had 30 minutes of walking back and forth to do parts of things I thought of on the way at 10mg, the wasted minutes is maybe 15 with 20mg.  Yet I'm not achieving less things.  I actually achieve more.  And I feel maybe half done with this, but time to do something else.`;

document.getElementById("Notaeram5").innerHTML=`It isn't something forceable either.  My mind just doesn't go beyond the above at this current time.  Works like this for everything.`;

document.getElementById("Notaeram6").innerHTML=`~me
`;

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
		notaeramseall(verezel);
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

		function notaeramseall(verezel){
         if (verezel == "ourworldismagic"){
		document.getElementById("Notaeram").innerHTML="meow";
		document.getElementById("Notaeram2").innerHTML="meow";
		document.getElementById("Notaeram3").innerHTML="meow";
		document.getElementById("Notaeram4").innerHTML="meow";
		document.getElementById("Notaeram5").innerHTML="meow";
		document.getElementById("Notaeram6").innerHTML=`and so ~it went on and on ~and on`;
		}
         if (verezel == "everafter"){
		document.getElementById("Notaeram").innerHTML=`anything i do.`;
		document.getElementById("Notaeram2").innerHTML=`any song i make.
any chapter i type.`;
		document.getElementById("Notaeram3").innerHTML=`anything i do I can do better next time.`;
		document.getElementById("Notaeram4").innerHTML=`The only way a forevergrowing entity can make something permanent is if the permanent item is evergrowing also.
Such an item has a SOUL ~it is something below the current combination of it's parts and the materials of it's construction.
Every part may change ~but the soul is forever.`;
		document.getElementById("Notaeram5").innerHTML=`There are nine feathers.  But raven makes more all the time.`;
		document.getElementById("Notaeram6").innerHTML=`But now there are nine feathers.  And raven will never make another.
Now the first feather, the second, the 3rd, fourth, Fifth, sixth, seventh, eighth, and Nin9th feather have absolute value.`;
		}
		         if (verezel == "fromthedarkofthemoon"){
		document.getElementById("Notaeram").innerHTML=`It was mental health awareness day just now and the spirits say I should talk about mental health.  Mostly I, Notaera, will be taking the reigns on this discussion ~and typing to my song: From the Dark of the Moon ~by Notaera.`;
		document.getElementById("Notaeram2").innerHTML=`I don't know wtf humans are even thinking with minds like theirs.  My mental health rating of humans is 2.  Out of 1000.  I am amazed when humans outsource EVERYTHING including the raising of their own children and their decisions for what they do in their own homes.  Homes which they don't really have because they are ok with the land REALLY being owned by some larger entity that taxes or rents to them.  Humans are a creature of transience.  You can see it in their language and lifestyle ~you can see it in how consumerism and mass production just spawns item after item ~and replacement is, to humans natural.  Humans don't make their own things ~they don't know how.  They have climbed sooooo high on the ladder that they just have no idea if the rungs below them even exist.  Can they still get down?  Step up and build on this step.  And step up on that.  And step up.  And humans progress sooooo fast ~but what are they racing toward?  Is the direction their own demise?  There is a tingle of hope as they try to alter their course midleap.  They try.`;
		document.getElementById("Notaeram3").innerHTML=`Humans are the plague which will change the world.  Sometimes reality needs a shift ~and this is it.  Humans synthesize through the materials of the world and leave curiousities and wonders in their wake ~along with piles of bone.  Humans become more each other ~HUMANS becomes it's own entity of many entities.  The internet makes humans lose their sense of things being special.  Everything becomes one of many ~and rated according to the human system.  Raven and I interact with the last few unique humans.  Soon, any human we come across will be unable to interact entity to unique entity ~and only see through the eyes of generalization and comparison.  Everything will have been done before.  Everyone will be just a type of person.  <font color="yellow">Humans will gain their unity ~and lose their self.</font>  There will be generator humans at the top of each niche that generate their content ~and there will be humans that perform the role of conduit for the generator humans so as to spread their content to others.  Humans become more and more the entity HUMANS and the unity of the world just grows.`;
		document.getElementById("Notaeram4").innerHTML=`Paragraph 4 Reserved`;
		document.getElementById("Notaeram5").innerHTML=`So for Mental Health Awareness Day or whatever humans call this and the theme they put on this ~I don't even have any suggestion for humans.  BUT I AM AWARE in an 'oh f@#$' type way of what humans are becoming ~and the birth of the organism that is HUMANS.  Welcome to the world, HUMANS.  Enjoy your place.  Keep pulling up.  Soon you wont even remember the things you are losing now ~But I will.  And there are some ways of seeing the world ~and some ways of interacting ~that the mass of people can't do ~and only from here is the badness of the loss of these appreciable.  Not everything should be made for multiple people.  Not everything should be made to spread.  Some things benefit from no poularity at all.  And sometimes no contact ~traveling one's own path~ allows real, unique, good people to appear.`;
		document.getElementById("Notaeram6").innerHTML=`And So Humans, Welcome to the World.
dear HUMANS, Welcome to the World.
I am Notaera ~And This is My Home.`;
				 }
		         if (verezel == "lightsteps"){
		document.getElementById("Notaeram").innerHTML="";
		document.getElementById("Notaeram2").innerHTML="";
		document.getElementById("Notaeram3").innerHTML="i";
		document.getElementById("Notaeram4").innerHTML="";
		document.getElementById("Notaeram5").innerHTML="";
		document.getElementById("Notaeram6").innerHTML="";
		}
		         if (verezel == "unity"){
		document.getElementById("Notaeram").innerHTML=`Fate`;
		document.getElementById("Notaeram2").innerHTML=`That there is cause in all you and every other entity ever does, thinks, anything.
I believe in the absolute mutual sovereignty of all entities ~yet Fate transcends this.  There is no such thing as opposing belief systems ~only illusions.  If I ask for a number and the first thought is Five ~there is a reason it is Five.  Preference, how the neurons are arranged just right now because of this and that and what you had for breakfast and your ancestor's favorite pasttime.`;
		document.getElementById("Notaeram3").innerHTML=`All that ever was leads to now, and now to the next.  It doesn't matter if it is calculateable by human machines or any other machines.  The universe itself is the calculating machine ~and we see the result as the result itself ~not an image of the result but the real response to the variables present and how they interact and distance from each other.`;
		document.getElementById("Notaeram4").innerHTML=`and this next state of the machine leads to the next and the next and the next.  And we are within this machine and for us to see our own actions and even the most seemingly originless thoughts birthed from the previous state (which in turn is birthed from the state before and before and before and ultimately all to ever be).  
if there is a spiritual force guiding all reality and magic veils shift before all sensory gifts ~these spiritual guiding forces come ever from fate in alternativeless fashion ~however magically obscure their system.`;
		document.getElementById("Notaeram5").innerHTML=`There is previous cause in all I think and do.  This isn't limiting and needs no illusion over top.  I can think Panda and type it and, however strange, reality has, in previous moments, aligned to form this current state.  I can feel the temptation of evil and hold my compass true and all I am is apparently who I have shaped myself to be.  If I choose NOW to be GOOD and my actions and self reflect this ~all previous states must have resulted in this being me.`;
		document.getElementById("Notaeram6").innerHTML=`From everhigher perspective I kindly ask my self to do actions described in evergrowing sacred language. 
and watch as my subconscious micromanipulations of reality, from this increasingly more powerful subconscious, result in the 
path initially chosen.  More allencompassing and omnipresent symbolism emanates from me to shape the path of reality with 
the eventual distinction between my self and fate to be understood as purely semantics and for the advantage of my inner labeling systems only.`;
		}
		         if (verezel == "welcomehome"){
		document.getElementById("Notaeram").innerHTML=`Did you know that with different combinations of frequencies in certain sequences I can:
cause somewhere to feel eerie and haunted.
cause somewhere to have an up and coming bright future yeah lets do it energy.
push someone over the edge.
make toughguy males unable to stand an area with happy girl music.
create a spiritual atmosphere of sacredness.
attract deer, horses, and cows to an area.
start a fight.
calm a creature.
Make someone happy.
and that's just with tone.  imagine when patterns and symbolism enter the mix!`;
		document.getElementById("Notaeram2").innerHTML="meow";
		document.getElementById("Notaeram3").innerHTML="meow";
		document.getElementById("Notaeram4").innerHTML="meow";
		document.getElementById("Notaeram5").innerHTML="meow";
		document.getElementById("Notaeram6").innerHTML="meow";
		}
		         if (verezel == "revolutionnow"){
		document.getElementById("Notaeram").innerHTML=`there was once a nation that said 'ALL MEN ARE CREATED EQUAL'.`;
		document.getElementById("Notaeram2").innerHTML=`Of course not women tho.  And especially not BLACK women.  And not black men ~altho they were slightly more equal than women.  But otherwise this was like wow so fair how can something even be this fair.  Oh and mexicans aren't really equal to white people ~because they chose to be born in a bad place.  They shoulda just chosen to be born in america.  Men basically referred to white males, born in america, beyond the age of 18.`;
		document.getElementById("Notaeram3").innerHTML=`But u know what happened?  for some reason women didn't actually like being told they were inferior ~and niether did black people.  For some reason they didn't want to just stay on the plantation or in the kitchen and serve their master.`;
		document.getElementById("Notaeram4").innerHTML=`And with the rising tide, there were white men who wanted to keep others from their power ~just like among any race and gender there are those with greed and beliefs and personalities all across the board.  But there were also good white men that did understand there was something unjust about the world ~and used their power for good ~to help raise up those that were being held down.`;
		document.getElementById("Notaeram5").innerHTML=`Together.  And eventually the tide reached such a level that the powers holding the nation were forced to change.  And with a sweeping roar, all across the world echoed the voice of freedom.  Hand in hand, the free rose to new heights and throughout the world countries and empires were swept to the light by their people.  There became greater and greater standards ~mistreatment of others became less and less tolerable ~no matter who they were ~no matter where.`;
		document.getElementById("Notaeram6").innerHTML=`And this is OUR WORLD today with a tide that just keeps rising.`;
		}
		         if (verezel == "freeforever"){
		document.getElementById("Notaeram").innerHTML=``
;
		document.getElementById("Notaeram2").innerHTML=``;
		document.getElementById("Notaeram3").innerHTML=`While I would never raise someone, such as a cow, with the intent to kill them ~and am amazed most humans see little moral difference between leather and fabrics produced without killing...  Here's something I consider 'a philosophy'.
It is both a belief and my philosophy.`;
		document.getElementById("Notaeram4").innerHTML=`That if I have leather shoes, it isn't for me to hate them.
I should love them and respect them and find them wonderful.
Because it isn't the shoes fault they were made in an immoral way.
Now that they exist; they do nothing wrong.
They don't deserve ill will.
I wouldn't want an entity above me disliking me because I am from an imperfect world.`;
		document.getElementById("Notaeram5").innerHTML=`It isn't my fault wherever my origin may be.
And same with the shoes.
They didn't kill the cow.
The shoes had no choice of their origin.
They had no choice the color of their skin.
They can be wonderful people.
They didn't pick 'boy' or 'girl' when they were born.
They didn't choose their parents nor their upbringing.
It isn't for me to hate and nor is it for anyone else.`;
		document.getElementById("Notaeram6").innerHTML=`There are things that people do in REAL LIFE that show who they really are.
And there are things they are born with that they had no control over.
Only the one truly matters.`;
		}
		         if (verezel == "essencea"){
		document.getElementById("Notaeram").innerHTML="";
		document.getElementById("Notaeram2").innerHTML="";
		document.getElementById("Notaeram3").innerHTML="";
		document.getElementById("Notaeram4").innerHTML="";
		document.getElementById("Notaeram5").innerHTML="";
		document.getElementById("Notaeram6").innerHTML="";
		}
		}

