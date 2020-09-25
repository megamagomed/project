"use strict";

let a = 5,
    b = a;
b=b+5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1

};

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 7,
    b: 3,
    c: {
        x: 4,
        b: 6
    }
}

copy(number);
const newNumbers = copy(number);
console.log(newNumbers);
newNumbers.a = 123;
console.log(newNumbers);
console.log(number)

const add = {
    d: 10,
    e: 45
}

const clone = Object.assign({}, add);
clone.d = 100;
// console.log (add);
// console.log(clone);
