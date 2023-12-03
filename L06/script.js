let scene = prompt("Dark trees surround you, their branches heavy from carrying almost more snow than they should be able to.\nThe snow reaches up to half the height of your shin.\nYour world is white.\nAnd quiet.\nExcept for the strange grumbling noises that seem to be coming from just behind the closest snowcovered shrub. What would be the best course of action? Will you turn around and run without looking back, or will you, like every horror movie character ever, satisfy your curiosity by looking for the origin of the noises?\nRun or look?");
let yeti;
let fall;

if (scene == "look") {
    yeti = prompt("Trying to not make any noise you carefully sneak around the shrub. There is still only white. But one of the snowy bushes is moving.\nWhile you stand there and watch, the bush begins to grow and slowly turn around. Instead of a plant you see yourself confronted with a dirty white, hairy heap of a being whose teeth are a little too long to be considered cute.\nYou stare at eachother.\nTorn between your fascination and the primal urge to simply scream you stay unmoving for another moment, before you act.\nScream or go closer?");
}
else if (scene == "run") {
    fall = prompt("Running is definetly the best course of action. So that's exactly what you do. First slowly and then getting faster and faster, you flee the strange, unrecognizable noises. You run so fast that the trees fly by you and the landscape blurs to grey, and before you realize it, the floor disappears beneath your feet.\nAll the air gets pressed from your lungs as you slam in the ground. Every little move hurts. Should you just give up trying, or is your will to survive strong enough to get back on your feet?\nGet up or stay down?");
}

// Die zwei Wahlmöglichkeiten sind mit if und else if realisiert und jeweils mit einem prompt, damit man weiter Dinge eingeben kann.

if (yeti == "scream") {
    alert("Not being able to contain your fear any longer you open your mouth and let out a piercing scream. The creature flinches and, to your surprise, screams right back at you. So now you are both standing frozen, looking at eachother and screaming in fear.\nSuddenly a third sound joins in your screaming match. A low grumbling you feel in your whole body. It is growing closer, still you keep standing there as if your feet are tied to the ground.\nBoth of you have stopped screaming by now, but you are still looking at eachother in fear. Not fear of eachother anymore, but fear of the inevitably grumbling. Your eyes are still locked, as a wave of white uproots the trees next to you and burries you both.");
}
else if (yeti == "closer") {
    alert("This is a once in a lifetime chance. Of course you have to examine the unknown being closer.\nIt curiously tilts it's head to the side as you take a step forward.\nYou are almost in its reach by now and it slowly starts to lift it's arm. You keep going anyways.\nA heavy paw softly settles on your shoulder. Holding your breath you lift your head and lock eyes with the mystery in front of you. Hypnotizing dark eyes hold your gaze as the paw shifts to your upper back and starts to pull you in closer. Your face gets pressed into the slightly wet, but surprisingly soft furr of the creatures chest. \nFinally breathing out, you let yourself relax and be completely encased by this unlikely embrace.");
}
else if (fall == "get up") {
    alert("This is not the place to die!\nPain is shooting through your ribs as you struggle to stand. Finally you arrive in an upright position and are able to keep on going.\nStep after step, you fight your way through the snow and the pain.\nYou are determined to find your way out of this, but in your hasty escape you completely lost your orientation and the growing amount of snowflakes is not helping. Every step takes longer until you can barely keep lifting your feet.\nIt seems that this is the place to die now.\nYou've heard that freezing is not the worst way to go anyways.");
}
else if (fall == "stay down") {
    alert("That's it.\nWhat use does it even have to try?\nEven if you get up, you are just going to freeze anyways.\nWhy not here when you're already laying down?\nYour thoughts are drifting aimlessly. Who might find your body?\nDid you turn off the stove? Could chicken swim, if you gave them shoes?\nThrough your increasingly abstract thoughts a sound of slow, rhythmic crunching drifts in your ears. It's getting louder. Is death coming to pick you up?\nSomeone IS picking you up. Could that really be death? It feels a bit too warm and soft for that. With quite some effort you manage to open your eyes.\nOh, it's Bigfoot.\nOf course it is.\nYou smile as you close your eyes again.");
}
else {
    alert("Come on, it's not that hard. Try again!");
}
/* Die Erklärung ist genau wie oben. Nur dass ich alerts benutzt habe, weil nur eine Aussage nötig ist und nicht ein weiteres Eingeben.
Das else ist für den Fall, dass jemand etwas eingibt was nicht zur Wahl stand. */