var song;
var button;
var r = 0;

// function preload() {
// 	song = loadSound("background.mp3");
// }

function setup() {
    createCanvas(100, 100);
    //song.play();
    song = loadSound("background.mp3", loaded);
    button = createButton("Play");
    button.mousePressed(toggleMusic);
}

function loaded() {
	console.log("music loaded");
}

function draw() {
    background(r);
}

function toggleMusic() {
	if(!song.isPlaying()) {
		song.play();
		r = "#ab1234";
		button.html("Pause")
	} else {
		song.pause();
		r = 0;
		button.html("Play")
	}
}
