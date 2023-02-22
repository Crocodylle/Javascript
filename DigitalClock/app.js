 
const hourElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".seconds");
const ampmElement = document.querySelector(".ampm");

function updateClock() {
  const currentDate = new Date();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;



  hourElement.textContent = hour;
  minuteElement.textContent = minute;
  secondElement.textContent = second;
  ampmElement.textContent = ampm;
}

setInterval(updateClock, 1000);