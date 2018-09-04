//Creates a signal that oscillates between -1.0 and 1.0
//By default, the oscillation takes the form of a sinusoidal shape ('sine').
//Additional types include 'triangle', 'sawtooth' and 'square'.
//The frequency defaults to 440 oscillations per second (440Hz, equal to the pitch of an 'A' note).

//Set the type of oscillation with setType(), or by instantiating a specific oscillator: 
//p5.SinOsc, p5.TriOsc, p5.SqrOsc, or p5.SawOsc.

var osc;

// function preload() {
// 	osc = new p5.Oscillator();
// 	osc.setType("triangle");
// 	osc.freq(440);
// 	osc.amp(0.2);
// 	osc.pan(1, 3);
// 	osc.start();
// }

function setup() {
    createCanvas(100, 100);
    
    osc = new p5.Oscillator();
    osc.setType("triangle");
    osc.freq(440);//tone
    osc.amp(0.5);//volume 
    osc.pan(-1, 2);//after two seconds pan to the right Creates a signal that oscillates between -1.0 and 1.0
    osc.start();
}

function draw() {
    background(0);
}
