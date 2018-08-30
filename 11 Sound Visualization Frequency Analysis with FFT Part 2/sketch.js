//FFT : Analyze the frequency of sound

//and returns results from the frequency spectrum or time domain(waveform)
//new p5.FFT(smoothing, bins);//
//smoothing: 0-1 default is 0.8 
//bins: length of the resulting array.Must be a power of two between 16 and 1024. Defaults to 1024.
var song;
var fft;

function preload() {
	song = loadSound("background.mp3");
}

// function loaded() {
// 	console.log("loaded");
// 	song.play();
// }

function setup() {
    createCanvas(256, 256);
    angleMode(DEGREES);
    colorMode(HSB);
    song.play();
    fft = new p5.FFT(0, 256);

    //return an array of amplitude value (0-255) across the frequency spectrum,
    //length is the FFT bins (default is 1024)
    //The array indices correspond to frequencies (i.e. pitches)

}

function draw() {
    background(0);
    
    noFill();
    
    var spectrum = fft.analyze();

    translate(width / 2, height / 2);
    beginShape();
    for(let i = 0; i < spectrum.length; i++) {
        stroke(i, 255, 255);
        var angle = map(i, 0, spectrum.length, 0, 360);
    	var amp = spectrum[i];
        var r = map(amp, 0, 256, 20, 150);
       
        let x = r * cos(angle);
        let y = r * sin(angle);
        //vertex(x, y);
        line(0, 0, x, y);
    }
    endShape();
}