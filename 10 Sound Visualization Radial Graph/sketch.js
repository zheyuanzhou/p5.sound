var song;
var amp;
var historys = [];

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    colorMode(HSB);
    song = loadSound("background.mp3", loaded);

    amp = new p5.Amplitude();
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    
    var vol = amp.getLevel();
    historys.push(vol);
    // var size = map(vol, 0, 1, 100, 300);

    // fill(200, 0, 100);
    // ellipse(width / 2, height / 2, size, size);
    stroke(frameCount % 255, 255, 255);
    noFill();
    beginShape();
        for(let angle = 0; angle < 360; angle++) {
            var r = map(historys[angle], 0, 1, 100, 500);
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
    endShape();

    if(historys.length > 360) {
        historys.splice(0, 1);
    }

}

function loaded() {
    console.log("Loaded");
    song.play();
}
