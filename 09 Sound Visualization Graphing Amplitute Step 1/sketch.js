//get rid of the micphone in this part

var song;
var amp;

function preload() {
    song = loadSound("background.mp3");
}

function setup() {
    createCanvas(500, 500);
    song = loadSound("background.mp3", loaded);

    amp = new p5.Amplitude();
}

function draw() {
    background(0);

    var level = amp.getLevel();//!!!!!!return value is pritty small
    // var size = map(level, 0, 1, 0, 200);

    fill(200, 0, 100);
    ellipse(width * 0.2, height * 0.2, 50, 50);
    ellipse(width * 0.8, height * 0.2, 50, 50);

    fill(200, 0, 100);
    ellipse(width / 2, height / 2, width, 5 + level * 1000);
}









