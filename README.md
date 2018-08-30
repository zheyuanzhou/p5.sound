# p5.sound
###### all codes in this repositories are built using [p5.sound.js](https://p5js.org/reference/#/libraries/p5.sound)
---
## Overview
**01-03** is several basic points of dom and sound codes

**04** is related with the following 09-10 examples by using p5.Amplitude constructor

**05** is basiced on the Coding challenges NO.03 Snake add SFX to it

**06-07** are Oscillator and ADSR synthesis. 07 is the advanced of 06

**08** is based on the micphone function

**09-10** examples are the comprehensive Sound Visualization Amp(04)

**11** example is the the comprehensive Sound Visualization FFT(Fast Fourier transform)

---
## Concepts
**Two methods laoding the sound file**

First Methods would show the loading text before loaded on browser
```ruby
function preload() {
    song = loadSound("background.mp3");
}

function setup() {
    song.play();
}
```
Seond Methos using callback function in second argument being triggered when this sound is ready
```ruby
function setup() {
    song = loadSound("background.mp3", loaded);
}

function loaded() {
    console.log("LOADED");
    song.play();
}
```
