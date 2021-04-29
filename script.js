let numberOfFilms = +prompt("Сколько фильмов вы просмотрели?" , " ");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if(personalMovieDB.count <= 10){
    alert("Просмотрено довольно мало фильмов");
}else if(personalMovieDB.count > 10 && personalMovieDB <= 30){
    alert("Вы класический зритель");
}else if(personalMovieDB.count > 30){
    alert("Вы киноман!!");
}else{
    alert("Что-то пошло не так");
}
    
console.log(personalMovieDB);
