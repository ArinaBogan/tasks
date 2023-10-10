// Необходимо по кнопку включать и выключать песню

let flag = false;

document.querySelector('button').addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.src = './song.mp3';
    if (flag == false) {
        audio.play();
        flag = true;
    } else {
        audio.pause();
        flag = false;
    }
});