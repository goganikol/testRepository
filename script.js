"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        this.count = +prompt("Сколько фильмов вы посмотрели? ");
        while(this.count === "" || this.count === null || isNaN(this.count)){
            alert("Что-то пошло не так повторите ввод");
            this.count = +prompt("Сколько фильмов вы посмотрели? ");
        }
    },

    watchedFilms: function(){
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
        
            this.movies[movie] = rating;
        }
    },

    setLevel: function(){
        if(this.count <= 10){
            alert("Просмотрено довольно мало фильмов");
        }else if(this.count > 10 &&this.count <= 30){
            alert("Вы класический зритель");
        }else if(this.count > 30){
            alert("Вы киноман!!");
        }else{
            alert("Что-то пошло не так");
        }
    },

    showMyDB: function(){
        if(this.privat === false){
            console.log(this);
        }else{
            console.log("private");
            return;
        }
    },

    writeYourGenres: function(){
        let g = prompt(`Введите ваши любимые жанры через запятую `," ");
        while(g.length >= 150 || g.length === 0){
            alert("Что-то пошло не так повторите ввод");
            g = prompt(`Введите ваши любимые жанры через запятую `," ");
        }
        this.genres = g.split(",");
        this.genres.sort();
        this.genres.forEach((item , i) =>{
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    toogleVisibleMyDB: function(){
        if(this.privat === false){
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();

