"use strict";

const arr = [1, 2, 3, 6, 8];

/*arr[99] = 0;
console.log(arr);
console.log(arr.length);*/

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});


/*
arr.pop();
console.log(arr);
arr.push(8);

console.log(arr);
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for(let value of arr){
    console.log(value);
}*/

const str = prompt("", "");
//const products = str.split(", ");
//console.log(products.join("; "));
//products.sort();
//console.log(products)

