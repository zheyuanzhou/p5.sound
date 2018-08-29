//Envelopes are pre-defined amplitude distribution over time.
//Typically, envelopes are used to control the output volume of an object, 
//a series of fades referred to as Attack, Decay, Sustain and Release ( ADSR ). 

//Use setRange to change the attack/release level.
//Use setADSR to change attackTime, decayTime, sustainPercent and releaseTime.

//Use the play method to play the entire envelope

var button;

function setup() {
    createCanvas(100, 100);
    button = createButton("Play");
  	button.mousePressed(toggle);

  	env = new p5.Env();
  	env.setADSR(1, 0.25, 0.2, 1);//attacktime reach the peak volume
  	env.setRange(0.8, 0);

  	osc = new p5.Oscillator();
  	osc.setType("triangle");
  	osc.amp(env);
  	osc.freq(440);
  	osc.start();
}

function draw() {
    background(0);
}


function toggle() {
	console.log("TOGGLE");
	env.play();
}
