let scene = prompt("Dark trees surround you, their branches heavy from carrying almost more snow than they should be able to. The snow reaches up to half the height of your shin. Your world is white. And quiet. Except for the strange grumbling noises that seem to be coming from just behind the closest snowcovered shrub. What would be the course of action? Will you turn around and run without looking back, or will you, like every horror movie character ever, satisfy your curiosity by looking for the origin of the noises? Run or look?");
let yeti;
let fall;

if (scene == "look") {
    yeti = prompt("Trying to not make any noise you carefully sneak around the shrub. There is still only white. But one of the snowy bushes is moving. While you stand there and watch, the bush begins to grow and slowly turn around. Instead of a plant you see yourself confronted with a dirty white, hairy heap of a being whose teeth are a little too long to be considered cute. You stare at eachother. Torn between your fascination and the primal urge to simply scream you stay unmoving for another moment, before you act. Scream or go closer?");
}
else if (scene == "run") {
    fall = prompt("Running is definetly the best course of action. So that’s exactly what you do. First slowly and then getting faster and faster, you flee the strange, unrecognizable noises. You run so fast that the trees fly by you and the landscape blurs to grey, and before you realize it, the floor disappears beneath your feet. All the air gets pressed from your lungs as you slam in the ground. Every little move hurts. Should you just give up trying, or is your will to survive strong enough to get back on your feet? Get up or stay down?");
}
else {
    alert("Come on, it's not that hard. Try again!");
}

if (yeti == "scream") {
    alert("avalanche");
}
else if (yeti == "closer") {
    alert("hug");
}
else if (fall == "get up") {
    alert("get lost");
}
else if (fall == "stay down") {
    alert("savior");
}
else {
    alert("Come on, it's not that hard. Try again!");
}