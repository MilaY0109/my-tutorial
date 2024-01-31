// console.log(document.documentElement.childNodes);
// console.log(document.documentElement.lastChild.previousSibling);
// console.log(document.documentElement.firstChild.nextSibling);
// console.log(document.documentElement.childNodes[2]);
// console.log(document.body);

// const secondNode = document.documentElement.childNodes[1];
// console.log(secondNode);
// console.log(secondNode.nextSibling);

// const body = document.body;
// console.log(body);
// console.log(body.parentNode);
// console.log(body.parentNode === document.documentElement);

console.log(document.documentElement.children);
console.log(document.documentElement.childNodes);
console.log(document.body.children);

const bodyElem = document.body;
console.log(bodyElem.children);
console.log(bodyElem.lastElementChild);
console.log(bodyElem.lastElementChild.previousElementSibling);
console.log(bodyElem.firstElementChild.nextElementSibling);
//console.log(bodyElem.lastChild.previousSibling);

console.log(bodyElem.parentElement);