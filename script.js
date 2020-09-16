"use strict";

let num = 20;

function showFirstMessage(text){

    console.log(text)
    let num = 30;
    console.log(num);
}
showFirstMessage("Hello world");

console.log(num);


//function calc(a, b){
  //  return (a+b)
//}
//console.log(calc(3,5));

function ret(){
    let num1 =50;
    return num1;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function (){
    console.log("Hello!")
};

logger();

const calc = (a,b) => {return a+b};
console.log(calc(2,5));
