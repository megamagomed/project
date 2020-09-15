"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i=0;
while (i<2){
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", '');
    if(a!= null && b!= null && a!="" && b!="" && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log(" Done");
        i++;
        } else{
        console.log("Error");
        }
}

if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
} else if (10<= personalMovieDB.count <=30){
    console.log("Вы классический зритель");
} else console.log("произошла ошибка");

console.log(personalMovieDB);