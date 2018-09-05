//FFT : Analyze the frequency of sound

//and returns results from the frequency spectrum or time domain(waveform)
//new p5.FFT(smoothing, bins);//
//smoothing: 0-1 default is 0.8 
//bins: length of the resulting array.Must be a power of two between 16 and 1024. Defaults to 1024.
var song;
var fft;
var w;

function preload() {
	song = loadSound("background.mp3");
}

// function loaded() {
// 	console.log("loaded");
// 	song.play();
// }

function setup() {
    createCanvas(256, 256);
    colorMode(HSB);
    song.play();
    fft = new p5.FFT(0, 256);

    //return an array of amplitude value (0-255) across the frequency spectrum,
    //length is the FFT bins (default is 1024)
    //The array indices correspond to frequencies (i.e. pitches)

}

function draw() {
    background(0);

    var spectrum = fft.analyze();//return amp value along the fre domain

    //computes amplitude values along the frequency domain.
    //The array indices correspond to frequencies (i.e. pitches), 
    //from the lowest to the highest that humans can hear. 
    //Each value represents amplitude at that slice of the frequency spectrum.
    
    w = width / 128;

    for(let i = 0; i < spectrum.length; i++) {
        stroke(i, 255, 255);
        var amp = spectrum[i];
        var y = map(amp, 0, 255, height, 0);
        line(i * w, height, i * w, y);
    }
}
