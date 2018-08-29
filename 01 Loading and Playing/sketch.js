var song;
var volumeSlider;

var rateSlider;
var panSlider;
// =-=-=-=-=Method 1 load the sound file=-=-=-=-=
// function preload() {
// 	song = loadSound("background.mp3");
// }

function setup() {
    createCanvas(100, 100);
    volumeSlider = select("#volume");
    rateSlider = select("#rate");
    pan = select("#pan");
    volumeSlider.html("volumeSlider : 0 ~ 2");
    rateSlider.html("rateSlider : 0.1 ~ 2");
    pan.html("panSlider : 1 ~ 1");
    // =-=-=-=-=Method 2 load the sound file=-=-=-=-=
    //sound cannot single here cuz sound have not finished loading in setup
    //we nned one callback function in second argument being triggered when this sound is ready
    song = loadSound("background.mp3", loaded);
    volumeSlider = createSlider(0, 2, 0.5, 0.01);

    rateSlider = createSlider(0.1, 2, 1, 0.01);//normal speed is one
    panSlider = createSlider(-1, 1, 0, 0.1);
}

function loaded() {
	song.play();
}

function draw() {
    background(random(0, 105));
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());//-1 is left and 1 is right
}

// function toggleMusic() {
// 	if(isPlaying()) {
// 		song.pause();
// 		//song.stop();
// 	} else {
// 		song.play();
// 	}
// }