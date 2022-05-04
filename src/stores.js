import { writable } from 'svelte/store';

export const descScreen = writable(false);
export const movieDesc = writable("example");
export const moviePubDate = writable("31/03/2020")
export const movieName = writable("Fast & Furious")
export const moviePoster = writable("https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg")
export const video_player_is_active = writable(false);
export const movieSrc = writable("https://sveltejs.github.io/assets/caminandes-llamigos.mp4")
export const screenHolder = writable("https://sveltejs.github.io/assets/caminandes-llamigos.jpg")
export const movieCast = writable("example")