//const usInput = prompt("Яка офіційна назва JavaScript?");

//if (usInput === "ECMAScript") {
  //alert("Вірно!");
//} else {
  //alert("Не знаєте? ECMAScript!");
//}
//
const globalMinute = 90;
const hours = Math.floor(globalMinute / 60);
const minut = globalMinute % 60;
const modHours = String(hours).padStart(2, 0);
const modMinut = String(minut).padStart(2, 0);
console.log(modHours);
console.log(('$(modHours) '));


//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

const max = 50
const min = 23

for (let i = max; i >= min; i--) {
  if (i % 2 ===0) {
    console.log(i);
  }
}


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


const login = prompt("Login");
if (login === "Адмін") {
  const password = prompt("Password");
  if (password === "Я головний") {
alert("Вітаю!")
  } else {
    alert("Невірний пароль!");
  }
} else if (!login) {
  alert("Відмінено")

} else {
  alert("Я вас не знаю!")
}


