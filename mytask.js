// const objB = {
// 	b: "objB prop"
// };

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango); 
// console.log(User.prototype);

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній


// function letMeSeeYourName(callback) {
//   const name = prompt('Enter your name');
//   callback(name)
// }




// function greet(userName) {
//   console.log(userName);
// }

// letMeSeeYourName(greet);

// //==============================

// // Напишіть дві функції
// // makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// // Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// // передаючи йому створений об"єкт
// // showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль





// function makeProduct(name, price, callback) {
//     const newProduct = {
//         id: Date.now(), 
//         name,
//         price, 
//     }
//     callback(newProduct)

// }
// function showProduct(product) {
//     console.log(product);
    
// }
// makeProduct("apple", 17, showProduct)
// makeProduct("apple", 17, showProduct)

// //=====================================
// // Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// // Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
// //     яка пам"ятає ім"я шефа під час свого виклику
// // const makeDish = function (shefName, dish) {
// //   console.log(`${shefName} is cooking ${dish}`)
// // }

// // makeDish('Mango', 'apple pie')
// // makeDish('Poly', 'muffins')

// const makeShef = (shefName) => (dish) => {
//     console.log(`${shefName} is cooking ${dish}`)
// }

// const mango = makeShef('Mango');

// mango('apple pie')
// mango('pie')
// mango('pizza')

// // makeDish('Mango', 'apple pie')
// // makeDish('Poly', 'muffins')

// //===========================
// //  Написати клас, який буде представляти зоопарк тварин.
// //  Створити загальний клас Animal для тварин.
// // У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// // Кожен тип тварин повинен мати свої властивості та методи, наприклад,
// //  методи для отримання інформації про тварину та для годівлі тварин.
// //  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// // метод для виведення списку всіх тварин у зоопарку.

// class Zoo {
//     constructor() {
//     this.animals = [];
//     }
//     addAnimal(animal){
//         this.animals.push(animal);
//     }
//     getAnimals() {
//         console.log(this.animals);
//     }
//     addAnimals(...animals) {
//         this.animals.push(...animals);
//     }
// }

// class Animals {
// constructor (name, type) {
//     this.name = name;
//     this.type = type;
// }
// }
// class Bird extends Animals {
//     constructor(name, type, food) {
//         super(name, type);
//         this.food = food;
//     } 
//     getInfo() {
//         console.log(`Name ${this.name}, type ${this.type}`);
//     }
//     feed() {
//         console.log (`${this.name} eat ${this.food} `)
//     }

// }

// class Crocodile extends Animals {
//     constructor(name, type, food) {
//         super(name, type);
//         this.food = food;
//     } 
//     getInfo() {
//         console.log(`Name ${this.name}, type ${this.type}`);
//     }
//         feed() {
//         console.log (`${this.name} eat ${this.food} `)
//     }
// }
// const eagle = new Bird('Eagle', 'bird', 'grain');
// const parrot = new Bird('Parrot', 'bird', 'seed');
// const snake = new Crocodile('Snake', 'reptilies', 'mouse');
// const crocodile = new Crocodile('crocodile', 'reptilies', 'meat');
// eagle.getInfo();
// eagle.feed();
// snake.getInfo();
// crocodile.feed();
// const villageZoo = new Zoo();
// villageZoo.addAnimal(eagle);
// villageZoo.getAnimals();
// villageZoo.addAnimals(snake, crocodile, parrot);
// villageZoo.getAnimals();


// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість Priopity,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

class Notes {
  static Priority() {
    return {HIGHT:"hight", LOW:"low"}
  }
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter(item => item.text !== text);
  }
  updatePriority(text, newPriority) {
    const index = this.items.findIndex(item => item.text === text);
    if (index !== -1) {
      this.items[index].priority = newPriority;
    }
  }
} 
const note1 = new Notes();
note1.addNote({ text: "Task-1", priority: Notes.Priority().HIGHT })
note1.addNote({ text: "Task-2", priority: Notes.Priority().HIGHT })
note1.updatePriority("Task-1", Notes.Priority().LOW)
note1.removeNote("Task-2")
console.log(note1);