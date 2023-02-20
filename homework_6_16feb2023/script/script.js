console.log("_____________1______________")
/*Напишите цикл for, который выводит консоль 
каждое второе число от 0 до 10*/
for (let i1 = 0; i1 <= 10; i1 = i1 + 2) {
console.log(i1)}


console.log("_____________2______________")
/*Напишите цикл for, который выводит в консоль  
все числа от 55 до 20*/
for (let i2 = 55; i2 >= 20; i2--) {
console.log(i2)}


console.log("_____________3______________")
/*Дан массив numbers. 
Вывести в консоль все числа из массива
const numbers = [3, 5, 11, 2, 8, 1, 6];*/

const numbers = [3, 5, 11, 2, 8, 1, 6]

for (let i3 = 0; i3 < numbers.length; i3++){
const numer = numbers[i3]    
if (!isNaN(numbers[i3])) {
       console.log(numer)
    }
}

console.log("_____________4______________")
/*Сформировать новый массив numberssquared 
и передать в него все элементы из массива numbers, 
возведенные в квадрат*/
const numberssquared = []
numberssquared.push(numbers[0] ** 2, numbers[1] ** 2, numbers[2] ** 2, 
    numbers[3] ** 2, numbers[4] ** 2, numbers[5] ** 2, numbers[6] ** 2)
console.log(numberssquared)


console.log("_____________5______________")
/*Создать переменную lastelem и передать в нее 
последний элемент из сформированного массива numberssquared 
(обратиться к элементу массива по индексу)*/

const lestelem2 = numberssquared[numberssquared.length -1]
console.log(lestelem2)

const lestelem3 = numberssquared.slice(-1)
console.log(lestelem3) /*получила новый массив с последним элементом*/

const lestelem = numberssquared.pop(6)
console.log(lestelem)



console.log("_____________6______________")
/*Дан объект user. Используя данные из объекта, 
сформировать строку в формате: 
‘User’s name is  . He is  years old’*/

const user = {
    firstname: "Ivan",
    lastname: "Ivanov",
    age: 20, 
    salary: 500
}

console.log(`User's name is: ${user.firstname} ${user.lastname}. He is ${user.age} years old.`)
console.log("User's name is: " + user.firstname + " " + user.lastname + ". He is " + user.age + " years old.")