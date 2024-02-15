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
////////////

// console.log(document.documentElement.children);
// console.log(document.documentElement.childNodes);
// console.log(document.body.children);

// const bodyElem = document.body;
// console.log(bodyElem.children);
// console.log(bodyElem.lastElementChild);
// console.log(bodyElem.lastElementChild.previousElementSibling);
// console.log(bodyElem.firstElementChild.nextElementSibling);
// //console.log(bodyElem.lastChild.previousSibling);

// console.log(bodyElem.parentElement);

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); //Объект промиса


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.getElementById("datetime-picker");
const startButton = document.getElementById("start-button");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;
let userSelectedDate;

// Инициализация flatpickr
flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future'
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  }
});

// Функция для запуска таймера
function startTimer() {
  startButton.disabled = true;
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = userSelectedDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
    } else {
      const { days, hours, minutes, seconds } = convertMs(distance);
      daysElement.textContent = addLeadingZero(days);
      hoursElement.textContent = addLeadingZero(hours);
      minutesElement.textContent = addLeadingZero(minutes);
      secondsElement.textContent = addLeadingZero(seconds);
    }
  }, 1000);
}

// Функция добавления ведущего нуля
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Функция для конвертации миллисекунд в дни, часы, минуты и секунды
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

// Обработчик события нажатия на кнопку "Start"
startButton.addEventListener('click', startTimer);