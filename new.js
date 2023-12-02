// const brand = 'Tesla';
// const year = 2023;
// console.log(`Car ${brand} - ${year} production`);
// console.log(brand.length);
// console.log(brand.toUpperCase());

// const car = {
//     brand: 'BMW',
//     color: 'silver',
//     year: 2021,
//     atStock: true
// }
// console.log(car.brand)

// const age = 40;
// const age2 = 60;
// console.log(age === age2);

// if (10 > 5) {
//     console.log('Yes');
// } 
// if (10 > 12) {
//     console.log('Yes1');
// } else {
//     console.log('No');
// }
// if (10 >= 10) {
//     console.log('Yes2');
// }

// if (10 === 5) {
//     console.log('Yes');
// } else if (10 === 10) {
//     console.log('Ye');
// }
 
// const brand = 'BMW';
// switch (brand) {
//     case 'BMW':
//         console.log('BMW');
//         break;
//     case 'Tesla':
//         console.log('Tesla');
//     default:
//         console.log('No');
// }

// const brand = 'Tesla';
// const car = brand === 'Tesla' ? 'ok' : 'bad';
// console.log(car);

//----------Function----{ }----////

// const numOne = 13;
// const numTwo = 10;

// function calculateTotal(n1, n2) {
//     return n1 + n2;
// }

// const calculateTotal = function(n1, n2) {
//     return n1 + n2;
// }



// const calculateTotal = (n1, n2) => {
//      return n1 + n2;
// }
 
// const calculateTotal = (n1, n2) => n1 + n2; 
// const total = calculateTotal(numOne, numTwo)
//console.log(calculateTotal(numOne, numTwo));

// --------Arrays---[ ]---массивы---//

// const students = ['tom', 'alex', 'vlad'];
// console.log(students[0]);
// students.push('kate');
// students.unshift('ann');
// students.pop();
// console.log(students.includes('alex'));

// console.log(students.indexOf('vlad'));

// const welcomeSt = students.map(function (studentName) {
//     return `Welcome ${studentName}`;
// })
// console.log(welcomeSt);


//---------Objects------//
// const brand = 'Tesla';
// const car = {
//     brand,
//     color: 'silver',
//     year: '2023',
//     options: ['diesel', 'sportseats'],
//     atStock: true,
//     engine: {
//         turbo: true,
//         type: 'v8'
//     },
//     'cool-car': true // coolCar: true

// }
// car.model = 'sedan';
// //delete car.year;

// //console.log(car.engine ? car.engine.type : 'not available');
// console.log(car?.color);
// console.log(car.engine?.type);

//  if (car.engine) {
//      console.log(car.engine.type);
//  }

//------ Loops-----циклы-----//

// const products = ['ham', 'cheese', 'eggs'];

// function listIngredients(ingredient, index) {
//     if (index === 0) {
//         console.log(ingredient, index);
//     }
// }
// products.forEach(listIngredients);

//-----DOM----///

//const h2 = document.querySelectorAll('h2');
// const h2 = document.querySelector('h2');
// //const h2 = document.querySelector('.container h2');
// h2.textContent = 'New test Js';
// h2.style.color = 'blue';
// console.log(h2);

//-------Event------///
//------------------//

const textArr = ['use', 'that', 'book']
console.log(textArr.join(' and '));

const text = 'price_per_item';
const textNew = text.split('_');
console.log(textNew.join('-'));
console.log(textNew.length);
//console.log(text.split('_'));

function getLength(array) {
  const textN = array.join('');
  return textN.length;
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"]));


function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ')
    return words.length * pricePerWord;
    
}
console.log(calculateEngravingPrice("Web-development is creative work", 40));

//---------------------OBJECTS--------------------------//

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
   tags: ["premium", "promoted", "top"],
};
console.log(user.location.city);
console.log(user.tags[user.tags.length - 1]);
console.log(user.tags.length);

//const tag = ["premium", "promoted", "top"];
//const lastTag = tag[tag.length - 1];
//console.log(tag[tag.length - 1]);

//-----FOR--OF-----//

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const objItems = Object.keys(apartment);
const itemsFeatrs = [];

for (let item of objItems) {
  itemsFeatrs.push(apartment[item]);
}
console.log(objItems); //(3) ['descr', 'rating', 'price']


console.log(itemsFeatrs); // (3) ['Spacious apartment in the city center', 4, 2153]


//--------FOR---IN------//

const apartment1 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];
for (let ke in apartment1) {
  keys.push(ke);
  values.push(apartment1[ke]);
}
console.log(keys);
console.log(values);
//------------------------/////

const salaries = {
  mango: 100,
  poly: 150,
  alfred: 80,
}


function countTotalSalary(salaries) {
  let totalSalary = 0;
  
  for (const salary of Object.values(salaries)) {
  totalSalary += salary; 
}
  return totalSalary;
}

console.log(countTotalSalary(salaries));


function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const item of products) {
    if (item.name === productName) {
      return item.price;
    }
  }

  return null;
}


console.log(getProductPrice("Scanner"));

function add(...args) {
  let sum = 0;
  for (let arg of args) 
    sum += arg;
  return sum;
}
console.log(add(15, 27));



function addOverNum(value, ...args) {
  let total = 0;

  for (let arg of args) {
    if (arg > value) {
      total += arg;
    }
  }

  return total;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 22));

//function contSize(prod, amount) {
//   const total = 0;
//   for (const item of prod) {
//     if (total = +item <= amount)
//       return true
//   }
// return false
  //




function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (const item in products) {
    total += products[item];
  }

  return total <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
);
//--------/////TASK-2---//
function calcAverageCalories(days) {
  let totalCalories = 0;

  for (let i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }

  const averageCalories = totalCalories / days.length;
  return averageCalories;
}

console.log(
    calcAverageCalories([]));

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);


function calcAverageCalor(days) {
  let totalCal = 0;

  for (let item  of days) {
    totalCal += item.calories;
  }

  const averageCalor = totalCal / days.length;
  return averageCalor;
}

console.log(
  calcAverageCalor([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);

//---------------------------/////

const profile = {
  
username: "Jacob",
playTime: 300,
  
changeUsername(newName) {
    this.username = newName;
  },
  
updatePlayTime(hours) {
this.playTime += hours;
  },
  
getInfo() {
    
return `${this.username} has ${this.playTime} active hours!`;
  }
};


  profile.updatePlayTime(20);
console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

//----------------------------------//

const password = 'cat';
const myKey = password;

const obj = {
  [myKey]: 'false',
};

console.log(obj);