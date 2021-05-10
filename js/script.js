"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('One of the last movie:', ''),
      b = prompt('How you evaluate it?'),
      c = prompt('One of the last movie:', ''),
      d = prompt('How you evaluate it?');

personalMovieDB.movie[a] = b;   
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);