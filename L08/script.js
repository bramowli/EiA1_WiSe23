const array = [
    //start scene
    "Dark trees surround you, their branches heavy from carrying almost more snow than they should be able to. The snow reaches up to half the height of your shin. <br>Your world is white. <br>And quiet. <br>Except for the strange grumbling noises that seem to be coming from just behind the closest snowcovered shrub. What would be the best course of action? <br>Will you turn around and run without looking back, or will you, like every horror movie character ever, satisfy your curiosity by looking for the origin of the noises?<br></br>Run or look?",
    //if you choose look
    "Trying to not make any noise you carefully sneak around the shrub. <br>There is still only white. But one of the snowy bushes is moving. While you stand there and watch, the bush begins to grow and slowly turn around. Instead of a plant you see yourself confronted with a dirty white, hairy heap of a being whose teeth are a little too long to be considered cute. <br>You stare at eachother. <br>Torn between your fascination and the primal urge to simply scream you stay unmoving for another moment, before you act. <br></br>Scream or go closer?",
    //if you choose run
    "Running is definetly the best course of action. So that's exactly what you do. First slowly and then getting faster and faster, you flee the strange, unrecognizable noises. You run so fast that the trees fly by you and the landscape blurs to grey, and before you realize it, the floor disappears beneath your feet. <br>All the air gets pressed from your lungs as you slam in the ground. Every little move hurts. <br>Should you just give up trying, or is your will to survive strong enough to get back on your feet?<br></br>Get up or stay down?",
    //if you choose scream after look
    "Not being able to contain your fear any longer you open your mouth and let out a piercing scream. <br>The creature flinches and, to your surprise, screams right back at you. <br>So now you are both standing frozen, looking at eachother and screaming in fear. <br>Suddenly a third sound joins in your screaming match. A low grumbling you feel in your whole body. It is growing closer, still you keep standing there as if your feet are tied to the ground.<br>Both of you have stopped screaming by now, but you are still looking at eachother in fear. <br>Not fear of eachother anymore, but fear of the inevitably grumbling. <br>Your eyes are still locked, as a wave of white uproots the trees next to you and burries you both.",
    //if you choose closer after look
    "This is a once in a lifetime chance. Of course you have to examine the unknown being closer. <br>It curiously tilts it's head to the side as you take a step forward. You are almost in its reach by now and it slowly starts to lift it's arm. <br>You keep going anyways. <br>A heavy paw softly settles on your shoulder. <br>Holding your breath you lift your head and lock eyes with the mystery in front of you. <br>Hypnotizing dark eyes hold your gaze as the paw shifts to your upper back and starts to pull you in closer. Your face gets pressed into the slightly wet, but surprisingly soft furr of the creatures chest. <br>Finally breathing out, you let yourself relax and be completely encased by this unlikely embrace.",
    //if you choose get up after run
    "This is not the place to die! <br>Pain is shooting through your ribs as you struggle to stand. Finally you arrive in an upright position and are able to keep on going. Step after step, you fight your way through the snow and the pain. You are determined to find your way out of this, but in your hasty escape you completely lost orientation and the growing amount of snowflakes is not helping. Every step takes longer until you can barely keep lifting your feet. <br>It seems that this is the place to die now. <br>You've heard that freezing is not the worst way to go anyways.",
    //if you choose stay down after run
    "That's it. <br>What use does it have to try? <br>Even if you get up, you are just going to freeze anyways. <br>Why not here when you're already laying down? <br>Your thoughts are drifting aimlessly. Who might find your body? Did you turn off the stove? Could chicken swim, if you gave them shoes? Through your increasingly abstract thoughts a sound of slow, rhythmic crunching drifts in your ears. It's getting louder. Is death coming to pick you up? <br>Someone IS picking you up. Could that really be death? It feels a bit too warm and soft for that. With quite some effort you manage to open your eyes. <br>Oh, it's Bigfoot. <br>Of course it is. <br>You smile as you close your eyes again.",
    //for wrong input
    "Come on, it's not that hard. <br>Try again!"
]
const input = document.getElementById("input")
const output = document.getElementById("output")

let state = 0
output.innerHTML = array[0]


input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (state == 0) {
            story("look", "run", 1, 2, 7)
        }
        else if (state == 1) {
            story("scream", "go closer", 3, 4, 7)
        }
        else if (state == 2) {
            story("get up", "stay down", 5, 6, 7)
        }
        else {
            window.location.reload()
        }
    }
})

function story(option1, option2, state1, state2, elseState) {
    if (input.value == option1) {
        changeState(state1)
    }
    else if (input.value == option2) {
        changeState(state2)
    }
    else {
        changeState(elseState)
    }
    input.value = ""
}

function changeState(next) {
    state = next
    output.innerHTML = array[next]
}