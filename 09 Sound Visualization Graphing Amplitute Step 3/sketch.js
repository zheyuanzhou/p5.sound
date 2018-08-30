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
    noFill();
    stroke(frameCount % 255, 255, 255);
    var level = amp.getLevel();
    historys.push(level);

    var currentY = map(level, 0, 1, height, 0);
    translate(0, height / 2 - currentY);

    push();
    beginShape();
        for(let i = 0; i < historys.length; i++) {
            var y = map(historys[i], 0, 1, height, 0);
            vertex(i, y);
        }
    endShape();
    pop();

    stroke(255);
    line(historys.length, 0, historys.length, height);

    if(historys.length > width - 50) {
        historys.splice(0, 1);
    }
}









