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



console.log("_____________2. var.1______________")
/*Напишите функцию, которая принимает два числовых аргумента 
и выводит в консоль все четные числа от большего к меньшему.*/
function numer() {
    const value1 = +prompt("Write your number 1. We get a series of even numbers.")
    const value2 = +prompt("Write your number 2. We get a series of even numbers.")

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

console.log("_____________2. var.2______________")
/*вывела четные числа между двумя заданными числами*/

function check(a1, a2) {
    for (let ind1 = a1; ind1 <= a2; ind1++)

        if (ind1 % 2 === 0) {
        console.log(ind1)
    }
}
check(1, 20)



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



console.log("_____________4______________")
/*Напишите функцию, которая принимает числовой аргумент n 
и считает сумму чисел от 1 до n*/
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
}
  console.log(`Sum numbers ${sumTo(15)}`); //120
  alert( sumTo(15) );     //120



console.log("_____________5______________")
/*Напишите функцию, которая принимает два числовых аргумента n и m 
и считает сумму четных чисел и нечетных чисел от n до m. 
Суммы выведите в консоль 
(в начале сумму четных чисел, а затем сумму нечетных).*/
function sumTwo(x, y) {
    let sumEvenNumber = 0;
    let sumOddNumber = 0;
    for (let ind = x; ind <= y; ind++) {
        if (ind % 2 === 0) {
            sumEvenNumber += ind
        } else if (ind % 2 !== 0) {
            sumOddNumber += ind
        }
    }
    console.log(`Summ odd numbers ${sumOddNumber}`)
    console.log(`Summ even numbers ${sumEvenNumber}`)
}
sumTwo(0, 6)