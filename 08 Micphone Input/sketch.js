//Get audio from an input, i.e. your computer's microphone.
//Turn the mic on/off with the start() and stop() methods. When the mic is on, 
//its volume can be measured with getLevel or by connecting an FFT object.

//NOTE: AudioIn must .start() before using .getLevel().

var mic;
var level;

function setup() {
    createCanvas(100, 100);
    mic = new p5.AudioIn();
    mic.start()
}

function draw() {
    background(0);

    fill(200, 0, 100);
    level = mic.getLevel();
    ellipse(width / 2, height / 2, width, 2 + level * 100);
}