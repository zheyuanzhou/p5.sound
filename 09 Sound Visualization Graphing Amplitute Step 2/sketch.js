var song;
var amp;
var historys = [];

function setup() {
    createCanvas(500, 500);
    song = loadSound("background.mp3", loaded);
    colorMode(HSB);

    amp = new p5.Amplitude();
}


function draw() {
    background(0);

    var level = amp.getLevel();//!!!!!!return value is pritty small
    historys.push(level);

    stroke(frameCount % 255, 255, 255);
    noFill();
    
    push();
        beginShape();
            for(let i = 0; i < historys.length; i++) {
                var y = map(historys[i], 0, 1, height / 2, 0);
                vertex(i, y);
            }
        endShape();
    pop();

    line(historys.length, 0, historys.length, height);

    if(historys.length > width - 50) {
        historys.splice(0, 1);
    }
}


function loaded() {
    console.log("Loaded");
    song.play();
}
