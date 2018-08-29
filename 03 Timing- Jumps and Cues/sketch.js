var song;
var jumpButton;
var halfButton;

function setup() {
    createCanvas(100, 100);
    background(0);
    song = loadSound("background.mp3", loaded);

    jumpButton = createButton("Jump");
    jumpButton.mousePressed(jump);

    halfButton = createButton("Half");
    halfButton.mousePressed(half);

    song.addCue(1, changeBackground, "#ab1234");
    song.addCue(2, changeBackground, "#e29e9e");
    song.addCue(3, changeBackground, "#c19759");
    song.addCue(4, changeBackground, "#9cc159");
    song.addCue(5, changeBackground, "#62c474");
    song.addCue(6, changeBackground, "#34737c");
    song.addCue(7, changeBackground, "#5f52af");
    song.addCue(8, changeBackground, "#5f52af");
    song.addCue(9, changeBackground, "#5f52af");

  song.addCue(1, changeText, "hello" );
  song.addCue(2.00, changeText, "p5" );
  song.addCue(3.00, changeText, "what" );
  song.addCue(4.00, changeText, "do" );
  song.addCue(5.00, changeText, "you" );
  song.addCue(6.00, changeText, "want" );
  song.addCue(7.00, changeText, "to" );
  song.addCue(8.00, changeText, "make" );
  song.addCue(9.00, changeText, "?" );

    loop();
}

function loaded() {
	song.play();
	console.log("loaded");
}

function draw() {
    //background(0);
    
    // stupid way. transfer to use addCue() function 
    // if(song.currentTime() > 3 && song.currentTime() < 5) {
    // 	background(200, 0, 100);
    // } else if(song.currentTime() > 5) {
    // 	background(0, 200, 200);
    // }
}

function changeBackground(color) {
	background(color);
}

function changeText(val) {
	textSize(32);
	textAlign(CENTER, CENTER);
  	text(val, width/2, height/2);
}

function jump() {
	song.jump(20);//skep to 20 seconds
}

function half() {
	var length = song.duration();
	song.jump(length / 2);
}

