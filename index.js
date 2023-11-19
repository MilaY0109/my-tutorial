function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content); 
    const paddingWidth = parseFloat(padding); 
    const borderWidth = parseFloat(border); 
    return contentWidth + (paddingWidth * 2) + (borderWidth * 2);
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 

let a 
a = true 
a = 4 
let b 
console.log(b)
b = 24
console.log(b)

//alert('Good day!');
//console.log(alert)

function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    }
}
console.log(checkAge(3));
console.log(a + b);


//console.log(checkPass('cat24'));


function checkPass(pass) {
    if (pass === 'cat24') {
        return 'Submited'
    } else {
        return 'Unsubmited'
    }
}

console.log(checkPass('cat24'));

let text1 = "20";
let text2 = "5";
let result = text1 < text2;
console.log(result);

a = 5;
b = 8;

if(a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}
console.log(biggerNumber);

function checkPassword(password) {
    const correctPassword = "jqueryismyjam";
    return correctPassword === password ? "Access granted" : "Access denied, wrong password!";
}
console.log(checkPassword("ghjkl"));

function getSubscriptionPrice(type) {
  switch (type) {
        case "starter":
            return 0;
        case "professional":
            return 20;
        case "organization":
            return 50;
        default:
            return "Invalid subscription type!";
    }
}
console.log(getSubscriptionPrice("professional"));


const sm=320;
const md=768;
const lg = 1200;

function checkscreenWidth(screenWidth) {

    if (screenWidth <= sm) {
        return "Mobile screen";
    } else if (screenWidth > sm && screenWidth <= md) {
        return "Tablet screen";
    } else if (screenWidth > md && screenWidth <= lg) {
        return "Desktop screen";
    } else {
        return "Godzilla screen";
    }
}

console.log(checkscreenWidth(420));




function isNumberInRange(start, end, number) {
    if (number >= start && number <= end)
    {
        return "ok";
    }
    else {
        return "no"
     }   
        
}
console.log(isNumberInRange(10, 20, 140));


function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
}

console.log(isNumberInRange(10, 20, 14));

function getSubstring(string, length) {
    return string.slice(string, length);
}
console.log(getSubstring("hello".slice(0, 3)));

function normalizeInput(input, to) {
  return input.toUpperCase("This ISN'T SpaM", to);
}
//console.log(normalizeInput(input, to));


function checkForName(fullName, firstName) {
  const normalizeFullName = fullName.toLowerCase();
    const normalizeFirstName = firstName.toLowerCase();

   
    return normalizeFullName.includes(normalizeFirstName);
}
console.log(checkForName("Jason Neis", "Jason"));

function calculateTotal(number) {
    let sum = 0;
    let b = 1;

    while (b <= number) {
        sum += b;
        b++;
    }

    return sum;
}
console.log(calculateTotal(3));

// 02-1

function makeTransaction(quantity, pricePerDroid, customerCredits) {

    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return 'Insufficient funds!';
    }
    else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;

    }
    
}
// 02-2
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(10, 5000, 8000));

function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message;
    } else {
        return message.slice(0, maxLength) + "...";
    }
}
console.log(formatMessage("Vestibulum facilisis purus nec", 10));

//02-3

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Latest technology "));

//02-4

function getShippingCost(country) {
    let price;
    let message;

    switch (country) {
        case 'China':
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Chile':
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Australia':
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Jamaica':
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
            break;
    }

    return message;
}

console.log(getShippingCost("Australia"));

function getShippingCost(country) {
    let price;
    

    switch (country) {
        case 'China':
            price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Chile':
            price = 250;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Australia':
            price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Jamaica':
            price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country";
            break;
    }

}

console.log(getShippingCost("Australi"));
//-----------------------------------
const order = ["apple", "peach", "pear", "banana"];
function getOrderQuantity(order) {
  return order.length;
}


console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
console.log(order[2]);

//

function getLastElementMeta(array) {
  
    const lastElement = array[lastIndex];
    const firstElement = array[0];
    
  
    return [firstElement, lastElement];
}
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));


