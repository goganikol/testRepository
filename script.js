"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели? ");

    while(numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)){
        alert("Что-то пошло не так повторите ввод");
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели? ");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function watchedFilms(){
    for( let i = 0; i < 2; i++ ){
        let movie = prompt("Один из последних просмотренных фильмов");
        while( movie.length >= 50 || movie.length === 0){
            alert("Что-то пошло не так повторите ввод");
            movie = prompt("Один из последних просмотренных фильмов");
        }
    
        let rating = +prompt("На сколько его оцените?" , 0);
        while(isNaN(rating) || rating > 10 || rating <= 0){
            alert("Что-то пошло не так повторите ввод");
            rating = +prompt("На сколько его оцените?" , 0);
        }
    
        personalMovieDB.movies[movie] = rating;
    }
}

watchedFilms();

function setLevel(){

    if(personalMovieDB.count <= 10){
        alert("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count > 10 && personalMovieDB <= 30){
        alert("Вы класический зритель");
    }else if(personalMovieDB.count > 30){
        alert("Вы киноман!!");
    }else{
        alert("Что-то пошло не так");
    }
}

setLevel();

function showMyDB(){
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }else{
        return;
    }
}

function writeYourGenres(){
    let genres = [];

    for( let i = 0; i< 3; i++ ){
        genres[i] = prompt(`Какой ваш любимый жанр под номером ${i + 1} `," ");

        while(genres[i].length >= 50 || genres[i].length === 0){
            alert("Что-то пошло не так повторите ввод");
            genres[i] = prompt(`Какой ваш любимый жанр под номером ${i + 1} `," ");
        }
    }

    return genres;
}

personalMovieDB.genres = writeYourGenres();
showMyDB();


