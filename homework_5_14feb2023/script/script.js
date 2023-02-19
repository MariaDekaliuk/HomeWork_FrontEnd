// console.log("_____________1______________")
// console.log("Hello People!")
// const numer = +prompt("Write a number. Let's find out 10% of this number: ")
// console.log("10% of this numer is: " + numer * 0.1)


// console.log("_____________2______________")
// const number1 = +prompt("Let's find the smallest number. Write number1: ")
// const number2 = +prompt("Write number2: ")
// if (number1 > number2) {
//     console.log("This is the smallest number: " + number2)
// } else if (number2 > number1) {
//     console.log("This is the smallest number: " + number1)
// } else(number2 === number1)
// console.log("There is no smallest number. These numbers are equal")

// console.log("_____________3______________")
// const number3 = +prompt("Введи число. Сравним его со 100: ")
// if (number3 > 100) {
//     console.log(`Число больше 100`)
// } else if (number3 < 100) {
//     console.log(`Число меньше 100`)
// } else if (number3 === 100) {
//     console.log(`Число равно 100`)
// }

// console.log("_____________4______________")
// const name = prompt("Write your name: ")
// const age = +prompt("Write your age: ")
// if (age >= 18) {
//     console.log(`Hello! ${name}!`)
// } else if (age < 18) {
//     const ageMin = 18 - age;
//     console.log(`Hi! ${name} see you in ${ageMin} years!`)
// }




console.log("__________extra exercise 1*___________")
/*чем является каждый элемент массива: 
строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).*/

const people = ["Masha", 10, {level: "A"}, "knows", 50, {level: "B"}, "German", 100, {level: "C"}, NaN]
let sumOfNumber = 0; 
// let sum = 0;
for (let index = 0; index < people.length; index++) {
     const element = (people[index]);
     
     if (isNaN(element) === false && typeof(element) === "number") {
     console.log("This element " + index + " is: " + typeof(element))
    
    } else if (typeof(element) == 'string') {
        console.log("This element " + index + " is: " + typeof(element));  }
        else console.log("This element " + index + " is: something other");
    }

  
console.log("__________extra exercise 2*___________")
/*Просуммируйте все числа в массиве и выведите результат в консоли. 
  Игнорируйте нечисловые элементы.*/

for (let index = 0; index < people.length; index++) {
    const element = (people[index]);
    
     if (isNaN(element) === false && typeof(element) === "number") {
        sumOfNumber += people[index]
        console.log(sumOfNumber)
}  /*не получилось вывести ТОЛЬКО сумму... 
     вывелась сначала сумма двух чисел,
     потом сумма трех чисел...*/
}





























//===============================================================================

    // console.log("This element " + index + " is: строка " + isNaN(element));
    // console.log("The element with index " + index + " is of type:   " + typeof(element));

    // if (typeof element === 'number' && !isNaN(element)) 

//=======================================================================

   

    //     function getType(n){
    //     if (Number.isNaN(n)) return "NaN";
    //     if (typeof(n) === "string", typeof(n) === "number", typeof(n) === "object", typeof(n) === "bigint", typeof(n) ==="function" || typeof(n) === "undefined") return typeof(n);
    //     return "Something else";
    // }
   
    // for (let index = 0; index < people.length; index++){
    //     console.log(people[index] + " : " + getType(people[index]));
    //     if (getType(people[index]) === "number")
    //         sum += people[index];
    // }
    // console.log("Sum of number elements of array is: " + sum);
