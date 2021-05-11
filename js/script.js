"use strict";

// Lesson 12
/* const numberOfFilms = +prompt('How many movies have you watched?', '');

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

console.log(personalMovieDB); */

// Lesson 13
/*
if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too many');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');


const num = 50;

switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 5: 
        console.log('Right');
        break;
    default:
        console.log('Maybe later');
        break;
}
*/

// Lesson 14
/*
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}



let num = 50;

do {
    console.log(num);
    num++;
} 
while (num < 55);


let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
 //       break;
        continue;
    }
        console.log(i);
}

*/
// Lesson 15
/*
const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of the last movie?', ''),
        b = prompt('How you evaluate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('You have watched a few movies!');
} else {
    if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('You are classical viewer!');
    } else {
        if (personalMovieDB.count >= 31) {
            alert('You are top viewer!');
        } else {
            alert('Error happened!');
        }
    }
}

console.log(personalMovieDB);

*/