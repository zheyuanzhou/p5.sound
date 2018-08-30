//get rid of the micphone in this part

var song;
var amp;

var historys = [];

function preload() {
	song = loadSound("background.mp3");
}

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    song.play();
    amp = new p5.Amplitude();
}

function draw() {
    background(0);

    var level = amp.getLevel();
    historys.push(level);

    push();
    noFill();
    stroke(frameCount % 255, 255, 255);
    beginShape();
        for(let i = 0; i < historys.length; i++) {
            var currentY = map(historys[i], 0, 1, height / 2, 0);
            vertex(i, currentY);
        }
    endShape();
    pop();

    stroke(255);
    line(historys.length, 0, historys.length, height);

    if(historys.length > width - 50) {
        historys.splice(0, 1);
    }
}









