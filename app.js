console.log("JS clock");
const digiHour = document.querySelector(".digiHour");
const digiMinute = document.querySelector(".digiMinute");
const digiSecond = document.querySelector(".digiSeconds");


const secondsHand = document.querySelector(".second-hand");
function rotateSecondHand() {
  const now = new Date();
  const seconds = now.getSeconds();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`; 
  digiSecond.innerHTML = `:${seconds < 10 ? "0"+seconds: seconds}`;
  console.log("seconds --", seconds, secondsDegrees);
}

const minHand = document.querySelector(".min-hand");
function rotateMinuteHand() {
  const now = new Date();
  const minutes = now.getMinutes();
  const minutesInDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  digiMinute.innerHTML = `:${minutes < 10 ? "0"+minutes : minutes}`;
  console.log("minutes --", minutes, minutesInDegrees);
}

const hourHand = document.querySelector(".hour-hand");
function rotateHourHand() {
  const now = new Date();
  const hours = now.getHours();
  const hoursInDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
  digiHour.innerHTML = `${hours}`;
  console.log("hours --", hours, hoursInDegrees);
}

rotateSecondHand();
rotateMinuteHand();
rotateHourHand();

setInterval(rotateSecondHand, 1000);
setInterval(rotateMinuteHand, 60 * 1000);
setInterval(rotateHourHand, 60 * 60 * 1000);

