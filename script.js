const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const name = 'MUHAMMAD TAUFIQ BIN JURIMI';
const nameElem = document.getElementById('name');
let i = 0;

const birthDate = new Date('2002-12-09');

function typeWriter() {

  if (i < name.length) {
    nameElem.innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
  setTimeout(function () {
    var button = document.querySelector('.button-container');
    button.style.zIndex = 2;
    var button = document.querySelector('.button-container');
    button.style.opacity = 1;
  }, 7000);
}

typeWriter();

function setTimeDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const timeDate = now.toLocaleString('en-US', options);
  document.getElementById('time-date').innerHTML = timeDate;
}

function updateAge() {
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

  // Display age with 5 decimal places
  const ageText = ageInYears.toFixed(10);

  // Update the age on the page
  document.getElementById('age').textContent = "I am a " + ageText + " years old developer";
}

setInterval(setTimeDate, 1000);
setInterval(updateAge, 50);

updateAge();