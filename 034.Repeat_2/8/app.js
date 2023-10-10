// Необходимо по нажатию на кнопку включать музыку

const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
    const audio=document.querySelector('audio');
    audio.src='./song.mp3';
    audio.play();
})