// Добавить переключение песен

const btnBack = document.querySelector('.back');
const btnPlay = document.querySelector('.play');
const btnNext = document.querySelector('.next');
const audio = document.querySelector('audio');

let flag = false;
const songs = [
    { id: 1, path: './songs/song.mp3' },
    { id: 2, path: './songs/song1.mp3' },
    { id: 3, path: './songs/song2.mp3' }
];
let currentIndexSong = 0;

btnPlay.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path;
    if (flag == false) {
        audio.play();
        this.style = 'background-image:url(./assets/pause.svg)';
        flag = true;
    } else {
        audio.pause();
        flag = false;
        this.style = 'background-image:url(./assets/playBtn.svg)';
    }
});

btnBack.addEventListener('click', () => {
    if (currentIndexSong == 0) return;
    currentIndexSong--;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image:url(./assets/pause.svg)';
});

btnNext.addEventListener('click', () => {
    if (currentIndexSong == songs.length - 1) return
    currentIndexSong++;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image:url(./assets/pause.svg)';
})