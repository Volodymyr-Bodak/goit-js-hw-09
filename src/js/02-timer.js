let countdownInterval;
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");
let targetDate;
startBtn.disabled = true;

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  daysElement.textContent = addLeadingZero(days);
 
  const hours = Math.floor((ms % day) / hour);
  hoursElement.textContent = addLeadingZero(hours);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesElement.textContent = addLeadingZero(minutes);
 
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsElement.textContent = addLeadingZero(seconds);
 
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      const today = new Date();
      if (selectedDates[0] < today) {
        Notiflix.Notify.warning("Please choose a date in the future");
      } else{
        startBtn.disabled = false;
        targetDate = selectedDates[0];
      }
  
      
      
      },
    };
    
  flatpickr(input, options);



  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const ms = targetDate - currentDate;
      convertMs(ms);
  
      if (ms <= 0) {
        clearInterval(countdownInterval);
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
      }
    }, 1000);
  });