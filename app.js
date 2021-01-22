const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelector(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    //Get the lenght oof outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
    });


    //Create a function specific to stop and play sounds
    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "/meditation-timer/svg/pause.svg";
        } else {
            song.pause();
            video.pause();
            play.src = "/meditation-timer/svg/play.svg";
        }
    };
};
app();