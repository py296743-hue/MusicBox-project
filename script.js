const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg.jpg"
    },
    {
        id: "2",
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg.jpg"
    },
    {
        id: "3",
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg.jpg"
    },
    // ... Continue the pattern for songs 4 to 20
    {
        id: "20",
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg.jpg"
    }
];

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
}); 

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
