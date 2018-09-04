//Envelopes are pre-defined amplitude distribution over time.
//Typically, envelopes are used to control the output volume of an object, 
//a series of fades referred to as Attack, Decay, Sustain and Release ( ADSR ). 

//Use setRange to change the attack/release level.
//Use setADSR to change attackTime, decayTime, sustainPercent and releaseTime.

//Use the play method to play the entire envelope

var button;

function setup() {
    createCanvas(200, 200);
    button = createButton("Play");
    button.mousePressed(toggle);

    env = new p5.Env();
    //first para: how long to reach the target (grad move to the volume)
    //second para: how long to get regular volume (duration time)
    //third para: volume between 0 to 1
    //forth para: how long to fade out the time
    env.setADSR(0.001, 0.25, 0.5, 1);
    //max (attackLevel) and min (releaseLevel) of envelope.
    env.setRange(0.8, 0);

    osc = new p5.Oscillator();
    osc.amp(env);
    osc.freq(440);
    osc.setType("triangle")
    osc.start();
}

function draw() {
    background(0);
}


function toggle() {
	console.log("TOGGLE");
	env.play();
}
