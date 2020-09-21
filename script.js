"use strict";

function first() {
    //Do something
    setTimeout(function () {
        console.log(1);
    }, 500)

}
first();
function second() {
    console.log(2);

}
second();
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJS("JavaScript", function () {
    console.log("Я прошел этот урок!");
});