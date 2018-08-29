var song;
var amp;
var level;
var w = 40;


function setup() {
    createCanvas(100, 100);
    background(0);
    song = loadSound("background.mp3", loaded);
    amp = new p5.Amplitude(0);//p5.Amplitude is the constructor//it contains bunch of functions in this api
}

function loaded() {
	song.play();
}

function draw() {
    
    level = amp.getLevel();

    // fill("#ab2498");
    // ellipse(width / 2, height / 2, level * 150, level * 150);

    fill(255, 20, 20, 50);
    stroke(200, 200, 0);
    //rect(40,40,40,40)
    rect(width / 2 - w / 2, height - (level * 200), w, level * 200);
}