// Добавить переключение песен

const btnBack = document.querySelector('.back');
const btnPlay = document.querySelector('.play');
const btnNext = document.querySelector('.next');
const audio = document.querySelector('audio');
const artist = document.querySelector('.artist');
const nameOfSong = document.querySelector('.nameOfSong');
const songCover = document.querySelector('.songCover');

let flag = false;
const songs = [
    {
        id: 1, path: './songs/song.mp3', artist: 'artist', nameOfSong: 'song',
        songCover: 'background-image:url(./assets/img1.jpg)'
    },
    {
        id: 2, path: './songs/song1.mp3', artist: 'artist1', nameOfSong: 'song1',
        songCover: 'background-image:url(./assets/img2.jpg)'
    },
    {
        id: 3, path: './songs/song2.mp3', artist: 'artist2', nameOfSong: 'song2',
        songCover: 'background-image:url(./assets/img3.jpg)'
    }
];
let currentIndexSong = 0;

btnPlay.addEventListener('click', function () {
    audio.src = songs[currentIndexSong].path;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
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
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    audio.src = songs[currentIndexSong].path;
    songCover.style = songs[currentIndexSong].songCover;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image:url(./assets/pause.svg)';
});

btnNext.addEventListener('click', () => {
    if (currentIndexSong == songs.length - 1) return
    currentIndexSong++;
    artist.textContent = songs[currentIndexSong].artist;
    nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
    songCover.style = songs[currentIndexSong].songCover;
    audio.src = songs[currentIndexSong].path;
    audio.play();
    flag = true;
    btnPlay.style = 'background-image:url(./assets/pause.svg)';
})