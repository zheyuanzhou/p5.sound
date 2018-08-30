var song;
var amp;
var historys = [];

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    colorMode(HSB);
    song = loadSound("background.mp3", loaded);
    amp = new p5.Amplitude();//just create new amp object by amp constructor
}

function loaded() {
	console.log("loaded");
	song.play();
}

function draw() {
    background(0);
    
    stroke(frameCount % 255, 255, 255);
    noFill();

    var vol = amp.getLevel();//use getLEvel to get the range of volume
    historys.push(vol);//put all volmume into one empty array

    translate(width / 2, height / 2);
    beginShape();
    	for(let angle = 0; angle < 360; angle++) {
    		// var y = map(historys[i], 0, 1, height / 2, 0);
    		var r = map(historys[angle], 0, 1, 180, 500);
    		var x = r * cos(angle);
    		var y = r * sin(angle);
    		vertex(x, y);
    	}
    endShape();

    if(historys.length > 360) {
    	historys.splice(0, 1);
    }

}