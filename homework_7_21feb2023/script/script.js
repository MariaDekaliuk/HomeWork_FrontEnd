console.log("_____________1______________")
/*Напишите функцию, которая  принимает два числовых аргумента 
и возвращает наименьшее из них*/
function minNumer(a, b) {
    if (a > b) {
        console.log(`This is the smallest number: ${b}`)
    } else if (a < b) {
        console.log(`This is the smallest number: ${a}`)
    } else console.log(`These numbers are equal`)
}
minNumer(3, 5)
minNumer(9, 10)
minNumer(5, 5)





console.log("_____________2______________")
/*Напишите функцию, которая принимает два числовых аргумента 
и выводит в консоль все четные числа от большего к меньшему.*/
function numer() {
    const value1 = +prompt("Write your number 1")
    const value2 = +prompt("Write your number 2")

    if (value1 % 2 === 0 && value2 % 2 === 0 && value1 > value2) {
        console.log(value2)
        console.log(value1)
    } else if (value1 % 2 === 0 && value2 % 2 === 0 && value1 < value2) {
        console.log(value1)
        console.log(value2)
    } else if (value1 % 2 === 0 && value2 % 2 !== 0) {
        console.log(value1)
    } else if (value1 % 2 !== 0 && value2 % 2 === 0) {
        console.log(value2)
    }
}
numer()


console.log("_____________3______________")
/*Напишите функцию power, которая принимает два числовых аргумента 
(основание степени и саму степень) 
и возвращает число в указанной степени. 
Значение степени должно быть указано по умолчанию 2.*/
function power (m) {
m = +prompt("Enter the number to raise to the power of 2")
k = 2
console.log (`Number ${m} to the power of 2 = ${m**k}`);
}
power()


console.log("_____________3______________")
/*Напишите функцию, которая принимает числовой аргумент n 
и считает сумму чисел от 1 до n*/
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
  }
  console.log(sumTo(15)); //120
  alert( sumTo(15) );     //120