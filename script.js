let numberOfFilms = +prompt("Сколько фильмов вы просмотрели?" , " ");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movie1 = prompt("Один из последних просмотренных фильмов");
let value1 = prompt("На сколько его оцените?");
let movie2 = prompt("Один из последних просмотренных фильмов");
let value2 = prompt("На сколько его оцените?");

personalMovieDB.movies[movie1] = value1;
personalMovieDB.movies[movie2] = value2;

console.log(personalMovieDB);
