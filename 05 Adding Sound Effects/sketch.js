var song;
var rate;
var musicRate;

function setup() {
    createCanvas(100, 100);
    song = loadSound("background.mp3", loaded);
    rate = 1;
}

function loaded() {
	console.log("loaded");
	song.play();
}

function draw() {
    background(0);
    musicRate = map(rate, 1, 2, 1, 2);
	//musicRate = map()
	song.rate(musicRate);
}

function keyPressed() {
	if(key == " ") {
		console.log("Space");
		rate += 0.1;
	}
}



