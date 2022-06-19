// var audio = new Audio("sound.mp3");
// audio.play();

myAudio = new Audio('sound.mp3');
if (typeof myAudio.loop == 'boolean') {
    myAudio.loop = true;
}
else {
    myAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}
myAudio.play();