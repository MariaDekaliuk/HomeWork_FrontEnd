// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
// Получаем div с классом "numbers"
const numbersDiv = document.querySelector(".numbers");

// Перебираем каждое десятое число от 100 до 50
for (let i = 100; i >= 50; i -= 10) {
 
   // Создаем новый элемент параграфа 
  const newParagraph = document.createElement("p");

  // Устанавливаем текстовое содержимое абзаца на текущий номер
  newParagraph.textContent = i;

  // Добавляем новый параграф к числам div
  numbersDiv.appendChild(newParagraph);
}




// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
const strings = ["Zur Hochzeit alle guten Wünsche", "soll es euch immer wohl egrehn,", "denn es gibt tausend Gründe", "die Welt gemeinsam zu bestehn"];
const stringsContainer = document.querySelector(".stringscontainer");

for (let i = 0; i < strings.length; i++) {
  const paragraph = document.createElement("p");
  const textNode = document.createTextNode(strings[i]);
  paragraph.appendChild(textNode);
  stringsContainer.appendChild(paragraph);
}




// Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.
// Sample data
const users = [
    { firstname: 'Masha', lastname: 'Krugel', age: 43 },
    { firstname: 'Ivan', lastname: 'Durak', age: 17 },
    { firstname: 'Svetlana', lastname: 'Ivanova', age: 13 },
    { firstname: 'Michael', lastname: 'Watson', age: 58 },
    { firstname: 'Evelina', lastname: 'Vaters', age: 17 },
  ];
  
  // Get the container element where we'll add the user cards
  const container = document.querySelector('.userscontainer');
  
    for (const user of users) {
    if (user.age >= 18) { 
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${user.firstname} ${user.lastname}</h2>
        <p>Age: ${user.age}</p>
      `;

      container.appendChild(card);
    }
  }


// используем метод querySelector, чтобы получить элемент контейнера, в который мы добавим карточки пользователей.

// используем цикл for...of, чтобы пройтись по массиву пользователей и проверить, является ли каждый пользователь взрослым (>= 18 лет). 
//Для каждого взрослого пользователя создаем новый элемент div с классом 'card' и добавляем в него информацию о пользователе с помощью innerHTML. 

// добавляем каждую карту в элемент контейнера, используя метод appendChild.