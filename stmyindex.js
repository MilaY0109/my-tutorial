//const usInput = prompt("Яка офіційна назва JavaScript?");

//if (usInput === "ECMAScript") {
  //alert("Вірно!");
//} else {
  //alert("Не знаєте? ECMAScript!");
//}
//
// const globalMinute = 90;
// const hours = Math.floor(globalMinute / 60);
// const minut = globalMinute % 60;
// const modHours = String(hours).padStart(2, 0);
// const modMinut = String(minut).padStart(2, 0);
// console.log(modHours);
// console.log(('$(modHours) '));


//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

// const max = 50
// const min = 23

// for (let i = max; i >= min; i--) {
//   if (i % 2 ===0) {
//     console.log(i);
//   }
// }


//При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

// let total = 0;
// let userInput = prompt('Введіть число:');

// while (true) {
  

//   if (userInput === null) {
//     break; 
    
//   }

//   total += Number(userInput);
// }

// alert(`Загальна сума введених чисел дорівнює ${total}`);


// За допомогою цикла for додайте всі парні числа від min до max

// const max = 50
// const min = 0
// let totalSum = 0

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     totalSum =+ i;
    
//   }
// }
// console.log(totalSum);


//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".


// const login = prompt("Login");
// if (login === "Адмін") {
//   const password = prompt("Password");
//   if (password === "Я головний") {
// alert("Вітаю!")
//   } else {
//     alert("Невірний пароль!");
//   }
// } else if (!login) {
//   alert("Відмінено")

// } else {
//   alert("Я вас не знаю!")
// }

// //----------------------------------------///
// const a = {}; // Создание пустого объекта a
// const b = {}; // Создание пустого объекта b
// const c = {    // Создание объекта c с указанными свойствами e и d
//   e: 3,
//   d: 5,
// };

// a['someProperty'] = 22; // Добавление свойства 'someProperty' со значением 22 в объект a
// b['anotherProperty'] = 23; // Добавление свойства 'anotherProperty' со значением 23 в объект b

// console.log(c);

// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// }
// for (const iterator of object) {
  
// }

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
}
let sum = 0;
for (const value of Object.values(salaries)) {
  sum += value;
  
}
console.log(sum);

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
function clean(arr) {
  const newArr = [];
  for (const item of arr) {
    if (Boolean(item) === true) {
      newArr.push(item)
    }
  }
  return newArr;
}

console.log(clean([0, 1, false, 2, undefined, '', 3, null]));





// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
function updateObject(obj, ...args) {
    const newObject = {};
    const key = Object.keys(obj);
    for (const item of key) {
        if (!args.includes(item)) {
            newObject[item] = obj[item];
        }
        
}
    return newObject;
}

console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));


// const arrNumber = [ 11, 9, 2, 1 ]
// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
//https://uk.javascript.info/

// function reverseArray([arr]) {
//   const reversed = [];
  
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
  
//   return reversed;
// }

// //const arrNumber = [11, 9, 2, 1];
// //const reversedArray = reverseArray(arrNumber);
// console.log(reverseArray([11, 9, 2, 1]));

function reverseArray(arr) {
  const reversed = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  
  return reversed;
}

console.log(reverseArray([11, 9, 2, 1])); 




