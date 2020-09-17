"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
    for (let i = 0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", '');
        if(a!= null && b!= null && a!="" && b!="" && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log(" Done");
        } else {
            console.log("Error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (10<= personalMovieDB.count <=30){
        console.log("Вы классический зритель");
    } else console.log("произошла ошибка");
}
detectPersonalLevel();

function showDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showDB(personalMovieDB.privat);

function writeYourGenres (){
    for (let i=1;i<=3;i++) {
    personalMovieDB.genres [i-1] = prompt(`Ваш любимый жанр под номером ${i}`, );
    }

}
writeYourGenres ();
